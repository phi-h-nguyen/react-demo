import "./Game.css";
import Square from "../Components/Square";
import { useState } from "react";
import { Button } from "antd";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [numTurns, setNumTurns] = useState(0);
  const [winner, setWinner] = useState(null);

  // [null, null ... 9 times]

  const playBoard = (index) => {
    const curPlayer = numTurns % 2 === 0 ? "X" : "O";
    // board[index] = curPlayer;

    const newBoard = [...board];
    newBoard[index] = curPlayer;
    setBoard(newBoard);
    setNumTurns(numTurns + 1);

    setWinner(calculateWinner(newBoard));
  };

  return (
    <div className="Game">
      <h1>Tic Tac Toe!</h1>

      {!winner && <h3>Current Player is {numTurns % 2 === 0 ? "X" : "O"}</h3>}
      {winner && <h3>Winner is {winner}</h3>}

      <div className="row">
        <Square
          value={board[0]}
          onSquareClick={() => playBoard(0)}
          winner={winner}
        />
        <Square
          value={board[1]}
          onSquareClick={() => playBoard(1)}
          winner={winner}
        />
        <Square
          value={board[2]}
          onSquareClick={() => playBoard(2)}
          winner={winner}
        />
      </div>

      <div className="row">
        <Square
          value={board[3]}
          onSquareClick={() => playBoard(3)}
          winner={winner}
        />
        <Square
          value={board[4]}
          onSquareClick={() => playBoard(4)}
          winner={winner}
        />
        <Square
          value={board[5]}
          onSquareClick={() => playBoard(5)}
          winner={winner}
        />
      </div>

      <div className="row">
        <Square
          value={board[6]}
          onSquareClick={() => playBoard(6)}
          winner={winner}
        />
        <Square
          value={board[7]}
          onSquareClick={() => playBoard(7)}
          winner={winner}
        />
        <Square
          value={board[8]}
          onSquareClick={() => playBoard(8)}
          winner={winner}
        />
      </div>

      <Button
        onClick={() => {
          setBoard(Array(9).fill(null));
          setNumTurns(0);
          setWinner(null);
        }}
      >
        Reset Game
      </Button>
    </div>
  );
}
