import React, { useState } from "react";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import "./ScrollUp.styles.css";

function ScrollUp() {
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else if (window.scrollY <= 80) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", changeVisibility);
  function scrollItUp() {
    window.scrollTo(0, 0);
  }
  const styledIcon = {
    display: visible ? "block" : "none",
    cursor: "pointer",
  };
  return (
    <div id="scroll-up" onClick={scrollItUp}>
      <TbSquareRoundedArrowUpFilled className="arrow" style={styledIcon} />
    </div>
  );
}

export default ScrollUp;
