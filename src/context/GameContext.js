import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [dice, setDice] = useState({direction: 0, step: 0, route: ''});
  const [ start, setStart ] = useState( false );
  const [ rowCount, setRowCount ] = useState({ henry: null, bottle: null });
  const [ columnCount, setColumnCount ] = useState({ henry: null, bottle: null });
  const [ gpgpLocation, setGpgpLocation ] = useState( [] );
  const [ prevPlayer, setPrevPlayer ] = useState( 'bottle' );
  
  const contextValues = {
    dice,
    setDice,
    start,
    setStart,
    rowCount,
    setRowCount,
    columnCount,
    setColumnCount,
    prevPlayer,
    setPrevPlayer,
    gpgpLocation,
    setGpgpLocation
  };
  
  return <GameContext.Provider value={contextValues}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  return useContext(GameContext);
};

export { GameContextProvider, useGameContext };
