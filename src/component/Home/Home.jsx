import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import MovieList from "../../movie-List/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/features/movieSlice";
import { debounce } from "loadsh";

const Home = () => {
  const {
    isLoading,
    errorMsg,
    data: movies
  } = useSelector((state) => state.movies);
  const searchRef = useRef();
  // debounce uses
  useEffect(() => {
    searchRef.current = debounce(searchMovies, 1000);
  }, []);

  function searchMovies() {
    //Make an API Call
    dispatch(getMovies());
  }

  const dispatch = useDispatch();
  const handleSearch = (searchTerm) => {
    // if user not typing here we are checking
    if (searchTerm.trim() !== "") {
      searchRef.current(searchTerm);
    }
  };
  console.log("movies", movies);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (errorMsg) {
  //   return <p> {errorMsg} </p>;
  // }
  return (
    <div>
      <Header />
      <div className="main-content">
        <Search handleSearch={handleSearch} />
        {isLoading && <p>Loading...</p>}
        {errorMsg && <p>{errorMsg} </p>}
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default Home;
