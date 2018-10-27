import React from "react";

function PersonPicker(props) {
  return (
    <div>
      <h2>How many people are there?</h2>
      <form>
        <input type="number" onChange={props.updatePeople} />
      </form>
      <button onClick={props.nextStage}>Enter!</button>
    </div>
  );
}

export default PersonPicker;
