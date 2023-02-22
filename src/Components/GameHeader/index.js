import DiceRoller from "../RollDice";
import './game-header.css';

const GameHeader = ({ dice, setDice }) => {
  return(
    <div className="header">
      <h2 className="header-title">The Last Bottle</h2>
      <DiceRoller dice={dice} setDice={setDice}/>
    </div>
  )
}

export default GameHeader;
