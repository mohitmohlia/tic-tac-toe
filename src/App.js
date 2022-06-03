import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import calculateWinner from "./components/gameLogic";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setX] = useState(false);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    if (winner) return true;
    boardCopy[i] = isXNext ? "X" : "O";
    setBoard(boardCopy);
    setX(!isXNext);
  }
  return (
    <div className="App">
      <Board squares={board} handleClick={handleClick} />
      {winner ? winner + "is Winner" : isXNext ? "X" : "O"}
    </div>
  );
}

export default App;
