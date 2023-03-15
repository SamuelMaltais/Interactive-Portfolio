import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  const [position, setPosition] = useState();
const [game, setGame] = useState();

  let size;
  const query = window.matchMedia("(max-width: 500px)");
  if (query.matches) {
    size = 300;
  } else {
    size = 500;
  }

  useEffect(() => {
    const newGame = new Chess();
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  function makeAMove(move) {
    const result = game.move(move);
    setPosition(game.fen());
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isCheckmate() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }
  return <Chessboard position={position} onPieceDrop={onDrop} 
  boardWidth={size}
  />;
}