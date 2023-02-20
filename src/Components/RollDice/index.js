import React, { useState } from "react";

function DiceRoller() {
  const [dice, setDice] = useState({direction: 0, step: 0});
  
  function rollDice() {
    const diceDirection = Math.floor(Math.random() * 6) + 1;
    const diceStep = Math.floor(Math.random() * 6) + 1;
    setDice({ direction: diceDirection, step: diceStep });
  }
  
  return (
    <div className="dice-roller">
      <div className="dice-content"> Direction <div className="dice-content-box">{ dice.direction }</div></div>
      <div className="dice-content">Steps <div style={{padding:6,border:'2px black solid',width:24,height:24,display:"flex",justifyContent:'center',alignItems:'center'}}>{ dice.step }</div></div>
      <button onClick={rollDice} className="button button-dice">Zar At</button>
    </div>
  );
}

export default DiceRoller;
