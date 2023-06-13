
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import List from './Components/List';
import Add from './Components/Add';
import Login from './Components/Login';
 import Signup from './Components/Signup';
import Home from './Components/Home';
import Update from './Components/Update';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/get' element={<Add/>}></Route>
    <Route path="/list" element={<List/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/update/:id" element={<Update/>}></Route>
    </Routes></BrowserRouter>
   
    </div>
    );
  }
  
  export default App;
  