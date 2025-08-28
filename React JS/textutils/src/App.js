import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtil - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
      document.title = "TextUtil - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar/> */}

      {/*This title is props or properties for Navbar component to which we
       will use in Navbar component as a parameter in function. */}
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode} />
        <Alerts alert = {alert}/>
        <div className="container my-3">
            <Routes>
              <Route exact path='/about' element = {<About mode = {mode}/>}>
              </Route>
              <Route exact path='/' element = {<TextForms heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>}>
              </Route>
            </Routes>
        </div>
      </Router>
        {/* <About/> */}

    </>
  );
}

export default App;
