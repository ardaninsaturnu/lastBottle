export const rollTheDice = () => {
  const diceDirection = Math.floor(Math.random() * 6) + 1;
  const diceStep = Math.floor(Math.random() * 6) + 1;
  
  return { diceStep, diceDirection }
}

export const calculateLocation = ( object ) => {
  const gColumn = Math.floor( Math.random() * 42 );
  const gRow = Math.floor( Math.random() * 24 );
  
  if( object === 'gpgp' ) {
    return [
      {
        column: gColumn,
        row: gRow
      },
      {
        column: gColumn - 1,
        row: gRow
      },
      {
        column: gColumn + 1,
        row: gRow
      },
      {
        column: gColumn,
        row: gRow + 1
      },
      {
        column: gColumn,
        row: gRow - 1
      },
      {
        column: gColumn - 1,
        row: gRow - 1
      },
      {
        column: gColumn - 1,
        row: gRow + 1
      },
      {
        column: gColumn + 1,
        row: gRow + 1
      },
      {
        column: gColumn + 1,
        row: gRow - 1
      },
    ]
  }
  
    return { column: gColumn, row: gRow }
}
