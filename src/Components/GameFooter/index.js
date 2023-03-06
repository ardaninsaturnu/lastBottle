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
        window.confirm('Welcome the last bottle game');
        window.confirm('Henry had a long walk to the beach to watch the sunset. He got thirsty because of the hot weather and bought a bottle of water from a nearby\n' +
          'shop. Sun was slowly disappearing on the horizon as he had the last sip from the bottle. He throws the plastic bottle into the ocean, being\n' +
          'unaware of the chain reaction he would start. That was the last bottle to reach the GPgp in the ocean that will end the marine life and then all the\n' +
          'life on earth.');
        window.confirm('Now he must undo his actions: stop the bottle before it reaches the GPgp.');
        alert('Game has started.');
      }}>START</button>
    </div>
  )
}

export default GameFooter;
