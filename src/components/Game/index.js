import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { undo } from "../../action";

function Game() {
  const prevBoard = useSelector((store) => store.previousBoard);
  const dispatch = useDispatch();

  const handleUndo = (index) => {
    dispatch(undo(index));
  };

  return (
    <div className="prevBoard-btns">
      {prevBoard.map((val, index) => {
        return (
          <button
            onClick={() => handleUndo(index)}
            className="prevBoard-btn"
            key={index}
          >
            Move to step {index}
          </button>
        );
      })}
    </div>
  );
}

export default Game;
