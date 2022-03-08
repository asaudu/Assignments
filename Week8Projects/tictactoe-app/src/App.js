import React, {useState, useEffect} from 'react';
import './App.css';
import Square from './Component/Square'

const initialState=["", "", "", "", "", "", "", "", ""];

function App() {

  const [gameState, updateGameState] = useState(initialState);
  const [isXturn, updateisXturn] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXturn ? "X" : "O";
    updateGameState(strings);
    updateisXturn(!isXturn)
  }

  useEffect(() => {

  }, [gameState])

  const checkWinner = () => {
    
  }

  return (
    <div className="App"  className="App-header">
      <p className ="heading-text">Tic-tac-toe baybeee</p>
      <div className="row jc-center">
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
      <button className="clear-button">Game Reset</button>
      <p>Games with Ad™</p>
    </div>
  );
}

export default App;
