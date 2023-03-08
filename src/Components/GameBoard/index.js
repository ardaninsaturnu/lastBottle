import React, { useEffect, useState } from 'react';
import Square from "../../Elements/Square";
import Henry from "../../Elements/Henry";
import Bottle from "../../Elements/Bottle";
import Gpgp from "../../Elements/Gpgp";
import { useGameContext } from "../../context/GameContext";
import useLocation from "../../hooks/useLocation";
import {checkFirstLocation, checkWinner, rollTheDice, updatePlayerPosition } from "../../helpers/utility";
import useDice from "../../hooks/useDice";
import './board.css';

const GameBoard = () => {
  const {
    gpgpLocation,
    dice,
    start,
    rowCount,
    columnCount,
    setStart,
    setColumnCount,
    setRowCount,
    player,
    setPlayer
  } = useGameContext();
  const board = [];
  const [ setLocation, randomPatchLocation, numCols, numRows ] = useLocation();
  const { diceDirection, diceStep } = rollTheDice();
  const { rollDice } = useDice();
  const [ browserSize, setBrowserSize ] = useState({ width: numCols, height: numRows });
  
  useEffect( () => {
    setLocation()
    randomPatchLocation()
  },[]);
  
  useEffect( () => {
      if(checkFirstLocation( gpgpLocation, rowCount, columnCount )) {
        window.location.reload()
      }
  },[ setLocation, randomPatchLocation ])

  useEffect(() => {
    if( dice.route !== '' ){
      updatePlayerPosition(dice,rowCount,setRowCount, columnCount, setColumnCount, player, browserSize);
      player.prev === 'bottle' ? setPlayer({ prev: 'henry', current: 'bottle' }) : setPlayer({ prev: 'bottle', current: 'henry' });
    }
  },[ dice ]);
  
  const handleRow = () => {
    for ( let r = 1; r <= browserSize.height; r++ ) {
      const row = [];
      
      for ( let c = 1; c <= browserSize.width; c++ ) {
        row.push(
          <Square key={`${r}-${c}`}>
            { r === (rowCount.henry ) && c === ( columnCount.henry ) ? <Henry/> : null }
            { r === ( rowCount.bottle ) && c === ( columnCount.bottle ) ? <Bottle/> : null }
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
    for ( let j = 1; j <= browserSize.width; j++ ) {
      columnHeader.push(
        <div key={`c${j}`} className="column-header columnHeader">{`C${j}`}</div>
      );
    }
    
    return columnHeader;
  }
  
  useEffect(() => {
    if( dice.route !== '' ){
      
      setTimeout( () => {
        if( player.prev === 'bottle' ) {
          setPlayer({ prev:'henry', current:'bottle' });
          alert('Henry\'s turn');
          setStart( true );
          
        } else {
          setPlayer({ prev:'bottle' ,current:'henry' });
          alert('Bottle turn');
          setStart( true );
          rollDice( diceDirection, diceStep );
        }
      }, 1000 );
    }
    handleRow()
    handleColumn()
   
  },[ dice, start ]);
  
  useEffect( () => {
    if( dice.route !== '' ){
      checkWinner( gpgpLocation, rowCount, columnCount, setStart );
    }
  }, [ dice, start, rowCount, columnCount ] );
  
  return (
    <div className="board">
      <div className="column-header columnHeader"/>
      {handleColumn()}
      {handleRow()}
    </div>
  );
};

export default GameBoard;
