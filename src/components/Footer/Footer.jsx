import React from "react";
import { useNavigate } from "react-router-dom";

import { listOfLinksForFooter, paths } from "../../consts/consts";

import "./styles.scss";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footerWrapper">
      <ul className="listForFooter">
        {listOfLinksForFooter.map((link) => {
          return (
            <li key={link} onClick={() => navigate(paths.inProgress)}>
              {link}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
