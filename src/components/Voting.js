import React from "react";

function Voting({ elimination, countVotes, ideas, vote }) {
  const voteType = elimination ? "an option to remove" : "your top pick";

  return (
    <div>
      <h2>Vote to eliminate one</h2>
      <p>
        Person {countVotes(elimination ? "negVotes" : "posVotes") + 1} vote for{" "}
        {voteType}:
      </p>
      {ideas.map((idea, index) => {
        return (
          <div className="option" key={index}>
            <button onClick={() => vote(index, elimination)}>
              {idea.idea}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Voting;
