import React from "react";
// import hat from "../images/hat.svg";
import "../styles/display.css";

function Display({ ideas }) {
  return (
    <div>
      <h2>The top choice is:</h2>
      <div>
        {
          ideas.reduce(
            (acc, idea) => {
              if (idea.posVotes > acc.posVotes) {
                return idea;
              } else if (idea.posVotes === acc.posVotes) {
                return Math.round(Math.random()) ? idea : acc;
              } else {
                return acc;
              }
            },
            { idea: "", posVotes: -1 }
          ).idea
        }
      </div>
    </div>
  );
}

export default Display;
