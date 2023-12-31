/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaUtensils } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <a href="#" className="logo">
          <FaUtensils />
        </a>
        <div>
          <h1 className="main-name">Sass</h1>
          <p className="sub-name">Restaurant</p>
        </div>
      </div>
      <div className="footer-social-media">
        <ul className="social-media">
          <li className="social-media-item">
            <a href="#" className="social-media-link">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="social-media-item">
            <a href="#" className="social-media-link">
              <FaSquareInstagram />
            </a>
          </li>
          <li className="social-media-item">
            <a href="#" className="social-media-link">
              <FaLinkedin />
            </a>
          </li>
          <li className="social-media-item">
            <a href="#" className="social-media-link">
              <IoLogoYoutube />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p className="footer-copyright-paragraph">
          &copy; Copyright. Mehmet Deniz Gucdemir. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
