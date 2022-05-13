import React from "react";

import "./styles.scss";

export const Card = ({ car, handleClick }) => {
  return (
    <div onClick={() => handleClick(car.id)} key={car.id} className="card">
      <div className="imageWrapper">
        <img src={car.previewImg} alt="car-preview-img" />
      </div>
      <h2>{car.model}</h2>
      <p>{car.description}</p>
      <div className="buttonsWrapper">
        <button className="button" onClick={() => handleClick(car.id)}>
          Обзор
        </button>
        <button className="button" onClick={() => handleClick(car.id)}>
          Конфигуратор
        </button>
      </div>
    </div>
  );
};
