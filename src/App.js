import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function StepTracker() {
  const [steps, setSteps] = useState(0);
  const increment = () => {
    setSteps((previousstep) => previousstep + 1);
  };

  return (
    <div>
      <h1>hey !! I have taken , this much steps:{steps}</h1>
      <button onClick={increment}>I took another Step</button>
    </div>
  );
}

ReactDOM.render(<StepTracker />, document.querySelector("#root"));
