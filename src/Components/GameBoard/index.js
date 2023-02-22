import React from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";

const GameBoard = () => {
  const styles = {
    board: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      width: 'min-content',
      height: 'auto',
      margin: '0 auto',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    columnHeader: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      fontWeight: 'bold',
      border: '0.5px solid rgb(0 0 0 / 0%)',
      fontSize: 8
    },
    rowHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      fontWeight: 'bold',
      fontSize: 8,
      border: '0.5px solid rgb(0 0 0 / 0%)',
    },
};

const board = [];
for ( let r = 1; r <= 24; r++ ) {
  const row = [];
  for ( let c = 1; c <= 42; c++ ) {
    row.push(
      <Square key={`${r}-${c}`}>
        { r === 2 && c === 2 ? <Henry/> : null }
        { r === 5 && c === 42 ? <Bottle/> : null }
        { r === 12 && c === 12 ? <Gpgp/> : null }
        { r === 11 && c === 12 ? <Gpgp/> : null }
        { r === 13 && c === 12 ? <Gpgp/> : null }
        { r === ( 11 ) && c === ( 12 - 1 ) ? <Gpgp/> : null }
        { r === ( 12 ) && c === ( 12 - 1 ) ? <Gpgp/> : null }
        { r === ( 13 ) && c === ( 12 - 1 ) ? <Gpgp/> : null }
        { r === ( 11 ) && c === ( 13 ) ? <Gpgp/> : null }
        { r === ( 12 ) && c === ( 13 ) ? <Gpgp/> : null }
        { r === ( 13 ) && c === ( 13 ) ? <Gpgp/> : null }
      </Square>
    );
  }
  board.push(
    <div key={ r } className="row" style={ styles.row }>
      <div className="row-header" style={ styles.rowHeader }>{`R${ r }`}</div>
      { row }
    </div>
  );
}

const columnHeader = [];
for ( let j = 0; j < 42; j++ ) {
  columnHeader.push(
    <div key={`c${j}`} className="column-header" style={styles.columnHeader}>{`C${j + 1}`}</div>
  );
}
return (
  <div className="board" style={styles.board}>
    <div className="column-header" style={styles.columnHeader}/>
    {columnHeader}
    {board}
  </div>
);
};

export default GameBoard;
