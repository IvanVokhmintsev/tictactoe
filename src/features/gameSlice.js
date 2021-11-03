import { createSlice } from '@reduxjs/toolkit'
import checkWinner from './checkWinner'

const initialState = {
  squareValues: new Array(9).fill(null),
  turn: 'X',
  hasWinner: false
}

export const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    makeTurn: (state, action) => {
      const { turn, squareValues, hasWinner } = state
      const index = action.payload
      if (squareValues[index] !== null || hasWinner) return

      const newValues = squareValues.slice()
      newValues[index] = turn

      let newHasWinner = false
      if (checkWinner(newValues, turn)) {
        alert(`Победа ${turn}`)
        newHasWinner = true
      }

      const changedTurn =  turn === 'X' ? 'O' : 'X'

      return Object.assign({}, state, {
        hasWinner: newHasWinner, 
        squareValues: newValues,
        turn: changedTurn
      })
    },
    resetValues: () => {
      return { ...initialState }
    }
  }
})

export const { makeTurn, resetValues } = gameSlice.actions

export default gameSlice.reducer