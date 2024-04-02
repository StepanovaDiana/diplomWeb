
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";



function App() {
    const {tg, onToggleButton} = useT();

    useEffect( () => {
        tg.ready();
    },  [])

  return (
    <div className="App">
    <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
