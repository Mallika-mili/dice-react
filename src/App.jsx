import { useState} from "react";
import Startgame from "./components/Startgame";
import GamePlay from "./components/GamePlay";




function App() {

  const [IsGamestarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  
  return  <> {IsGamestarted ? <GamePlay /> : <Startgame  toggle = {toggleGamePlay}/>} </>
    
};

export default App;




