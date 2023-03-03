import DiceRoller from "../RollDice";
import './game-header.css';
import {useGameContext} from "../../context/GameContext";

const GameHeader = () => {
  const { dice, setDice, start } = useGameContext();
  
  return(
    <div className="header">
      <h2 className="header-title">The Last Bottle</h2>
      <DiceRoller dice={dice} setDice={setDice} start={start}/>
    </div>
  )
}

export default GameHeader;
