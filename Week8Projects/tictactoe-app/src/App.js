import React, {useState, useEffect} from 'react';
import './App.css';
import Square from './Component/Square'

{/* setting the initial of the board to clear */}
const initialState=["", "", "", "", "", "", "", "", ""];

function App() {

  const [gameState, updateGameState] = useState(initialState);
  const [isXturn, updateisXturn] = useState(false);

  const onSquareClicked = (index) => {
    {/* putting the useState array in a variable */}
    let strings = Array.from(gameState);
    strings[index] = isXturn ? "X" : "O";
    updateGameState(strings);
    updateisXturn(!isXturn);
  }

  useEffect(() => {
    const winner = checkWinner();
    if(winner) {
      alert(`Oh snap! ${winner} done won the game!`)
      updateGameState(initialState)
    }
  }, [gameState])

  const checkWinner = () => {
    {/* getting the various possibilities of the gameboard */}
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
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="App"  className="App-header">
      <p className ="heading-text">Tic-tac-toe baybeee</p>
      <p className = "description-text">This is a simple game of tic-tac-toe against yourself. O goes first, have fun and feel free to reset the game when needed!</p>
      {/* creating the boardgame with the Square components */}
      <div className="row jc-center">
        {/* adding the onClick function for functionality within each square*/}
        <Square className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)}/>
        <Square className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)}/>
        <Square className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)}/>
      </div>

      <div className="row jc-center">
        <Square className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)}/>
        <Square className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)}/>
        <Square className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)}/>
      </div>

      <div className="row jc-center">
        <Square className="b-right" state={gameState[6]} onClick={() => onSquareClicked(6)}/>
        <Square className="b-right" state={gameState[7]} onClick={() => onSquareClicked(7)}/>
        <Square state={gameState[8]} onClick={() => onSquareClicked(8)}/>
      </div>
      {/* reset game button with the onClick handler to return the game back to the initial state of empty */}
      <button className="clear-button" onClick={() => updateGameState(initialState)}>Game Reset</button>
      <p>Games with Ad???</p>
    </div>
  );
}

export default App;
