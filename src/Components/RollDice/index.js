import React, {useState} from "react";

const oppositeDirections = {
  "north": "south",
  "northeast": "southwest",
  "east": "west",
  "southeast": "northwest",
  "south": "north",
  "southwest": "northeast",
  "west": "east",
  "northwest": "southeast",
};

function DiceRoller({ dice, setDice }) {
  const [ directions, setDirections ] = useState( [ "north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest" ]);
  
  function rollDice() {
    const diceDirection = Math.floor(Math.random() * 6) + 1;
    const diceStep = Math.floor(Math.random() * 6) + 1;
    let directionState = directions;
    
    // Get the index of the first player's direction
    const firstPlayerDirection = directions[diceDirection];

// Remove the first player's direction and its opposite from the array
    const forbiddenDirections = [firstPlayerDirection, oppositeDirections[firstPlayerDirection]];
    directions.splice(diceDirection, 1);
    for (const forbiddenDirection of forbiddenDirections) {
      const index = directions.indexOf(forbiddenDirection);
      if (index !== -1) {
        directions.splice(index, 1);
      }
    }
    
    setDirections(directions)
    
    setDice({ ...dice, direction: diceDirection, step: diceStep, directions  });
    setDice({ ...dice, direction: diceDirection, step: diceStep });
  }
  
  console.log('roll dice', dice)
  
  return (
    <div className="dice-roller">
      <div className="dice-content"> Direction <div className="dice-content-box">{ dice?.direction }</div><strong>{'North'}</strong></div>
      <div className="dice-content">Steps <div style={{padding:6,border:'2px black solid',width:24,height:24,display:"flex",justifyContent:'center',alignItems:'center'}}>{ dice?.step }</div></div>
      <button onClick={rollDice} className="button button-dice">Zar At</button>
    </div>
  );
}

export default DiceRoller;
