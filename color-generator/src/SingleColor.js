import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";
import "./index.css"; 

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const [hover, setHover] = useState(false); // State to track hover
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    },2000)
    return ()=>clearTimeout(timeout)
  })

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onMouseEnter={() => setHover(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setHover(false)} // Set hover state to false on mouse leave
    >
      <p className="percent-value">{weight}%</p>
      
      <p className="color-value">{hexValue}</p>
      {hover && (
        <button className="copy-btn" onClick={handleCopy}>
          Copy
        </button>
      )}
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
