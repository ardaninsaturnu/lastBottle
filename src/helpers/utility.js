export const rollTheDice = () => {
  const diceDirection = Math.floor(Math.random() * 6) + 1;
  const diceStep = Math.floor(Math.random() * 6) + 1;
  
  return { diceStep, diceDirection }
}

export const calculateLocation = ( object ) => {
  const min = ( object === 'gpgp' ? 2 : 1 );
  const maxCol = ( object === 'gpgp' ? 41 : 42 );
  const maxRow = ( object === 'gpgp' ? 23 : 24 );
  const gColumn = Math.floor(Math.random() * (maxCol - min + 1)) + min;
  const gRow = Math.floor(Math.random() * (maxRow - min + 1)) + min;
  
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

export const checkWinner = ( patchLocations, rowCount, columnCount, setStart, prevPlayer ) => {
  const checkBottle = patchLocations.some( patch => patch.column === columnCount.bottle ) && patchLocations.some( patch => patch.row === rowCount.bottle );
  const checkHenry = patchLocations.some( patch => patch.column === columnCount.henry ) && patchLocations.some( patch => patch.row === rowCount.henry );
  const henryAndBottle = rowCount.henry !== null && rowCount.bottle !== null && columnCount.bottle === columnCount.henry && rowCount.bottle === rowCount.henry;
  
  if( checkBottle ) {
    alert( 'bottle has won.' );
    setStart( false );
    return true;
  } else if ( checkHenry || henryAndBottle ) {
    alert( 'Henry saved the world.' );
    setStart( false );
    return true;
  }
  
  return false;
}

export const checkFirstLocation = ( patchLocations, rowCount, columnCount ) => {
  const checkBottle = patchLocations?.some( patch => patch.column === columnCount.bottle ) && patchLocations?.some( patch => patch.row === rowCount.bottle );
  const checkHenry = patchLocations.some( patch => patch.column === columnCount.henry ) && patchLocations.some( patch => patch.row === rowCount.henry );
  const henryAndBottle = rowCount.henry !== null && rowCount.bottle !== null && columnCount.bottle === columnCount.henry && rowCount.bottle === rowCount.henry;
  
  if( checkBottle ) {
    return true;
  } else if ( checkHenry || henryAndBottle ) {
    return true;
  }
  
  return false;
}

