import { useState, useEffect, Fragment } from "react";

import Board from "./Board";
import Square from "./Square";
import Navbar from "./Navbar";
import Endgame from "./Endgame";
import Restart from "./Restart";
import Records from "./Records";

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

const CpuMode = (props) => {
  const [squares, setSquares] = useState(defaultSquares());
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [restartIsShown, setRestartIsShown] = useState(false);
  const [winningCombination, setWinningCombination] = useState([]);

  const [playerScores, setPlayerScores] = useState(
    localStorage.getItem("playerWon") || 0
  );
  const [tieScores, setTieScores] = useState(
    localStorage.getItem("tieWon") || 0
  );
  const [cpuScores, setCpuScores] = useState(
    localStorage.getItem("cpuWon") || 0
  );

  //set up game records
  localStorage.setItem("playerWon", playerScores);
  localStorage.setItem("tieWon", tieScores);
  localStorage.setItem("cpuWon", cpuScores);

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

    //check winning line

    if (playerWon) {
      setWinningCombination(linesThatAre("x", "x", "x"));
    } else if (computerWon) {
      setWinningCombination(linesThatAre("o", "o", "o"));
    }

    //Set winner
    if (playerWon) {
      setWinner("x");
      setPlayerScores((prev) => Number(prev) + 1);
      localStorage.setItem("playerWon", playerScores);
      setModalIsShown(true);
      return;
    }
    if (computerWon) {
      setWinner("o");
      setCpuScores((prev) => Number(prev) + 1);
      localStorage.setItem("cpuWon", cpuScores);
      setModalIsShown(true);
      console.log(linesThatAre("o", "o", "o"));
      return;
    }

    if (drawGame) {
      setWinner("draw");
      setTieScores((prev) => Number(prev) + 1);
      // console.log(tieScores);
      localStorage.setItem("tieWon", tieScores);
      setModalIsShown(true);
      return;
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
  }, [squares]);

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
    setWinningCombination([]);
    setWinner(null);
  };

  //Modal
  const showRestartHandler = () => {
    setRestartIsShown(true);
  };

  const hideRestartHandler = () => {
    setRestartIsShown(false);
  };

  const restartHandler = () => {
    setRestartIsShown(false);
    handleReset();
  };

  const restartModalHandler = () => {
    setModalIsShown(false);
    handleReset();
  };

  //Remove Game records
  const resetRecordsHandler = () => {
    props.home();
    setPlayerScores(0);

    localStorage.setItem("playerWon", playerScores);
    setTieScores(0);

    localStorage.setItem("tieWon", tieScores);
    setCpuScores(0);
    localStorage.setItem("cpuWon", cpuScores);
    setModalIsShown(false);
    handleReset();
  };
  return (
    <Fragment>
      {restartIsShown && (
        <Restart cancel={hideRestartHandler} restart={restartHandler} />
      )}
      {modalIsShown && (
        <Endgame
          onReset={resetRecordsHandler}
          winner={winner}
          onRestart={restartModalHandler}
        />
      )}
      <main>
        <Navbar turn={turn} showRestart={showRestartHandler} />
        <Board>
          {squares.map((square, index) => (
            <Square
              index={index}
              x={square === "x" ? 1 : 0}
              o={square === "o" ? 1 : 0}
              placed={square !== null ? 1 : 0}
              turn={turn}
              winner={winner}
              winningcombo={winningCombination}
              onClick={() => handleSquareClick(index)}
            />
          ))}
        </Board>
        <Records player={playerScores} tie={tieScores} cpu={cpuScores} />
      </main>
    </Fragment>
  );
};

export default CpuMode;
