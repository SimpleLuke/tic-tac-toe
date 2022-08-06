import Board from "./components/Board";
import Square from "./components/Square";
import Navbar from "./components/Navbar";

import { useState, useEffect, Fragment } from "react";

const defaultSquares = () => new Array(9).fill(null);

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

function App() {
  const [squares, setSquares] = useState(defaultSquares());
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);

  //computer move
  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    //Checking if any line made from a, b, c combinations
    const linesThatAre = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };

    //Find any empty index
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);

    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    const drawGame = squares.filter((index) => index !== null).length === 9;

    //Set winner
    if (playerWon) {
      setWinner("x");
    }
    if (computerWon) {
      setWinner("o");
    }

    if (drawGame) {
      setWinner("draw");
    }

    //Computer playing
    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = "o";
      setSquares([...newSquares]);
    };

    //If computer turn
    if (isComputerTurn && !winner) {
      setTurn("o");
      const winningLines = linesThatAre("o", "o", null);

      if (winningLines.length > 0) {
        const winPosition = winningLines[0].filter(
          (index) => squares[index] === null
        )[0];
        setTimeout(() => {
          putComputerAt(winPosition);
        }, "700");

        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);

      if (linesToBlock.length > 0) {
        const blockPosition = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        setTimeout(() => {
          putComputerAt(blockPosition);
        }, "700");

        return;
      }

      const linesToContinue = linesThatAre("o", null, null);

      if (linesToContinue.length > 0) {
        const continuePosition = linesToContinue[0].filter(
          (index) => squares[index] === null
        )[0];
        setTimeout(() => {
          putComputerAt(continuePosition);
        }, "700");

        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];

      setTimeout(() => {
        putComputerAt(randomIndex);
      }, "700");
    }
  }, [squares, winner]);

  //Change turn sign back to X
  useEffect(() => {
    if (turn === "o") {
      setTimeout(() => {
        setTurn("x");
      }, "700");
    }
  }, [turn]);

  //player clicking
  const handleSquareClick = (index) => {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;

    if (isPlayerTurn && !winner) {
      let newSquares = squares;
      if (newSquares[index] === "o") {
        return;
      }
      newSquares[index] = "x";
      setSquares([...newSquares]);
    }
  };

  //reset the game
  const handleReset = () => {
    setSquares(defaultSquares());
    setWinner(null);
  };
  return (
    <Fragment>
      <main>
        <Navbar turn={turn} reset={handleReset} />
        <Board>
          {squares.map((square, index) => (
            <Square
              x={square === "x" ? 1 : 0}
              o={square === "o" ? 1 : 0}
              placed={square !== null ? 1 : 0}
              turn={turn}
              onClick={() => handleSquareClick(index)}
            />
          ))}
        </Board>
        <div className="winningText">
          {winner === "x" && <div>You Won!</div>}
          {winner === "o" && <div>Computer Won!</div>}
          {winner === "draw" && <div>Draw!</div>}
        </div>
      </main>
      <footer>
        <a href="lukelai.tech">
          <p>&copy; 2022 Luke Lai</p>
        </a>
      </footer>
    </Fragment>
  );
}

export default App;
