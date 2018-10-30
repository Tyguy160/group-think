import React from "react";
// import "../styles/display.css";
function Voting(props) {
  const voteType = props.elimination ? "an option to remove" : "your top pick";

  return (
    <div>
      <h2>Vote!</h2>
      <p>
        Person{" "}
        {props.countVotes(props.elimination ? "negVotes" : "posVotes") + 1}:
        Vote for {voteType}:
      </p>
      {props.ideas.map((idea, index) => {
        return (
          <div className="option" key={index}>
            <button onClick={() => props.vote(index, props.elimination)}>
              {idea.idea}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Voting;
