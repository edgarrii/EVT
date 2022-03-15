import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { dataWithCars } from "../../data/data";
import { configs, paths } from "../../consts/consts";

import "./styles.scss";

const Details = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const carId = pathname.split("/")[2];
  const currentCar = dataWithCars[carId - 1];

  return (
    <div className="detailsWrapper">
      <img src={currentCar.mainImg} alt="car-img" />
      <div className="configWrapper">
        <h1>Конфигурация</h1>
        <div className="configList">
          {configs.map((config) => {
            return (
              <div key={config.id}>
                <h2>{config.title}</h2>
                <p>{config.description}</p>
                <h4>
                  {config.id === "start"
                    ? currentCar.startPrice
                    : config.id === "middle"
                    ? currentCar.middlePrice
                    : currentCar.finalPrice}
                </h4>
                <button
                  onClick={() => navigate(paths.inProgress)}
                  className="button"
                >
                  Выбрать
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
