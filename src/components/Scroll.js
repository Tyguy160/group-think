import React from "react";

function Scroll(props) {
  return (
    <div>
      <p>Person {props.ideasLength + 1}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.submitIdea();
        }}>
        <input
          type="text"
          placeholder="Enter your opinion"
          value={props.currentIdea}
          onChange={props.updateCurrentIdea}
        />
      </form>
      <button onClick={props.submitIdea}>
        <span role="img" aria-label="Lightbulb">
          💡
        </span>{" "}
        Submit Idea
      </button>
    </div>
  );
}

export default Scroll;
