import React, { useEffect } from "react";
import emoji from "./emoji.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import tailwind from "./tailwind.png";
import sass from "./sass.png";
import express from "./express.png";
import node from "./node.png";
import java from "./java.png";
import "./HomePage.styles.css";

function HomePage() {
  // const [currentPage, setCurrentPage] = useState("Home");
  var i = 0;
  var txt =
    "Hi, My name is Dhiraj Dalvi. I am a fresher filled with enthusiasm to learn new technologies. My expertise is in the frontend development, especially in ReactJs."; /* The text */
  var speed = 80; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("headline").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div id="homepage">
      <div className="container">
        <div className="top">
          <div className="headers">
            <h1 id="headline1">
              MERN Stack Developer{" "}
              <img src={emoji} alt="emoji" className="emoji" />
            </h1>
            <div id="headline" />
          </div>
          <div className="profile-pic" />
        </div>
        <div className="tech-stack">
          <h3>Tech Stack |</h3>
          <div className="circle">
            <img
              src={html}
              title="Html5"
              alt="Html5"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img src={css} title="Css3" alt="Css3" srcSet="" className="icon" />
          </div>
          <div className="circle">
            <img
              src={js}
              title="Javascript"
              alt="Javascript"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={react}
              title="ReactJs"
              alt="ReactJs"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={tailwind}
              title="Tailwind Css"
              alt="Tailwind Css"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={sass}
              title="Sass"
              alt="Sass"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={express}
              title="Express.Js"
              alt="Express.Js"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={node}
              title="Node.Js"
              alt="Node.Js"
              srcSet=""
              className="icon"
            />
          </div>
          <div className="circle">
            <img
              src={java}
              title="Java"
              alt="Java"
              srcSet=""
              className="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
