import React from 'react'
import './Square.css'
import { useDispatch } from 'react-redux'
import { makeTurn } from '../../features/gameSlice'


function Square(props) {
  const { value, index } = props
  const dispatch = useDispatch()

  return (
    <div className="square" onClick={() => dispatch(makeTurn(index))}>
      {value}
    </div>
  )
}

export default Square
