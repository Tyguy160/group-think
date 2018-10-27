import React from "react";

function LandingPage(props) {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        GroupThink makes it easy to pick a group activity. Everyone puts an idea
        into the hat anonymously...
      </p>
      <button onClick={props.nextStage}>Get Started!</button>
    </div>
  );
}

export default LandingPage;
