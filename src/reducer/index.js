import { ADD, UNDO, RESET, WINNER, DRAW } from "../action";

const intialValue = {
  previousBoard: [Array(9).fill(null)],
  board: Array(9).fill(null),
  value: "X",
  isGameOver: false,
  winnerValue: null,
};

function Reducer(state = intialValue, action) {
  const nextArry = [...state.board];
  nextArry[action.payload] = state.value;

  switch (action.type) {
    case ADD:
      return {
        ...state,
        previousBoard: [...state.previousBoard, nextArry],
        board: nextArry,
        value: state.value === "X" ? "O" : "X",
      };
    case UNDO:
      return {
        ...state,
        board: [...state.previousBoard[action.payload]],
      };
    case RESET:
      return {
        ...intialValue,
      };
    case WINNER:
      console.log("val")
      return {
        ...state,
        isGameOver: true,
        winnerValue: state.value === "X" ? "O" : "X",
      };
    case DRAW:
      return {
        ...intialValue,
      };
    default:
      return {
        ...state,
      };
  }
}

export default Reducer;
