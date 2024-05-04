import React from "react";

import logo from "../assets/logo-6.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Small Changes.
Big Impact.
Lightning Growth.</h1>

    <p className="lead">
    Helping businesses to leverage technology for growth in sales, marketing and operations. <a href="https://smallbiggrowth.com/">smallbiggrowth</a>
    </p>
  </div>
);

export default Hero;
