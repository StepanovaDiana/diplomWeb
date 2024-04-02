
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";
import Header from "./component/header/header";
import {Route, Routes} from "react-router-dom";
import TestList from "./testList/testList";
import Form from "./form/form";
import MeningocalInfection from "./component/meningocalInfection/meningocalInfection";


function App() {
    const {tg} = useT();

    useEffect( () => {
        tg.ready();
    },  [])

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element = {<TestList />}/>
            <Route path={'form'} element = {<Form />}/>
            <Route path={'test1'} element = {<MeningocalInfection />}/>

        </Routes>

    </div>
  );
}

export default App;
