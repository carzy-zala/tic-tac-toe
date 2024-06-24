import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue } from "../../action";
import "./index.css";

function Square({ value, index }) {
  const dispatch = useDispatch();
  const isGameOver = useSelector((store) => useSelector.isGameOver);

  const handleClick = (index) => {
    value && !isGameOver ? alert("Can't clickable") : dispatch(addValue(index));
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
