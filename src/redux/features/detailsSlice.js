import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API_URL } from "../../utils/constants";
import { getCast, getCrew } from "../../utils/function";
export const getMoviesDetails = createAsyncThunk("details", async (id) => {
  const { data } = await axios.get(
    // '/details.json'
    `${BASE_API_URL}/movie/${id}?api_key=${import.meta.env.VITE_MOVIE_API_KEY}`
  );
  return data;
});

export const getMoviesCredits = createAsyncThunk("credits", async (id) => {
  const { data } = await axios.get(
    // '/details.json'
    `${BASE_API_URL}/movie/${id}/credits?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`
  );
  const cast = getCast(data.cast);
  // console.log("cast", cast);
  const { producers, directors } = getCrew(data.crew);

  return {
    cast,
    producers,
    directors,
  };
});

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    isLoading: false,
    errorMsg: "",
    details: [],
    credits: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getMoviesDetails.pending, (state) => {
      state.isLoading = true;
      state.errorMsg = "";
    }),
      builder.addCase(getMoviesDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMsg = "";
        state.details = action.payload;
      }),
      builder.addCase(getMoviesDetails.rejected, (state) => {
        state.isLoading = false;
        state.errorMsg =
          "Error while getting movie information. Kindly try again later...";
      }),
      builder.addCase(getMoviesCredits.pending, (state) => {
        state.isLoading = true;
        state.errorMsg = "";
      }),
      builder.addCase(getMoviesCredits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMsg = "";
        state.credits = action.payload;
      }),
      builder.addCase(getMoviesCredits.rejected, (state) => {
        state.isLoading = false;
        state.errorMsg =
          "Error while getting movie credit. Kindly try again later...";
      });
  },
});

export default detailsSlice.reducer;
