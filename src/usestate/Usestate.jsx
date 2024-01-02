import React, { useState } from "react";
import "./UseState.css";

const Usestate = () => {
  const [color, setColor] = useState("blue");

  const handleOnClick = () => {
    setColor("red");
  };

  return (
    <div>
      <button className="click" onClick={handleOnClick}>
        Click Here
      </button>
      <div className="box" style={{color}}>
        Hello
      </div>
    </div>
  );
};

export default Usestate;
