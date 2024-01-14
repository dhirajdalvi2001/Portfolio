import React from "react";
import "./Preloader.styles.css";
import loader from "./Images/Skateboarding.gif";

const Preloader = () => {
  return (
    <div id="preloader">
      <img src={loader} alt="" srcset="" className="loader" />
    </div>
  );
};

export default Preloader;
