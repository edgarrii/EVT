import React from "react";
import { useNavigate } from "react-router-dom";

import { dataWithCars } from "../../data/data";
import { paths } from "../../consts/consts";
import { Card } from "../../components/Card/Card";

import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${paths.details}/${id}`);
  };

  return (
    <main className="main">
      <div className="cardsWrapper">
        {dataWithCars.map((car) => {
          return <Card key={car.id} car={car} handleClick={handleClick} />;
        })}
      </div>
    </main>
  );
};

export default Home;
