import './App.css';
import About from './components/About';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as 
//   Router, 
//   Routes, 
//   Route ,
//   Link,
// } from "react-router-dom";

//  in function base ocmponents there is no need to import react
function App() {
  // to control all the states of application
  const [mode, setMode] = useState('light'); //wethaer dark mode is enabled or not 
  // alert is an object 
  const [alert, setAlert] = useState(null);
  // type willshow either it is a warning , danger or success alert 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292828'
      showAlert("Dark mode has been enabled", "success")
      // to make user think of doing things to their app like we are putting virus in app
      // setInterval(()=>{
      //   document.title = 'Text-Changer-DarkMode'
      // },2000)

      // setInterval(()=>{
      //   document.title = 'Install this app-nows'
      // },1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text-Changer" aboutText="About us " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />} />
        </Routes> */}
        <Textform showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;

//toggleMOde will   be actually sen tot navbar but it will be here
// exact will match absolute matching for urls like /chnage/home but without it , it may give the partial results 