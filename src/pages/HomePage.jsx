import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { LIMIT } from "../utils/consts";
import { Pagination } from "react-bootstrap";

const HomePage = () => {
  const [searchPar, setSearchPar] = useSearchParams();
  const { getMovies, page, setPage, pageTotalCount } = useMovieContext();
  useEffect(() => {
    getMovies();
  }, [searchPar]);
  useEffect(() => {
    const currentPar = Object.fromEntries([...searchPar]);

    setSearchPar({
      ...currentPar,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);
  return (
    <div>
      <MovieList />
      <div className="pag-list">
        <Pagination
          page={page}
          count={pageTotalCount}
          onChange={(_, val) => setPage(val)}
          className="pag-list_item"
        >
          {[...Array(pageTotalCount)].map((_, i) => (
            <Pagination.Item onClick={() => setPage(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
