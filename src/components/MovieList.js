import React from "react";
import "./MovieList.css";

const MovieList = (props) => {

  const imageList = (movie, index) => {
    return (
      <div
        className="img-cover"
        id={movie.imdbID}
        key={index}
        onClick={props.setFunc}
      >
        <img
          className="small-image"
          id={movie.imdbID}
          src={movie.Poster}
          alt="movie"
        />
      </div>
    );
  }

  if(!props.movies){
    return (
      <div className="not-found">No movie found! Please search somethig else </div>
    )
  }
  return <>
    {props.movies.map(imageList)}
  </>;
};

export default MovieList;
