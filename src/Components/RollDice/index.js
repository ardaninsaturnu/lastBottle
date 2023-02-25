import React from "react";
import {oppositeDirections} from "../../helpers/constant";

function DiceRoller({ dice, setDice }) {
  
  function rollDice() {
    const diceDirection = Math.floor(Math.random() * 6) + 1;
    const diceStep = Math.floor(Math.random() * 6) + 1;
    let routes = [ "north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest" ];
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
      <button onClick={rollDice} className="button button-dice">Zar At</button>
    </div>
  );
}

export default DiceRoller;
