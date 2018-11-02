import React from "react";
import "../styles/landingPage.css";

function LandingPage({ nextStage }) {
  return (
    <div>
      <p className="intro-p">
        GroupThink makes it easy to pick a group activity. Here's how it works:
        <ol>
          <li>First, tell us how many people are in your group.</li>
          <li>Next, you'll each submit what you want the group to do.</li>
          <li>Finally, you'll vote on them anonymously.</li>
        </ol>
      </p>
      <button onClick={nextStage}>Get Started!</button>
    </div>
  );
}

export default LandingPage;
