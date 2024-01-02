import React from "react";
import "./Button.styles.css";

const Button = ({ value, onClick, classNames }) => {
  return (
    <input
      id="button"
      type="button"
      value={value}
      className={classNames}
      onClick={onClick}
    />
  );
};

export default Button;
