import GameHeader from "../GameHeader";
import GameBoard from "../GameBoard";
import GameFooter from "../GameFooter";
import {useState} from "react";

const Layout = () => {
  const [dice, setDice] = useState({direction: 0, step: 0});
  
  return(
    <>
      <GameHeader dice={dice} setDice={setDice}/>
      <GameBoard dice={dice} setDice={setDice}/>
      <GameFooter/>
    </>
  )
}

export default Layout;
