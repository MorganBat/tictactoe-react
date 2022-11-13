import React, { useState, useEffect } from 'react'
import Square from './Square'

const Board = () => {
    const [squares, setSquares] = useState([])
    const [currentTurn, setCurrentTurn] = useState('X');

    useEffect(() => {
        setSquares(Array(9).fill(null))
    })

  const handleClick = (i) => {
	  const squaresArr = squares.slice();
	  squaresArr[i] = 'X';

    setSquares(squaresArr)	  
  }

  const renderSquare = (i) => {
    return (
	    <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
	    />
    );
  }

    return (
      <div>
        {/* <div className="status">{status}</div> */}
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
}

export default Board