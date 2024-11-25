import React from "react";
import { NavLink } from "react-router-dom";
import { COCKTAIL_CODES } from "../constants/routes";

const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {COCKTAIL_CODES.map((code) => (
          <li key={code}>
            <NavLink
              to={`/${code}`}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {code}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
