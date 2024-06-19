export const ADD = "ADD"
export const UNDO = "UNDO"

export const addValue = (index)=>({type:ADD,payload:index});
export const undo = (index)=>({type:ADD,payload:index});