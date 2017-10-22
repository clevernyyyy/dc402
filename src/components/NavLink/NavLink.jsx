import React from "react";
import "./NavLink.css";
import Icon from "../Icon/Icon";
import { NavLink as RRNavLink } from "react-router-dom";

export default function NavLink({children, href, iconType, to}) {
	let link;

	let icon = iconType ? <Icon className="Icon" type={iconType} /> : '';

  if (to) {
    link = (
      <RRNavLink
        activeClassName="ActiveNavLink"
        className="NavLink"
        to={to}
      >
        {icon} {children}
      </RRNavLink>
    );
  } else {
    link = (
      <a className="NavLink" href={href}>
        {icon} {children}
      </a>
    );
  }

  return (
    <li className="NavListItem">
      {link}
    </li>
  );
}
