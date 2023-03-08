import {useGameContext} from "../context/GameContext";
import user from "../assets/img/player_icon.svg";

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
  
  return <div style={styles.element}><img src={user} alt="user player icon" width={25}/></div>;
};

export default Henry;
