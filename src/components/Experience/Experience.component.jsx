import React from "react";
import "./Experience.styles.css";

function Experience() {
  const experienceDetails = [
    {
      companyName: "Istellar Labs Pvt. Ltd.",
      designation: "Software Engineer",
      start: "2nd Nov, 22",
      end: "16 Feb, 23",
    },
  ];
  return (
    <div id="experience">
      <div className="container">
        {experienceDetails.map((e) => {
          return (
            <div className="tab">
              <h1 className="heading1">{e.companyName}</h1>
              <h2 className="heading1">{e.designation}</h2>
              <h4 className="heading1">{e.start} <span> - </span>{e.end}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
