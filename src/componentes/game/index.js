import React from "react";
import Board from "../board";
import "../game/game.css";

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
