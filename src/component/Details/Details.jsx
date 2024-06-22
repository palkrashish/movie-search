import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviesDetails, getMoviesCredits } from "../../redux/features/detailsSlice";
import "./Details.css";

const Details = () => {
  const { isLoading, errorMsg, details,credits } = useSelector(
    (state) => state.details
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesDetails(id));
    dispatch(getMoviesCredits(id));
  }, [id]);
  console.log('Credits', credits)
    
  const { title, poster_path, release_date, vote_average, overview } = details;
  
  return (
    <div className="movies-detials">
      {isLoading && <p className="loading">Loading...</p>}
      {errorMsg && <p className="error-msg">{errorMsg} </p>}
      <div className="movie-details-info">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="img"
        />
       <div className="extra-detials" > <h5> {title} </h5>
       <div> <span><b>Release Date:- </b></span> {release_date}</div>
       <div><b>Rating:- </b> {vote_average}</div>
       <div><b>Description:- </b> {overview}</div>
       </div>
      </div>
    </div>
  );
};

export default Details;
