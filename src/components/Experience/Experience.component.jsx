import React from "react";
import logo1 from "./Images/Istellar.png";
import { Data } from "../../data/Data";
import "./Experience.styles.css";

function Experience() {
  return (
    <div id="experience">
      <div className="header">
        <h2 className="">
          <span>Experience</span>
        </h2>
      </div>
      <div className="container">
        {Data.experience.map((e) => {
          return (
            <div className="tab" key={e}>
              <div className="text-part">
                <div className="logos">
                  <img src={logo1} alt="" srcSet="" className="logo" />
                </div>
                <h1 className="heading1">
                  <a href={e.link}>{e.name}</a>
                </h1>
                <h2 className="heading2">{e.designation}</h2>
                <h4 className="heading4">
                  {e.start} <span> - </span>
                  {e.end}
                </h4>
                <div className="para">
                  {e.description.map((e) => {
                    return <p key={e.li}>{e.li}</p>;
                  })}
                </div>
              </div>
              <div className="images-part">
                <div className="website img1" />
                <div className="website img2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
