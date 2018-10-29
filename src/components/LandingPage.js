import React from "react";

function LandingPage({ nextStage }) {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        GroupThink makes it easy to pick a group activity. Everyone puts an idea
        into the hat anonymously...
      </p>
      <button onClick={nextStage}>Get Started!</button>
    </div>
  );
}

export default LandingPage;
