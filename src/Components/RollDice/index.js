import React from "react";
import {oppositeDirections} from "../../helpers/constant";
import { rollTheDice } from "../../helpers/utility";

function DiceRoller({ dice, setDice, start }) {
  const { diceStep, diceDirection } = rollTheDice();
  
  function rollDice() {
    let routes = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW" ];
    const firstPlayerDirection = routes[diceDirection];
    const forbiddenDirections = [firstPlayerDirection, oppositeDirections[firstPlayerDirection]];
    
    for (const forbiddenDirection of forbiddenDirections ) {
      const index = routes.indexOf(forbiddenDirection);
        routes.splice(index, 1);
    }
    
    setDice({ ...dice, direction: diceDirection, step: diceStep, route: firstPlayerDirection  });
  }
  
  return (
    <div className="dice-roller">
      <div className="dice-content"> Direction <div className="dice-content-box">{ dice?.direction }</div><strong>{dice.route}</strong></div>
      <div className="dice-content">Steps <div style={{padding:6,border:'2px black solid',width:24,height:24,display:"flex",justifyContent:'center',alignItems:'center'}}>{ dice?.step }</div></div>
      <button onClick={rollDice} className="button button-dice" style={{ background: !start ? 'gray' : '' }} disabled={!start}>Zar At</button>
    </div>
  );
}

export default DiceRoller;
