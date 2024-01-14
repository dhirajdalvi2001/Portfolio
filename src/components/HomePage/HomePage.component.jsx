import React, { useEffect, useState } from "react";
import emoji from "./Images/emoji.png";
import html from "./Images/html.png";
import css from "./Images/css.png";
import js from "./Images/js.png";
import react from "./Images/react.png";
import tailwind from "./Images/tailwind.png";
import sass from "./Images/sass.png";
import express from "./Images/express.png";
import node from "./Images/node.png";
import java from "./Images/java.png";
import "./HomePage.styles.css";

function HomePage() {
  const [loading, setLoading] = useState(true);
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
    const images = [html, css, js, react, tailwind, sass, express, node, java];
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setLoading(false); // All images are loaded
      })
      .catch(() => {
        setLoading(false); // Handle error if an image fails to load
      });
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="top">
          <div className="headers">
            <h1 id="headline1">
              MERN Stack Developer{" "}
              <img src={emoji} alt="emoji" className="emoji" />
            </h1>
            <div id="headline" />
          </div>
          <div
            className={`profile-pic ${!loading && "show-profile"}`}
            style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
          />
        </div>
        <div className="tech-stack">
          <div className="title">
            <h3>Tech Stack |</h3>
          </div>
          <div className="stacks">
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={html}
                  title="Html5"
                  alt="Html5"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={css}
                  title="Css3"
                  alt="Css3"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={js}
                  title="Javascript"
                  alt="Javascript"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={react}
                  title="ReactJs"
                  alt="ReactJs"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={tailwind}
                  title="Tailwind Css"
                  alt="Tailwind Css"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={sass}
                  title="Sass"
                  alt="Sass"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={express}
                  title="Express.Js"
                  alt="Express.Js"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={node}
                  title="Node.Js"
                  alt="Node.Js"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
            <div
              className="circle"
              style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
            >
              {!loading && (
                <img
                  src={java}
                  title="Java"
                  alt="Java"
                  srcSet=""
                  className="icon"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
