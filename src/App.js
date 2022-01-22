
import Home from '../src/components/home/home.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js';

import {HashRouter, Route, Routes  } from "react-router-dom";


const  App=()=> {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </HashRouter>
     
)
}

export default App;
