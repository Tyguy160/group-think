import React from "react";

function IdeaInput({
  ideasLength,
  submitIdea,
  updateCurrentIdea,
  currentIdea
}) {
  return (
    <div>
      <p>Person {ideasLength + 1}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitIdea();
        }}
      >
        <input
          type="text"
          placeholder="Enter your idea"
          value={currentIdea}
          onChange={updateCurrentIdea}
          autoFocus
        />
      </form>
      <button onClick={submitIdea}>
        <span role="img" aria-label="Lightbulb">
          💡
        </span>{" "}
        Submit Idea
      </button>
    </div>
  );
}

export default IdeaInput;
