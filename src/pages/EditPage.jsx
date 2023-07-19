import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useMovieContext } from "../context/MovieContext";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { editMovie, getOneMovie, movie } = useMovieContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [formVal, setFormVal] = useState({
    title: "",
    date: "",
    stars: "",
    image: "",
  });

  useEffect(() => {
    getOneMovie(id);
  }, []);

  useEffect(() => {
    if (movie) {
      setFormVal(movie);
    }
  }, [movie]);

  function handleChange(e) {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formVal.title.trim() ||
      !formVal.date === "" ||
      !formVal.stars.trim() ||
      !formVal.image.trim()
    ) {
      return;
    }

    editMovie({ ...formVal, date: +formVal.date });

    navigate(-1);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Edit Movie</h2>

      <Form onSubmit={handleSubmit} className="mx-auto inp-form">
        <Form.Control
          name="title"
          value={formVal.title}
          placeholder="Movie title"
          onChange={handleChange}
          className="w-25"
        ></Form.Control>
        <Form.Control
          name="date"
          value={formVal.date}
          placeholder="date"
          onChange={handleChange}
          className="mt-3 w-25"
        ></Form.Control>
        <Form.Control
          name="stars"
          value={formVal.stars}
          placeholder="rating"
          onChange={handleChange}
          className="mt-3 w-25"
        ></Form.Control>
        <Form.Control
          name="image"
          value={formVal.image}
          placeholder="image"
          onChange={handleChange}
          className="mt-3 w-25"
        ></Form.Control>
        <Button
          type="submit"
          variant="outline-success"
          className="w-25 text-align-center mt-2"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
