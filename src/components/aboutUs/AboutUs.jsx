import React from "react";
import aboutUs from "../../images/about-us-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-left">
        <img src={aboutUs} alt="about-us" />
      </div>
      <div className="about-us-right">
        <h1 className="main-heading">About Us</h1>
        <h3 className="sub-heading">Introduce To Sass Dishes</h3>
        <div className="stars">
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          dignissimos facilis? Nulla quae doloribus dolor vel ad animi
          blanditiis, id minus velit, voluptatum maxime non voluptatem
          laboriosam nostrum qui illum quia modi? Aspernatur maxime eaque
          provident! Sequi et molestiae praesentium velit, nulla quia eligendi
          veniam in laboriosam accusantium doloribus cum!
        </p>
        <div className="stars">
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
          <FontAwesomeIcon icon={faStarOfLife} className="star" />
        </div>
        <button type="button" className="main-btn">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
