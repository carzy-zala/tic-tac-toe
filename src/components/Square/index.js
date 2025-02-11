import React from "react";
import { useDispatch } from "react-redux";
import { addValue } from "../../action";
import "./index.css";

function Square({ value, index ,isGameOver}) {
  const dispatch = useDispatch();
 
  const handleClick = (index) => {
    
    value || isGameOver ? alert("Can't clickable") : dispatch(addValue(index));
  };

  return (
    <button
      style={{ color: value === "X" ? "red" : "blue" }}
      className="sqr"
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
}

export default Square;
