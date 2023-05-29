import React, { useState } from "react";
import "./Navbar.styles.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const [navTapped, setNavTapped] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else if (navTapped === false) {
      setColorchange(false);
    } else if (navTapped === true) {
      setColorchange(true);
    }
  };
  const toggleNav = () => {
    setNavTapped(!navTapped);
    console.log(navTapped);
    if (colorChange) {
      setColorchange(colorChange);
    } else {
      setColorchange(!colorChange);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div id={colorChange ? "navbar2" : "navbar"}>
      <div className="menu">
        <GiHamburgerMenu className="burger" onClick={toggleNav} />
      </div>
      <div className={navTapped ? "nav-items show" : "nav-items hide"}>
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#experience" className="nav-item">
          Experience
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#education" className="nav-item">
          Education
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
