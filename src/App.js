
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";
import Header from "./component/header/header";
import {Route, Routes} from "react-router-dom";
import TestList from "./testList/testList";
import Form from "./form/form";


function App() {
    const {tg, onToggleButton} = useT();

    useEffect( () => {
        tg.ready();
    },  [])

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element = {<TestList/>}/>
            <Route path={'form'} element = {<Form/>}/>
        </Routes>

    </div>
  );
}

export default App;
