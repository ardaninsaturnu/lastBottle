import React from "react";
import { rollTheDice } from "../../helpers/utility";
import useDice from "../../hooks/useDice";
import {useGameContext} from "../../context/GameContext";

function DiceRoller() {
  const { dice, start } = useGameContext();
  const { diceStep, diceDirection } = rollTheDice();
  const { rollDice } = useDice();
  
  return (
    <div className="dice-roller">
      <div className="dice-content"> Direction <div className="dice-content-box">{ dice?.direction }</div><strong>{dice.route}</strong></div>
      <div className="dice-content">Steps <div style={{padding:6,border:'2px black solid',width:24,height:24,display:"flex",justifyContent:'center',alignItems:'center'}}>{ dice?.step }</div></div>
      <button onClick={ () => rollDice( diceStep, diceDirection ) } className="button button-dice" style={{ background: !start ? 'gray' : '' }} disabled={!start}>Zar At</button>
    </div>
  );
}

export default DiceRoller;
