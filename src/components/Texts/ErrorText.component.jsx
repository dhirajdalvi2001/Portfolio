import React from "react";
import "./ErrorText.styles.css";

const ErrorText = ({ children }) => {
  return <div id="error">{children}</div>;
};

export default ErrorText;
