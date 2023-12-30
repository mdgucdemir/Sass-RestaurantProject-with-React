import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-1.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-2.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-3.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-4.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-5.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
        <div className="card">
          <div className="card-overlay">
            <h1 className="card-overlay-heading">Food Name</h1>
            <p className="card-overlay-paragraph">Price: $30.00</p>
            <button className="card-overlay-btn">Order Now</button>
          </div>
          <img
            src={require("../../images/gallery-img-6.jpeg")}
            className="card-img"
            alt="img-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
