import React from "react";
import { Data } from "../../data/Data";
import "./Education.styles.css";

function Education() {
  return (
    <div id="education">
      <div className="header">
        <h2 className="">
          <span>Education</span>
        </h2>
      </div>
      <div className="container">
        {Data.education.map((e, index) => {
          return (
            <div
              className={`tab ${index % 2 === 0 ? "edu-left" : "edu-right"}`}
              key={e}
            >
              <div className="edu-image">
                <img src={e?.src} alt="" srcset="" />
              </div>
              <div className="edu-info">
                <div className="edu-name">
                  {e?.name} -{" "}
                  <span className="edu-location">{e?.location}</span>
                </div>
                <div className="edu-type">{e?.type}</div>
                <div className="edu-uni">University: {e?.university}</div>
                <div className="edu-year">{e?.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
