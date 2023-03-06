import {useGameContext} from "../context/GameContext";
import bottle from '../assets/img/bottle_icon@2x.png';

const Bottle = () => {
  const {start} = useGameContext();
  
  const styles = {
    element: {
      width: '30px',
      height: '30px',
      backgroundColor: 'crimson',
      display: start ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
  
  return <div style={styles.element}><img src={bottle} alt="bottle player icon" width={25}/></div>;
};

export default Bottle;
