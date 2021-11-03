import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { resetValues } from '../../features/gameSlice'
import './GameInfo.css'

function GameInfo() {
  const { turn } = useSelector(state => state.game)
  const dispatch = useDispatch()
  return (
    <div className="game-info">
      <span className="turn-info">Current Turn: {turn}</span>
      <br />
      <button onClick={() => dispatch(resetValues())}>Reset</button>
    </div>
  )
}

export default GameInfo
