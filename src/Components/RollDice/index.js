import React, {useEffect, useState} from "react";
import {constant} from "../../helpers/constant";
import {removeValue} from "../../helpers/utility";

function DiceRoller({ dice, setDice }) {
  const [directionName, setDirectionName] = useState( 'Mustafa' )
  const [ previousPlayer, setPreviousPlayer ] = useState(1)
  
  console.log('constant bug', constant)
  
  const specifyDirection = ( dice, previousPlayer,constant ) => {
    const newConstant = [
      ...constant.slice(0, previousPlayer),
      ...constant.slice(previousPlayer + 1)
        .concat(
          constant[previousPlayer].opposite.map((i) => constant[i - 1])
        )
    ]
      .slice(0, 8);
    console.log(newConstant)
  }
  
  function rollDice() {
    const diceDirection = Math.floor(Math.random() * 6) + 1;
    const diceStep = Math.floor(Math.random() * 6) + 1;
    setDice({direction: diceDirection, step: diceStep });
  }
  
  useEffect(()=> {
    specifyDirection(dice, previousPlayer,constant)
  },[dice])
  
  console.log('roll dice', dice)
  
  return (
    <div className="dice-roller">
      <div className="dice-content"> Direction <div className="dice-content-box">{ dice?.direction }</div><strong>{directionName}</strong></div>
      <div className="dice-content">Steps <div style={{padding:6,border:'2px black solid',width:24,height:24,display:"flex",justifyContent:'center',alignItems:'center'}}>{ dice?.step }</div></div>
      <button onClick={rollDice} className="button button-dice">Zar At</button>
    </div>
  );
}

export default DiceRoller;
