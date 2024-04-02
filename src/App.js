
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";
import Header from "./component/header/header";



function App() {
    const {tg, onToggleButton} = useT();

    useEffect( () => {
        tg.ready();
    },  [])

  return (
    <div className="App">
        <Header />
    <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
