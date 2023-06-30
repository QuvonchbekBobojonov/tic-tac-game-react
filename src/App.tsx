// imported react
import { useState } from "react";

// imported components
import Message from "./components/Message";
import Board from "./components/Board";
import Restart from "./components/Restart";

function App(): JSX.Element {
  // states
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xTurn, setXTurn] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("x o'yinchi ❌");
  const [gameover, setGameOver] = useState<boolean>(false);

  const handleClick = (index: number): void => {
    if (gameover || squares[index] !== "") {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = xTurn ? "X" : "O";
    setSquares(newSquares);

    const winner = checkWinner(newSquares);
    if (winner) {
      setMessage(`O'yinchi ${winner} yutdi! 😁`);
      setGameOver(true);
    } else if (!newSquares.includes("")) {
      setMessage("Durrang!");
      setGameOver(true);
    } else {
      setXTurn(!xTurn);
      setMessage(`Hozirgi navbat: ${xTurn ? "O" : "X"}`);
    }
  };

  const resetGame = (): void => {
    setXTurn(true);
    setSquares(Array(9).fill(""));
    setMessage("x o'yinchi ❌");
    setGameOver(false);
  };

  const checkWinner = (board: string[]): string | null => {
    const winConditions: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const turnHolder = xTurn ? "X" : "O";

    for (const combination of winConditions) {
      const [a, b, c] = combination;
      if (
        board[a] === turnHolder &&
        board[b] === turnHolder &&
        board[c] === turnHolder
      ) {
        return turnHolder;
      }
    }

    return null;
  };

  return (
    <main className="flex items-center flex-col">
      <Message msg={message} />
      <Board squares={squares} handleClick={handleClick} />
      <Restart resetGame={resetGame} />
    </main>
  );
}

export default App;
