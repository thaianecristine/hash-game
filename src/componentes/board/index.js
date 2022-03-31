import React, { useState } from "react";
import Square from "../square";
import "../board/board.css";

// combinaçoes de acertos para gerar o vencedor 
const calculeVencedor = (squares) => {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  } 
  return null
};

// Para fazer alterações entre X e O, e "bloquear" alterações nos elementos
const Board = () => {
  const renderSquare = (i) => {
    const handleClick = () => {
      const newSquares = squares.slice();
      if (newSquares[i] || calculeVencedor(squares)) {
        return;
      }
      newSquares[i] = xIsNext ? "x" : "o";
      setXIsNext(!xIsNext);
      setSquares(newSquares);
    };

    return <Square value={squares[i]} onClick={handleClick} />;
  };
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  // Printar se chegou o vencedor ou se ainda tem mais uma rodada
  const vencedor = calculeVencedor(squares) 
  let status;
  if (vencedor){
    status= `Vencedor ${vencedor}`
  } else {
      status = `Próximo Jogador: ${xIsNext ? "x" : "o"}`;
  }

  return (
      // Posição de jogadas
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
