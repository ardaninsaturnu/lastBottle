import React, { useEffect } from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";
import './board.css';

const GameBoard = ({ dice, start, gpgpLocation, prevPlayer, setPrevPlayer, rowCount, setRowCount, columnCount, setColumnCount, setStart }) => {
  const board = [];
  
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
  
  const handleRow = () => {
    for ( let r = 1; r <= 24; r++ ) {
      const row = [];
      
      for ( let c = 1; c <= 42; c++ ) {
        row.push(
          <Square key={`${r}-${c}`}>
            { r === (rowCount.henry ?? 1 ) && c === ( columnCount.henry ?? 1 ) ? <Henry/> : null }
            { r === ( rowCount.bottle ?? 1 ) && c === ( columnCount.bottle ?? 1 ) ? <Bottle/> : null }
            { gpgpLocation.map ( ( location, index ) => { return r === location.row && c === location.column ? <Gpgp key={index}/> : null }) }
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
    
    return board;
  }
  
  const handleColumn = () => {
    const columnHeader = [];
    for ( let j = 1; j <= 42; j++ ) {
      columnHeader.push(
        <div key={`c${j}`} className="column-header columnHeader">{`C${j}`}</div>
      );
    }
    
    return columnHeader;
  }
  
  useEffect(() => {
    if( dice.route !== '' ){
      setStart( false )
      
      setTimeout( () => {
        if( prevPlayer === 'bottle' ) {
          setPrevPlayer('henry');
          alert('Henry\'s turn')
          setStart( true )
        } else {
          setPrevPlayer('bottle')
          alert('Bottle turn')
          setStart( true )
        }
      }, 2000 )
    }
    
    handleRow()
    handleColumn()
   
  },[ dice,start ])
  
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
