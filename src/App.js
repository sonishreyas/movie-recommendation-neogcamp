import React, { useState } from "react";
import "./styles.css";

var moviesDictionary = {
  Horror: [
    { name: "Annabelle: Creation", rating: "3/5" },
    { name: "Conjuring", rating: "4/5" },
    { name: "Get Out", rating: "3.5/5" }
  ],
  Comedy: [
    { name: "Chhichhore", rating: "5/5" },
    { name: "All the Best", rating: "3/5" },
    { name: "Hangover", rating: "3/5" }
  ],
  Action: [
    { name: "Spiderman: Far From Home", rating: "3.5/5" },
    { name: "The Dark Knight", rating: "4/5" },
    { name: "Venom", rating: "3.5/5" }
  ],
  Thriller: [
    { name: "Shutter Island", rating: "4.5/5" },
    { name: "Don't Breathe", rating: "3/5" },
    { name: "Seven ", rating: "3.5/5" }
  ]
};

var genre = Object.keys(moviesDictionary);

export default function App() {
  const [movies, setMovies] = useState([]);
  function onClickHandler(genrename) {
    var movies = moviesDictionary[genrename];
    setMovies(movies);
  }
  return (
    <div className="App">
      <div className="container-center">
        <h1>Movies</h1>
        <p>
          These are some of my favorite movies. Select a genre to get started.
        </p>
        <br />
        {genre.map(function movies(genrename) {
          return (
            <div
              onClick={() => onClickHandler(genrename)}
              className="button"
              key={genrename}
            >
              {genrename}
            </div>
          );
        })}
        <br /> <br />
        <hr />
        {movies.map(function moviesDetails(movie) {
          return (
            <div className="movies-box">
              <p>
                <strong>{movie["name"]}</strong>
                <br />
                <small> {movie["rating"]}</small>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
