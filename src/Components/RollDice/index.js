import React, { useState } from "react";

function DiceRoller() {
  const [dice, setDice] = useState({direction: 0, step: 0});
  
  function rollDice() {
    const diceDirection = Math.floor(Math.random() * 6) + 1;
    const diceStep = Math.floor(Math.random() * 6) + 1;
    setDice({ direction: diceDirection, step: diceStep });
  }
  
  return (
    <div>
      <button onClick={rollDice}>Zar At</button>
      <p>
        İlk zar: { dice.direction }<br />
        İkinci zar: { dice.step }
      </p>
    </div>
  );
}

export default DiceRoller;
