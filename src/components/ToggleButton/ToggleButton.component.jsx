import React, { useEffect, useState } from "react";
import "./ToggleButton.styles.css";

function ToggleButton() {
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div
      id="toggle-button"
      // style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}
    >
      <label className="switch">
        <input
          id="toggle-switch"
          type="checkbox"
          onChange={toggleSwitch}
          checked={isChecked ? true : false}
        />
        <span className={`slider round ${!loading && "slider-bg"}`}></span>
      </label>
    </div>
  );
}

export default ToggleButton;
