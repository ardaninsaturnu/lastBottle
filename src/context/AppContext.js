import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [dice, setDice] = useState({ direction: 0, step: 0, route: '' });
  const [start, setStart] = useState(false);
  const [rowCount, setRowCount] = useState({ henry: null, bottle: null, patch: null });
  const [columnCount, setColumnCount] = useState({ henry: null, bottle: null, patch: null });
  const [prevPlayer, setPrevPlayer] = useState('bottle');
  
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
  };
  
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
