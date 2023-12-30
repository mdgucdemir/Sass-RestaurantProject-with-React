/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../icons/square-facebook.svg";
import instagram from "../../icons/square-instagram.svg";
import linkedin from "../../icons/linkedin.svg";
import youtube from "../../icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <a href="#" className="logo">
          <FontAwesomeIcon icon={faUtensils} />
        </a>
        <div>
          <h1 className="main-name">Sass</h1>
          <p className="sub-name">Restaurant</p>
        </div>
        <div className="footer-social-media">
          <ul className="social-media">
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#" className="social-media-link">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-paragraph">
            &copy; Copyright. Mehmet Deniz Gucdemir. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
