import React from 'react'
import { useSelector } from 'react-redux'
import './Board.css'
import Square from '../Square/Square'

function Board() {
  useSelector(state => state.game.squareValues)
  const squareValues = useSelector(state => state.game.squareValues)
  const squares = squareValues.map((value, index) => <Square value={value} index={index} key={index} />)
  return (
    <div className="board">
      {squares}
    </div>
  )
}

export default Board
