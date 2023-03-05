import {useGameContext} from "../context/GameContext";

const Gpp = () => {
  const {start} = useGameContext();
  
  const styles = {
    element: {
      width: '30px',
      height: '30px',
      backgroundColor: 'rgb(242, 167, 167)',
      display: start ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  
  return <div style={styles.element}></div>;
};

export default Gpp;
