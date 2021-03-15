import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">MOVIE.DB</div>
        <div className="header__menu">
          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <NavLink to="/" exact className="header__link">
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="header__link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="header__link">
                  Show
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
