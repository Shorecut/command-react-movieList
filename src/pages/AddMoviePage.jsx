import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  const navigate = useNavigate();
  const { addMovie } = useMovieContext();
  const [formVal, setFormVal] = useState({
    title: "",
    date: "",
    stars: "",
    image: "",
  });

  function handleChange(e) {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formVal.title.trim() ||
      !formVal.date ||
      !formVal.stars.trim() ||
      !formVal.image.trim()
    ) {
      return;
    }

    addMovie({ ...formVal, date: +formVal.date });

    setFormVal({
      title: "",
      date: "",
      stars: "",
      image: "",
    });
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add Movie</h2>

      <Form onSubmit={handleSubmit} className="mt-4 inp-form">
        <Form.Control
          name="title"
          value={formVal.title}
          placeholder="movie name"
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
          placeholder="Rating"
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
          onClick={() => navigate("/")}
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

export default AddMoviePage;
