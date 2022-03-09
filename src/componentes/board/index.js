import React from "react";
import Square from "../square";
import "../board/board.css";

const Board = () => {
  const renderSquare = () => {
    return <Square />;
  };

  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      
      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>

      <div className="board-row">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};

export default Board;
