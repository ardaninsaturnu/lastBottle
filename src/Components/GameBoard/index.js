import React, { useMemo, useState } from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";
import './board.css';

const GameBoard = ({ dice }) => {
  const board = [];
  const [ rowCount, setRowCount ] = useState({ henryRow: 10, bottleRow: 15, patchRow: 5 });
  const [ columnCount, setColumnCount ] = useState({ henryColumn: 10, bottleColumn: 15, patchColumn: 5 });
  const [ prevPlayer, setPrevPlayer ] = useState( 'bottle');
  
  useMemo(() => {
    if( dice ){
      const currentPlayerRow = prevPlayer === 'bottle' ? 'bottleRow' : 'henryRow';
      const currentPlayerColumn = prevPlayer === 'bottle' ? 'bottleColumn' : 'henryColumn';
      
      switch ( dice.route ) {
        case 'east':
          return (
            setRowCount( prev => ({
              ...rowCount,
              [ currentPlayerRow ]: ( prev[currentPlayerRow] + dice.step ) > 24 ? ( prev[currentPlayerRow] + dice.step - 24 ) : prev[currentPlayerRow] + dice.step
            }))
          )
        case 'west':
          return (
            setRowCount( prev => ({
              ...rowCount,
              [ currentPlayerRow ]: ( prev[currentPlayerRow] - dice.step ) > 24 ? ( prev[currentPlayerRow] - dice.step ) - 24  : prev[currentPlayerRow] - dice.step
            }))
          )
        case 'north':
          return (
            setColumnCount( prev => ({
              ...columnCount,
              [currentPlayerColumn]: ( prev[currentPlayerColumn] - dice.step ) > 42 ? ( prev[currentPlayerColumn] - dice.step ) - 42 : prev[currentPlayerColumn] - dice.step
            }))
          )
        case 'south':
          return (
            setColumnCount( prev => ({
              ...columnCount,
              [currentPlayerColumn]: ( prev[currentPlayerColumn] + dice.step ) > 42 ? ( prev[currentPlayerColumn] + dice.step ) - 42 : prev[currentPlayerColumn] + dice.step
            }))
          )
      }
  
      prevPlayer === 'bottle' ? setPrevPlayer('henry') : setPrevPlayer('bottle');
    }
    
  },[ dice ])
  
  for ( let r = 1; r <= 24; r++ ) {
    const row = [];
    for ( let c = 1; c <= 42; c++ ) {
      row.push(
        <Square key={`${r}-${c}`}>
          { r === rowCount.henryRow && c === columnCount.henryColumn  ? <Henry/> : null }
          { r === rowCount.bottleRow && c === columnCount.bottleColumn ? <Bottle/> : null }
          { r === rowCount.patchRow && c === columnCount.patchColumn ? <Gpgp/> : null }
        </Square>
      );
    }
    
    board.push(
      <div key={ r } className="row">
        <div className="row-header rowHeader">{`R${ r }`}</div>
        { row }
      </div>
    );
  }

  const columnHeader = [];
  for ( let j = 0; j < 42; j++ ) {
    columnHeader.push(
      <div key={`c${j}`} className="column-header columnHeader">{`C${j + 1}`}</div>
    );
  }
  
  return (
    <div className="board">
      <div className="column-header columnHeader"/>
      {columnHeader}
      {board}
    </div>
  );
};

export default GameBoard;
