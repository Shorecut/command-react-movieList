import React from "react";

const MovieItem = ({ item }) => {
  return (
    <div>
      <div className="cardMovie">
        <div className="card_image">
          <img src={item.image} alt="" />
        </div>

        <div className="card__content">
          <p className="card__title">{item.name}</p>
          <p className="card__description">{item.date}</p>
          <p className="card__description">{item.stars}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
