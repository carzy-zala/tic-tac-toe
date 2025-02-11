import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Square from "../Square";
import Game from "../Game";
import "./index.css";
import { reset, winner } from "../../action";
import IsWinner from "../IsWinner";

function Board() {
  const board = useSelector((store) => store.board);
  const isGameOver = useSelector((store) => store.isGameOver);
  const Value = useSelector((store) => store.value);
  const winnerValue = useSelector((store) => store.winnerValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (IsWinner(board)) {
      dispatch(winner());
      // alert(`winner is `)
    }
  }, [board]);

  const status = () => {
    const temp = [...board];
    if (!temp.includes(null)) {
      return "Match is Draw !! Please click reset ..";
    }

    const str = isGameOver
      ? `Game wone by ${winnerValue} !! Please click on reset ..`
      : `Next move by ${Value}`;

    return str;
  };

  return (
    <div className="container-main">
      <h1>Tic-Tac-Toe</h1>
      <h3>{status()}</h3>

      <div className="main-section">
        <div>
          <div className="container-row">
            <Square index={0} value={board[0]} isGameOver={isGameOver} />
            <Square index={1} value={board[1]} isGameOver={isGameOver} />
            <Square index={2} value={board[2]} isGameOver={isGameOver} />
          </div>

          <div className="container-row">
            <Square index={3} value={board[3]} isGameOver={isGameOver} />
            <Square index={4} value={board[4]} isGameOver={isGameOver} />
            <Square index={5} value={board[5]} isGameOver={isGameOver} />
          </div>

          <div className="container-row">
            <Square index={6} value={board[6]} isGameOver={isGameOver} />
            <Square index={7} value={board[7]} isGameOver={isGameOver} />
            <Square index={8} value={board[8]} isGameOver={isGameOver} />
          </div>

          <button className="rst-btn" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>

        <Game />
      </div>
    </div>
  );
}

export default Board;
