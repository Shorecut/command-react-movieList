import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useMovieContext } from "../context/MovieContext";
import { useSearchParams } from "react-router-dom";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(+searchParams.get("q") || "");
  const { setPage } = useMovieContext();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      q: searchVal,
    });
    setPage(1);
  }, [searchVal]);
  console.log(setSearchVal);
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          inputProps={{ "aria-label": "search" }}
          placeholder="movies"
          aria-label="movies"
        />
      </InputGroup>
    </div>
  );
};

export default LiveSearch;
