import React from "react";
import { useDispatch } from "react-redux";
import { addValue } from "../../action";
import "./index.css";

function Square({ value, index }) {
  const dispach = useDispatch();

  const handleClick = (index) => {
    value ? console.log("Can't clickable") : dispach(addValue(index));
  };

  return (
    <button 
    style={{"color":value==="X" ? "red" : "blue"}}
    className="sqr" onClick={() => handleClick(index)}>
      {value}
    </button>
  );
}

export default Square;
