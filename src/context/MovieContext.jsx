import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTION, API, LIMIT } from "../utils/consts";
import axios from "axios";
import { notify } from "../components/Toastify";
import { useSearchParams } from "react-router-dom";

const movieContext = createContext();

export function useMovieContext() {
  return useContext(movieContext);
}

const init = {
  movies: [],
  movie: null,
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.movies:
      return { ...state, movies: action.payload };
    case ACTION.movie:
      return { ...state, movie: action.payload };
    case ACTION.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

const MovieContext = ({ children }) => {
  const [searchPar, setSearchPar] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, init);
  const [page, setPage] = useState(+searchPar.get("_page") || 1);

  async function getMovies() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`
      );
      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);

      dispatch({
        type: ACTION.pageTotalCount,
        payload: totalCount,
      });

      dispatch({
        type: ACTION.movies,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneMovie(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTION.movie,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovie(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }

  async function editMovie(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
      notify("changed");
    } catch (error) {
      console.log(error);
    }
  }

  async function addMovie(newMovie) {
    try {
      await axios.post(API, newMovie);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    movies: state.movies,
    movie: state.movie,
    pageTotalCount: state.pageTotalCount,
    getMovies,
    getOneMovie,
    addMovie,
    deleteMovie,
    editMovie,
    page,
    setPage,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

export default MovieContext;
