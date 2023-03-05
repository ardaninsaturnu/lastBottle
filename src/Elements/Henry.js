import {useGameContext} from "../context/GameContext";

const Henry = () => {
  const { start } = useGameContext();
  
  const styles = {
    element: {
      width: '30px',
      height: '30px',
      backgroundColor: 'orange',
      display: start ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  
  return <div style={styles.element}>H</div>;
};

export default Henry;
