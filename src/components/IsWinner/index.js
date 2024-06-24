import { useSelector} from "react-redux";
// import { winner } from "../../action";

function IsWinner() {

  const board = useSelector((store) => store.board);

  const winnerGrid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerGrid.length; i++) {
    const [a, b, c] = winnerGrid[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      
      return true;
    }
  }
  return false;
}

export default IsWinner;
