import React from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";

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
for (let i = 0; i < 24; i++) {
  const row = [];
  for (let j = 0; j < 42; j++) {
    row.push(
      <Square key={`${i}-${j}`}>
        { i === 2 && j === 2 ? <Henry/> : null }
        { i === 5 && j === 4 ? <Bottle/> : null }
      </Square>
    );
  }
  board.push(
    <div key={i} className="row" style={ styles.row }>
      <div className="row-header" style={ styles.rowHeader }>{`R${ i + 1 }`}</div>
      { row }
    </div>
  );
}
const columnHeader = [];
for ( let j = 0; j < 42; j++ ) {
  columnHeader.push(
    <div key={`c${ j }`} className="column-header" style={styles.columnHeader}>{`C${ j + 1 }`}</div>
  );
}
return (
  <div className="board" style={styles.board}>
    <div className="column-header" style={styles.columnHeader} />
    {columnHeader}
    {board}
  </div>
);
};

export default GameBoard;
