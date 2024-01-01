/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" className="checkbox" hidden />
      <div className="hamburger-menu">
        <label htmlFor="check" className="menu">
          <div className="menu-line menu-line-1"></div>
          <div className="menu-line menu-line-2"></div>
          <div className="menu-line menu-line-3"></div>
        </label>
      </div>
      <div className="navbar-navigation">
        <div className="navbar-navigation-left">
          <img
            src={require("../../images/nav-img-1.jpeg")}
            className="left-img left-img-1"
          />
          <img
            src={require("../../images/nav-img-2.jpeg")}
            className="left-img left-img-2"
          />
          <img
            src={require("../../images/nav-img-3.jpeg")}
            className="left-img left-img-3"
          />
        </div>
        <div className="navbar-navigation-right">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                Home
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                About Us
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                Gallery
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                Reservation
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                Services
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
