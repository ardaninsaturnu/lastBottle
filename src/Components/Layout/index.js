import GameHeader from "../GameHeader";
import GameBoard from "../GameBoard";
import GameFooter from "../GameFooter";
import {useEffect, useState} from "react";
import {calculateGpgpLocation} from "../../helpers/utility";

const Layout = () => {
  const [dice, setDice] = useState({direction: 0, step: 0, route: ''});
  const [ start, setStart ] = useState( false );
  const gpgp = calculateGpgpLocation();
  const [ rowCount, setRowCount ] = useState({ henry: null, bottle: null });
  const [ columnCount, setColumnCount ] = useState({ henry: null, bottle: null });
  const [ gpgpLocation, setGpgpLocation ] = useState( [] );
  const [ prevPlayer, setPrevPlayer ] = useState( 'bottle' );
  
  useEffect( () => {
    setGpgpLocation( gpgp );
  },[]);
  
  return(
    <>
      <GameHeader
        dice={dice}
        setDice={setDice}
        start={start}/>
      <GameBoard
        setStart={setStart}
        dice={dice}
        setDice={setDice}
        gpgpLocation={ gpgpLocation }
        rowCount={rowCount}
        setRowCount={setRowCount}
        columnCount={columnCount}
        prevPlayer={prevPlayer}
        setPrevPlayer={setPrevPlayer}
        setColumnCount={setColumnCount}/>
      <GameFooter
        setStart={setStart}/>
    </>
  )
}

export default Layout;
