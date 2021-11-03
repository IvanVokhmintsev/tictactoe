const checkWinner = function(squareValues, turn) {
  const indexesToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const playerIndexes = squareValues.map((value, index) => {
    if (value === turn) return index
    return null
  }).filter(value => value !== null)

  console.log(playerIndexes)

  for (const indexSet of indexesToWin) {
    if (indexSet.every(val => playerIndexes.includes(val))) return true
  }
  return false
}

export default checkWinner
