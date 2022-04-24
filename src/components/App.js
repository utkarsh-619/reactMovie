import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import ShowDetail from "./ShowDetail";

const App = () => {
  const [inputMovie, setInputMovie] = useState("Iron man");
  const [movies, setMovies] = useState([]);
  const [isFullDetail, setIsFullDetail] = useState(false);
  const [fullDetail, setFullDetail] = useState({});

  const getMovieRequest = async (value) => {
    if (value) {
      const url = `https://www.omdbapi.com/?s=${value}&apikey=e6701fa7`;

      const response = await fetch(url);
      const responseJson = await response.json();

      setMovies(responseJson.Search);
    }
  };

  const detailHandler = async (event) => {
    setIsFullDetail(true);
    const url = `http://www.omdbapi.com/?i=${event.target.id}&apikey=e6701fa7`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setFullDetail(responseJson);
  };

  const inputHanddler = (event) => {
    setIsFullDetail(false);
    setInputMovie(event.target.value);
  };

  useEffect(() => {
    getMovieRequest(inputMovie);
  }, [inputMovie]);

  return (
    <div className="movie-app">
      <header>
        <div className="title">React Movies</div>
        <input
          type="text"
          onChange={inputHanddler}
          placeholder="Serch movie here"
        />
      </header>

      {isFullDetail && <ShowDetail details={fullDetail} />}

      <div className="row">
        <MovieList movies={movies} setFunc={detailHandler} />
      </div>

      <br />
      <br />
      {!isFullDetail && <p>Click on the poster to get the details</p>}
      {isFullDetail && <p>Try to seach another movie</p>}

      <br />
      <p>Made by Utkarsh</p>
    </div>
  );
};

export default App;
