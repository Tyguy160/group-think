import React from "react";

function IdeaInput(props) {
  return (
    <div>
      <p>Person {props.ideasLength + 1}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.submitIdea();
        }}
      >
        <input
          type="text"
          placeholder="Enter your idea"
          value={props.currentIdea}
          onChange={props.updateCurrentIdea}
          autoFocus
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

export default IdeaInput;
