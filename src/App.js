
import Home from '../src/components/home/home.js';
import {HashRouter, Route, Routes  } from "react-router-dom";


const  App=()=> {
  return(
    <HashRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
    </HashRouter>
     
)
}

export default App;
