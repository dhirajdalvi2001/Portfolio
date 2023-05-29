import React, { useState } from "react";
import "./ToggleButton.styles.css";

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(true);
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("theme", "light");
  };
  const toggleSwitch = (e) => {
    e.target.checked ? setDarkMode() : setLightMode();
    isChecked ? setIsChecked(!isChecked) : setIsChecked(!isChecked);
  };
  return (
    <div id="toggle-button">
      <label className="switch">
        <input
          id="toggle-switch"
          type="checkbox"
          onChange={toggleSwitch}
          checked={isChecked ? true : false}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
