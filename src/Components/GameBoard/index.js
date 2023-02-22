import React, {useEffect} from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";
import './board.css';

const GameBoard = ({ dice }) => {
  const board = [];
  
  useEffect(()=> {
    if( dice )
      console.log(dice)
  },[dice])
  
  for ( let r = 1; r <= 24; r++ ) {
    const row = [];
    for ( let c = 1; c <= 42; c++ ) {
      row.push(
        <Square key={`${r}-${c}`}>
          { r === 2 && c === 8 ? <Henry/> : null }
          { r === 5 && c === 42 ? <Bottle/> : null }
          { r === 12 && c === 12 ? <Gpgp/> : null }
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
