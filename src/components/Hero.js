import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Custom Prompts Demo</h1>

    <p className="lead">
      This is a sample application that demonstrates custom prompts for signup. Note that
      you will be redirected to custom domain during login, which is a basic requirement for custom prompts.</a>
    </p>
  </div>
);

export default Hero;
