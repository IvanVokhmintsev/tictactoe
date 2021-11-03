import React from 'react'
import './App.css'
import Board from '../Board/Board'
import GameInfo from '../GameInfo/GameInfo';

function App() {
  return (
    <div className="app" >
      <Board />
      <GameInfo />
    </div>
  );
}

export default App;
