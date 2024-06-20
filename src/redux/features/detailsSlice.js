import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API_URL } from '../../utils/constants'
export const getMoviesDetails = createAsyncThunk("details", async (id) => {
  try {
    const { data } = await axios.get(
      '/details.json'
    //   `${BASE_API_URL}/movie/?268?api_key=${
    //     import.meta.env.VITE_MOVIE_API_KEY
    //   }`
    );
    return data;
  } catch (error) {
    console.log("error",error)
  }
});

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    isLoading: false,
    errorMsg: "",
    details: [],
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
        state.errorMsg ="Error while getting movie information... Kindly try again later";
      });
  },
});

export default detailsSlice.reducer;
