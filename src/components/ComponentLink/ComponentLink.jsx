import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentLink.css";

export default function ComponentLink({ children, to }) {
  return (
    <li className="NavListItem">
      <NavLink
        activeClassName="ActiveComponentLink"
        className="ComponentLink"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
