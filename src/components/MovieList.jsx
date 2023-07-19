import React, { useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies, getMovies } = useMovieContext();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movieList">
      {movies.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MovieList;
