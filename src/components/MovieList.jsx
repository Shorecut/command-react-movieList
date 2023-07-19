import React, { useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieItem from "./MovieItem";
import { Button } from "react-bootstrap";

const MovieList = () => {
  const { movies, getMovies } = useMovieContext();

  useEffect(() => {
    getMovies();
  }, []);

  const sort = movies.sort((a, b) => (+a.stars > +b.stars ? -1 : 1));

  return (
    <div className="movieList">
      {sort.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MovieList;
