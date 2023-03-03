import Legend from "../../Elements/Legend";
import './gameFooter.css';
import {useGameContext} from "../../context/GameContext";

const GameFooter = () => {
  const { setStart } = useGameContext();
  
  return (
    <div className="footer">
      <Legend/>
      <button className="button button-start" onClick={() => {
        setStart(true);
        alert('Oyun Başladı');
      }}>START</button>
    </div>
  )
}

export default GameFooter;
