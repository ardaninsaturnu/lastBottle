import { useGameContext } from '../context/GameContext';
import { calculateLocation } from '../helpers/utility';

const useLocation = () => {
  const { setGpgpLocation, setRowCount, setColumnCount } = useGameContext();
  
  const randomPatchLocation = () => {
    const gpgp = calculateLocation('gpgp');
  
    setGpgpLocation(gpgp);
    return gpgp;
  }
  
  const setLocation = () => {
    const henry = calculateLocation('henry');
    const bottle = calculateLocation('bottle');
    
    setRowCount({
      henry: henry.row,
      bottle: bottle.row
    });
  
    setColumnCount({
      henry: henry.column,
      bottle: bottle.column
    });
  }
  
  return [setLocation, randomPatchLocation];
};

export default useLocation;
