import { useEffect } from 'react';
import './Game.css';
import { useState } from 'react';

function Square(props) {
  return (
    <button className='square-btn' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState('');

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXNext ? 'X' : 'O';
    setIsXNext(!isXNext);
    setSquares(copySquares);
  }

  function handleRestart(){
    setIsXNext(true)
    setSquares(Array(9).fill(null))
  }

  useEffect(() => {
    console.log('i am running');
    console.log(getWinner(squares));
    if (!getWinner(squares) && squares.every((item) => item !== null)) {
      setStatus('This is draw please restart the game');
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} please Restart the game`);
    } else {
      setStatus(`Next player is ${isXNext ? 'X' : 'O'}`);
    }
  }, [squares, isXNext]);

  return (
    <div className='tictactoe-container'>
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
