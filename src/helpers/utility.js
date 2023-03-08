export const rollTheDice = () => {
  const diceDirection = Math.floor(Math.random() * 6) + 1;
  const diceStep = Math.floor(Math.random() * 6) + 1;
  
  return { diceStep, diceDirection }
}

export const calculateLocation = ( object, cols, rows ) => {
  const min = ( object === 'gpgp' ? 2 : 1 );
  const maxCol = ( object === 'gpgp' ? ( cols - 1 ) : cols );
  const maxRow = ( object === 'gpgp' ? ( rows - 1 ) : rows );
  const patchColumn = Math.floor(Math.random() * (maxCol - min + 1)) + min;
  const patchRow = Math.floor(Math.random() * (maxRow - min + 1)) + min;
  
  if( object === 'gpgp' ) {
    return [
      {
        column: patchColumn,
        row: patchRow
      },
      {
        column: patchColumn - 1,
        row: patchRow
      },
      {
        column: patchColumn + 1,
        row: patchRow
      },
      {
        column: patchColumn,
        row: patchRow + 1
      },
      {
        column: patchColumn,
        row: patchRow - 1
      },
      {
        column: patchColumn - 1,
        row: patchRow - 1
      },
      {
        column: patchColumn - 1,
        row: patchRow + 1
      },
      {
        column: patchColumn + 1,
        row: patchRow + 1
      },
      {
        column: patchColumn + 1,
        row: patchRow - 1
      },
    ]
  }
  
    return { column: patchColumn, row: patchRow }
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

export const updatePlayerPosition = ( dice, rowCount, setRowCount, columnCount, setColumnCount, player, browserSize ) => {
  
  switch(dice.route) {
    case 'N':
      setRowCount( prev => ({
        ...rowCount,
        [ player.prev ]: (( prev[ player.prev ] + dice.step ) % browserSize.height ) === 1 ?  (( prev[ player.prev ] + dice.step ) % browserSize.height ) + 1 : ( prev[ player.prev ] + dice.step ) % browserSize.height
      }));
      break;
    case 'S':
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev  ]: ((prev[ player.prev  ] + dice.step) % browserSize.width ) === 1 ? ((prev[ player.prev  ] + dice.step) % browserSize.width ) + 1 : ((prev[ player.prev ] + dice.step) % browserSize.width )
      }));
      break;
    case 'W':
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev  ]: ( prev[ player.prev  ] - dice.step ) < 1 ? browserSize.width + ( prev[ player.prev  ] - dice.step ) : ( prev[ player.prev  ] - dice.step )
      }));
      break;
    case 'E':
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev  ]: ( prev[ player.prev  ] + dice.step ) > browserSize.width ? ( prev[ player.prev  ] + dice.step ) - browserSize.width : ( prev[ player.prev  ] + dice.step )
      }));
      break;
    case 'NW':
      setRowCount(prev => ({
        ...rowCount,
        [ player.prev  ]: ( prev[ player.prev ] - dice.step ) < 1 ? browserSize.height + ( prev[ player.prev ] - dice.step ) : ( prev[ player.prev ] - dice.step )
      }));
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev ]: ( prev[ player.prev ] - dice.step ) < 1 ? browserSize.width + ( prev[ player.prev ] - dice.step ) : ( prev[ player.prev ] - dice.step )
      }));
      break;
    case 'SE':
      setRowCount(prev => ({
        ...rowCount,
        [ player.prev ]: ( prev[ player.prev ] + dice.step ) > browserSize.height ? ( prev[ player.prev ] + dice.step ) - browserSize.height : ( prev[ player.prev ] + dice.step )
      }));
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev ]: ( prev[ player.prev ] + dice.step ) > browserSize.width ? ( prev[ player.prev ] + dice.step ) - browserSize.width : ( prev[ player.prev ] + dice.step )
      }));
      break;
    case 'SW':
      setRowCount(prev => ({
        ...rowCount,
        [ player.prev ]: ( prev[ player.prev ] + dice.step ) > browserSize.height ? ( prev[ player.prev ] + dice.step ) - browserSize.height : ( prev[ player.prev ] + dice.step )
      }));
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev ]: ( prev[ player.prev ] - dice.step ) < 0 ? browserSize.width + ( prev[ player.prev ] - dice.step ) : ( prev[ player.prev ] - dice.step )
      }));
      break;
    case 'NE':
      setRowCount(prev => ({
        ...rowCount,
        [ player.prev ]: ( prev[ player.prev ] - dice.step ) < 1 ? browserSize.height + ( prev[ player.prev ] - dice.step ) : ( prev[ player.prev ] - dice.step )
      }));
      setColumnCount( prev => ({
        ...columnCount,
        [ player.prev ]: ( prev[ player.prev ] + dice.step ) > browserSize.width ? ( prev[ player.prev ] + dice.step ) - browserSize.width : ( prev[ player.prev ] + dice.step )
      }));
      break;
    default:
      console.error('Invalid route');
  }
}

