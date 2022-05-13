import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { listOfLinksForFooter, paths } from "../../consts/consts";

import "./styles.scss";

export const Footer = () => {
  const navigate = useNavigate();
  const regExp = "^(\\S+)@(\\S+)\\.(.[A-Za-z]{1,3})";
  const [values, setValues] = useState({ name: "", email: "" });

  const onSubmit = async (e) => {
    e.preventDefault();

    !!values.email.match(regExp)
      ? await fetch("http://localhost:3030/write-to-file", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        }).then((res) => {
          console.log(res);
          return res.json();
        })
      : alert("Wrong email type!!!");
  };

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
      <form onSubmit={onSubmit} className="formWrapper">
        <input
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
          type="text"
          placeholder="Your name"
        />
        <input
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
          placeholder="Your email"
        />
        <textarea name="message" maxLength={255} placeholder="Your message" />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </footer>
  );
};
