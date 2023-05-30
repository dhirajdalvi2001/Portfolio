import React from "react";
import { Data } from "../../data/Data";
import "./Projects.styles.css";

function Projects() {
  return (
    <div id="projects">
      <div className="container">
        {Data.projects.map((e) => {
          return (
            <div className="tab" key={e._id}>
              <div className="image">
                <div className={e.img} />
              </div>
              <div className="text">
                <div className="text-box">
                  <div className="heading">
                    <h3 className="title">
                      <div>{e.name}</div>
                      <div className="date">
                        {e.start} - {e.end}
                      </div>
                    </h3>
                    <div className="link-box">
                      <a
                        href={e.github}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo
                      </a>
                      <a
                        href={e.hosted}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Hosted Link
                      </a>
                    </div>
                  </div>
                  <ul className="list-box">
                    {e.description.map((f) => {
                      return <li className="list-item" key={f.li}>{f.li}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
