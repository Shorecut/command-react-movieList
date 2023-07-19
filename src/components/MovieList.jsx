import React, { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieItem from "./MovieItem";
import { Button } from "react-bootstrap";

const MovieList = () => {
  const { movies, getMovies } = useMovieContext();
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [minMovies, setMinMovies] = useState(movies);

  useEffect(() => {
    getMovies();
  }, []);

  function sort_plus() {
    movies.sort((a, b) => (+a.stars > +b.stars ? -1 : 1));
    setSortedMovies(movies);
  }
  function sort_minus() {
    movies.sort((a, b) => (+a.stars < +b.stars ? -1 : 1));
    setMinMovies(movies);
  }

  //const sort = movies.sort((a, b) => (+a.stars > +b.stars ? -1 : 1));

  return (
    <div>
      <div className="sort-btn">
        <Button
          onClick={sort_plus}
          className="first_button"
          variant="outline-light"
        >
          Popular
        </Button>
        <Button onClick={sort_minus} variant="outline-light">
          Low Rating
        </Button>
      </div>
      <div className="movieList">
        {movies.map((item) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
