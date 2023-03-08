import GameHeader from "../GameHeader";
import GameBoard from "../GameBoard";
import GameFooter from "../GameFooter";
import {GameContextProvider} from "../../context/GameContext";

const Layout = () => {
  
  return(
    <GameContextProvider>
      <GameHeader/>
      <GameBoard/>
      <GameFooter/>
    </GameContextProvider>
  )
}

export default Layout;
