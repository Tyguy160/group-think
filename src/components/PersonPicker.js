import React from "react";

function PersonPicker(props) {
  return (
    <div>
      <h2>How many people are there?</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.nextStage();
        }}
      >
        <input type="number" onChange={props.updatePeople} autoFocus />
      </form>
      <button onClick={props.nextStage}>Enter!</button>
    </div>
  );
}

export default PersonPicker;
