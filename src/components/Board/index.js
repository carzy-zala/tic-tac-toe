import React from "react";
import { useSelector } from "react-redux";
import Square from "../Square";
import './index.css'

function Board() {
  const board = useSelector((store) => store.board);
  console.log(board);

  return (
    <div className="container-main">
     <h1>Tic-Tac-Toe</h1>
      <div className="container-row">
        <Square index={0} value={board[0]} />
        <Square index={1} value={board[1]} />
        <Square index={2} value={board[2]} />
      </div>

      <div className="container-row">
        <Square index={3} value={board[3]} />
        <Square index={4} value={board[4]} />
        <Square index={5} value={board[5]} />
      </div>

      <div className="container-row">
        <Square index={6} value={board[6]} />
        <Square index={7} value={board[7]} />
        <Square index={8} value={board[8]} />
      </div>

      
    </div>
  );
}

export default Board;
