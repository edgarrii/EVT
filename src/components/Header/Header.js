import React from "react";
import { useNavigate } from "react-router-dom";

import headerLogo from "../../assets/header-logo.png";
import { listOfLinksForHeader, paths } from "../../consts/consts";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="headerWrapper">
      <img
        onClick={() => navigate(paths.home)}
        src={headerLogo}
        alt="header-logo"
      />
      <ul className="listForHeader">
        {listOfLinksForHeader.map((link) => {
          return (
            <li key={link} onClick={() => navigate(paths.inProgress)}>
              {link}
            </li>
          );
        })}
      </ul>
    </header>
  );
};
