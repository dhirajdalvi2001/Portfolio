import React from "react";
import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { Data } from "../../data/Data";
import "./Projects.styles.css";

function Projects() {
  return (
    <div id="projects">
      <div className="header">
        <h2 className="">
          <span>Projects</span>
        </h2>
      </div>
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
                        <div className="url-logo">
                          <BsGithub className="logo" />
                        </div>
                        <span className="cursor-pointer bg-black">
                          GitHub Repo
                        </span>
                      </a>
                      <a
                        href={e.hosted}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="url-logo">
                          <CiShare1 className="logo" />
                        </div>
                        <span>Hosted Link</span>
                      </a>
                    </div>
                  </div>
                  <ul className="list-box">
                    {e.description.map((f) => {
                      return (
                        <li className="list-item" key={f.li}>
                          {f.li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p>
        Check out more of my projects on my{" "}
        <a href="https://github.com/dhirajdalvi2001" className="url">Github profile</a>
      </p>
    </div>
  );
}

export default Projects;
