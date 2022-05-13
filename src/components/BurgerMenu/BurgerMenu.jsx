import React from "react";

import Hamburger from "hamburger-react";

import "./styles.scss";

export const BurgerMenu = ({ isOpen, handleBurgerClick }) => {
  return (
    <div onClick={() => handleBurgerClick} className="burgerWrapper">
      <Hamburger toggled={isOpen} toggle={handleBurgerClick} />
    </div>
  );
};
