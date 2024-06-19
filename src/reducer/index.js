
import { ADD, UNDO } from "../action";

const intialValue = {
  previousBoard: [],
  board: [],
  value: "X",
};

function Reducer(state = intialValue, action) {
  const nextArry = [...state.board];
  nextArry[action.payload] = state.value;

  switch (action.type) {
    case ADD:
      return {
        ...state,
        previousBoard: [...state.previousBoard,nextArry],
        board: nextArry,
        value: state.value === "X" ? "O" : "X",
      };
    case UNDO:
      return {
        ...state,
        board: state.previousBoard[action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}

export default Reducer