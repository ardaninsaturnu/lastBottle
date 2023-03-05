import {oppositeDirections} from "../helpers/constant";
import {useGameContext} from "../context/GameContext";

function useDice() {
  const {dice, setDice} = useGameContext()
  
  function rollDice(diceDirection, diceStep) {
    let routes = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW" ];
    const firstPlayerDirection = routes[diceDirection];
    const forbiddenDirections = [firstPlayerDirection, oppositeDirections[firstPlayerDirection]];
    
    for (const forbiddenDirection of forbiddenDirections ) {
      const index = routes.indexOf(forbiddenDirection);
      routes.splice(index, 1);
    }
    
    setDice({ ...dice, direction: diceDirection, step: diceStep, route: firstPlayerDirection  });
  }
  
  return { rollDice };
}

export default useDice;
