import React from "react";

function Voting({ elimination, countVotes, ideas, vote }) {
  const voteType = elimination ? "an option to remove" : "your top pick";

  return (
    <div>
      <h2>Vote!</h2>
      <p>
<<<<<<< HEAD
        Person{" "}
        {props.countVotes(props.elimination ? "negVotes" : "posVotes") + 1}:
        Vote for {voteType}:
=======
        Person {countVotes(elimination ? "negVotes" : "posVotes") + 1} vote for{" "}
        {voteType}:
>>>>>>> 9f9715e350b8f03c53d8e49cab5ba394d215c612
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
