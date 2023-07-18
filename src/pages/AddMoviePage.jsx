import React, { useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const AddMoviePage = () => {
  const { addMovie } = useMovieContext();
  const [formVal, setFormVal] = useState({
    title: "",
    date: "",
    stars: "",
    image: "",
  });

  function handleChange(e) {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
    // console.log(formVal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formVal.title.trim() ||
      !formVal.date.trim() ||
      !formVal.stars.trim() ||
      !formVal.image.trim()
    ) {
      return;
    }

    addMovie({ ...formVal, date: +formVal.date });
    addMovie({ ...formVal, stars: +formVal.stars });

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

      <Form onSubmit={handleSubmit} className="inp-form">
        <Form.Control
          value={formVal.title}
          placeholder="Movie name"
          onChange={handleChange}
          className="w-50"
        ></Form.Control>
        <Form.Control
          value={formVal.date}
          placeholder="Date"
          onChange={handleChange}
          className="mt-3 w-50"
        ></Form.Control>
        <Form.Control
          value={formVal.stars}
          placeholder="Rating"
          onChange={handleChange}
          className="mt-3 w-50"
        ></Form.Control>
        <Form.Control
          value={formVal.image}
          placeholder="image"
          onChange={handleChange}
          className="mt-3 w-50"
        ></Form.Control>
        <Button
          variant="outline-success"
          className="w-50 text-align-center mt-2"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddMoviePage;
