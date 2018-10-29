import React from "react";
// import hat from "../images/hat.svg";
import "../styles/display.css";

function Display({ ideas }) {
  return (
    <div>
      <h2>Display results</h2>
      <div>
        {ideas.map(idea => {
          return <div>{idea.idea}</div>;
        })}
      </div>
    </div>
  );
}

export default Display;
