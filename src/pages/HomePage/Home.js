import React from "react";
import { useNavigate } from "react-router-dom";

import { dataWithCars } from "../../data/data";

import "./styles.scss";
import { paths } from "../../consts/consts";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${paths.details}/${id}`);
  };

  return (
    <main className="main">
      <div className="cardsWrapper">
        {dataWithCars.map((car) => {
          return (
            <div
              onClick={() => handleClick(car.id)}
              key={car.id}
              className="card"
            >
              <img src={car.previewImg} alt="preview-img" />
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
        })}
      </div>
    </main>
  );
};

export default Home;
