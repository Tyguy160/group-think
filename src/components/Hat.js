import React from "react";
import hat from "../images/hat.svg";
import "../styles/hat.css";

function Hat({ className }) {
  return <img src={hat} className={`${className} hat`} alt="Hat" />;
}

export default Hat;
