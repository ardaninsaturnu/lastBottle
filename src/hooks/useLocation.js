import { useGameContext } from '../context/GameContext';
import { calculateLocation } from '../helpers/utility';

const useLocation = () => {
  const { setGpgpLocation, setRowCount, setColumnCount } = useGameContext();
  const numCols = Math.floor(((window.innerWidth * 80) / 100)/ 30 );
  const numRows = Math.floor(window.innerHeight / 30);
  
  const randomPatchLocation = () => {
    const gpgp = calculateLocation('gpgp', numCols, numRows );
  
    setGpgpLocation(gpgp);
    return gpgp;
  }
  
  const setLocation = () => {
    const henry = calculateLocation('henry', numCols, numRows );
    const bottle = calculateLocation('bottle', numCols, numRows );
    
    setRowCount({
      henry: henry.row,
      bottle: bottle.row
    });
  
    setColumnCount({
      henry: henry.column,
      bottle: bottle.column
    });
  }
  
  return [ setLocation, randomPatchLocation, numCols, numRows ];
};

export default useLocation;
