export const ADD = "ADD";
export const UNDO = "UNDO";
export const RESET = "RESET";
export const WINNER = "WINNER";
export const DRAW = "DRAW";


export const addValue = (index) => ({ type: ADD, payload: index });
export const undo = (index) => ({ type: UNDO, payload: index });
export const reset = () => ({ type: RESET });
export const winner = () => ({ type: WINNER });
export const draw = () => ({ type: RESET });
