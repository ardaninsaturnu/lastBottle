import DiceRoller from "../RollDice";
import './game-header.css';

const GameHeader = () => {
  return(
    <div className="header">
      <h2 className="header-title">The Last Bottle</h2>
      <DiceRoller/>
    </div>
  )
}

export default GameHeader;
