import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useSearchParams } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Filter() {
  const { setPage } = useMovieContext();
  const [category, setCategory] = useState("all");
  const [searchPar, setSearchPar] = useSearchParams();

  const handleChange = (_, value) => {
    value && setCategory(value);
  };
  useEffect(() => {
    const currentPar = Object.fromEntries([...searchPar]);

    if (category === "all") {
      const { _limit, _page, q } = currentPar;
      setSearchPar({
        _limit,
        _page,
      });
    } else {
      setSearchPar({
        ...currentPar,
        category,
      });
      setPage(1);
    }
  }, [category]);

  return (
    <ToggleButtonGroup
      className="category_btns"
      color="secondary"
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        sx={{ color: "white", border: "1px solid white" }}
        value="all"
      >
        All
      </ToggleButton>
      <ToggleButton
        sx={{ color: "white", border: "1px solid white" }}
        value="movie"
      >
        Movie
      </ToggleButton>
      <ToggleButton
        sx={{ color: "white", border: "1px solid white" }}
        value="cartoon"
      >
        Cartoons
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Filter;
