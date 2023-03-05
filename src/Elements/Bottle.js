import {useGameContext} from "../context/GameContext";

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
  
  return <div style={styles.element}>B</div>;
};

export default Bottle;
