import React from "react";

function PersonPicker({ nextStage, updatePeople }) {
  return (
    <div>
      <h2>How many people are there?</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          nextStage();
        }}
      >
        <input type="number" onChange={updatePeople} autoFocus />
      </form>
      <button onClick={nextStage}>Enter!</button>
    </div>
  );
}

export default PersonPicker;
