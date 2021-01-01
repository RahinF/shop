import React from "react";
import DotPattern from "./DotPattern";
import SocialMedia from "./SocialMedia";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-info">
          <h1 className="hero-heading">Fashion Revolution</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem
            iusto voluptatibus eligendi minus! Velit, in dolor.
          </p>
          <button className="hero-button">View Store</button>
        </div>

        <div className="share">
          <div className="share-container">
            <p className="share-text">Share</p>
          </div>
          <SocialMedia />
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-container">
          <div className="dot-1">
            <DotPattern />
          </div>

          <div className="dot-2">
            <DotPattern />
          </div>

          <p className="hero-image">Image</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
