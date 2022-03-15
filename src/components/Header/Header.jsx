import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import headerLogo from "../../assets/header-logo.png";
import { listOfLinksForHeader, paths } from "../../consts/consts";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
    navigate(paths.inProgress);
  };

  return (
    <header className="headerWrapper">
      <img
        onClick={() => navigate(paths.home)}
        src={headerLogo}
        alt="header-logo"
      />
      <ul className={isOpen ? "listForBurger" : "listForHeader"}>
        {listOfLinksForHeader.map((link) => {
          return (
            <li key={link} onClick={handleLinkClick}>
              {link}
            </li>
          );
        })}
      </ul>
      <BurgerMenu isOpen={isOpen} handleBurgerClick={handleClickBurger} />
    </header>
  );
};
