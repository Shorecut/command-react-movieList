import React, { createContext, useContext, useReducer } from "react";
import { ACTION, API } from "../utils/consts";
import axios from "axios";
import { notify } from "../components/Toastify";

const movieContext = createContext();

export function useMovieContext() {
  return useContext(movieContext);
}

const init = {
  movies: [],
  movie: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.movies:
      return { ...state, movies: action.payload };
    case ACTION.movie:
      return { ...state, movie: action.payload };
  }
}

const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  async function getMovies() {
    try {
      const { data } = await axios.get(API);
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
      notify("Deleted", "error");
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
    getMovies,
    getOneMovie,
    addMovie,
    deleteMovie,
    editMovie,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

export default MovieContext;
