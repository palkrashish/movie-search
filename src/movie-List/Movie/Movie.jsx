import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id, title, release_date, poster_path, vote_average, overview } =
    movie;
  return (
    <li className="movie">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="movie-image"
        />
      </Link>
      <div className="movie_info">
        <h5> {title} </h5>
        <div>
          <b>Release Date:- </b> {release_date}{" "}
        </div>
        <div>
          <b>Rating:- </b> {vote_average.toFixed(1)}{" "}
        </div>
        {/* <div><b>Overview:- </b> {overview} </div> */}
      </div>
    </li>
  );
};

export default Movie;
