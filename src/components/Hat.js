import React from "react";
import hat from "../images/hat.svg";
import "../styles/hat.css";
function Hat(props) {
  return <img src={hat} className={`${props.className} hat`} alt="Hat" />;
}

export default Hat;
