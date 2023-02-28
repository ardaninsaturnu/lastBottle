import React, {useEffect, useState} from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";
import './board.css';

const GameBoard = ({ dice }) => {
  const board = [];
  const [ rowCount, setRowCount ] = useState({ henry: 10, bottle: 15, patch: 5 });
  const [ columnCount, setColumnCount ] = useState({ henry: 10, bottle: 15, patch: 5 });
  const [ prevPlayer, setPrevPlayer ] = useState( 'bottle');
  
  const handleRow = () => {
    for ( let r = 0; r <= 24; r++ ) {
      const row = [];
      for ( let c = 0; c <= 42; c++ ) {
        row.push(
          <Square key={`${r}-${c}`}>
            { r === rowCount.henry && c === columnCount.henry  ? <Henry/> : null }
            { r === rowCount.bottle && c === columnCount.bottle ? <Bottle/> : null }
            { r === rowCount.patch && c === columnCount.patch ? <Gpgp/> : null }
          </Square>
        );
      }
      
      board.push(
        <div key={ r } className="row">
          <div className="row-header rowHeader">{`R${ r + 1 }`}</div>
          { row }
        </div>
      );
    }
    
    return board;
  }
  
  const handleColumn = () => {
    const columnHeader = [];
    for ( let j = 0; j < 42; j++ ) {
      columnHeader.push(
        <div key={`c${j}`} className="column-header columnHeader">{`C${j + 1}`}</div>
      );
    }
    
    return columnHeader;
  }
  
  useEffect(() => {
    if( dice.route !== '' ){
      switch(dice.route) {
        case 'N':
          setRowCount(prev => ({
            ...rowCount,
            [ prevPlayer ]: (( prev[ prevPlayer ] + dice.step ) % 24) === 0 ?  (( prev[ prevPlayer ] + dice.step ) % 24) + 1 : ( prev[ prevPlayer ] + dice.step ) % 24
          }));
          break;
        case 'S':
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ((prev[ prevPlayer ] + dice.step) % 42 ) === 0 ? ((prev[ prevPlayer ] + dice.step) % 42 ) + 1 : ((prev[ prevPlayer ] + dice.step) % 42 )
          }));
          break;
        case 'W':
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] - dice.step ) < 0 ? 42 + ( prev[ prevPlayer ] - dice.step ) : ( prev[ prevPlayer ] - dice.step )
          }));
          break;
        case 'E':
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] + dice.step ) > 42 ? ( prev[ prevPlayer ] + dice.step ) - 42 : ( prev[ prevPlayer ] + dice.step )
          }));
          break;
        case 'NW':
          setRowCount(prev => ({
            ...rowCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] - dice.step ) < 0 ? 24 + ( prev[ prevPlayer ] - dice.step ) : ( prev[ prevPlayer ] - dice.step )
          }));
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] - dice.step ) < 0 ? 42 + ( prev[ prevPlayer ] - dice.step ) : ( prev[ prevPlayer ] - dice.step )
          }));
          break;
        case 'SE':
          setRowCount(prev => ({
            ...rowCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] + dice.step ) > 24 ? ( prev[ prevPlayer ] + dice.step ) - 24 : ( prev[ prevPlayer ] + dice.step )
          }));
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] + dice.step ) > 42 ? ( prev[ prevPlayer ] + dice.step ) - 42 : ( prev[ prevPlayer ] + dice.step )
          }));
          break;
        case 'SW':
          setRowCount(prev => ({
            ...rowCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] + dice.step ) > 24 ? ( prev[ prevPlayer ] + dice.step ) - 24 : ( prev[ prevPlayer ] + dice.step )
          }));
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] - dice.step ) < 0 ? 42 + ( prev[ prevPlayer ] - dice.step ) : ( prev[ prevPlayer ] - dice.step )
          }));
          break;
        case 'NE':
          setRowCount(prev => ({
            ...rowCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] - dice.step ) < 0 ? 24 + ( prev[ prevPlayer ] - dice.step ) : ( prev[ prevPlayer ] - dice.step )
          }));
          setColumnCount( prev => ({
            ...columnCount,
            [ prevPlayer ]: ( prev[ prevPlayer ] + dice.step ) > 42 ? ( prev[ prevPlayer ] + dice.step ) - 42 : ( prev[ prevPlayer ] + dice.step )
          }));
          break;
        default:
          console.error('Invalid route');
      }
  
  
      prevPlayer === 'bottle' ? setPrevPlayer('henry') : setPrevPlayer('bottle');
    }
    
    handleRow()
    handleColumn()
   
  },[ dice ])
  
  console.log( dice,prevPlayer, rowCount, columnCount )
  
  return (
    <div className="board">
      <div className="column-header columnHeader"/>
      {handleColumn()}
      {handleRow()}
    </div>
  );
};

export default GameBoard;
