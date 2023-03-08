import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Enable Dark Mode')
  const [alert,setAlert]=useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    }) 

    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  
  const toggleButton = () => {
    if(mode==="light")
    {
      setMode('dark')
      setModeText("Enable Light Mode")
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
      
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 1500)
      
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1000)
      
    }
    else
    {
      setMode('light')
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title="TextUtils - Dark Mode"
    }
  }
  return (
   
    <> 
      <Router>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils" /> */}
          {/* <Navbar /> */}
         
        <Navbar title="TextUtils" about="About" mode={mode} toggleButton={toggleButton} modeText={modeText} />
        <Alert alert={alert} />
         
           
          <div className="container my-3">
        <Routes>
          <Route element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Minutes Read" mode={mode} showAlert={showAlert} />} path='/' />  
          <Route element={<About mode={mode} />} path='/about' />  
        </Routes>
            </div>
      </Router>
  </>
  );
}

export default App;















































  /* import logo from './logo.svg';
import './App.css';

var name="Harsh Shukla"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi officia nulla cum nisi laboriosam commodi sunt modi maxime, rem reprehenderit aut dolorem nihil ad totam saepe nam sint. In dolor beatae assumenda reprehenderit.</p>
      </div>
    </>
  );
}

export default App; */

