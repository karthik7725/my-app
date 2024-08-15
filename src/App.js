import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import { BrowserRouter as Router,
     Routes,
      Route,
      
 } from 'react-router-dom';







function App() {

  const [alert,setAlert] = useState(null);
   
  const alertcalling = (msg)=>{
      setAlert(msg);
      setTimeout(() => {
        setAlert(null)
      }, 1000);
  };

  return (
   
  <>

  <Router basename="/my-app">
    
 <Navbar title ="TextAnalyzer" aboutText = "about" />
    
   <strong> {alert&&<Alert alert={alert}/>} </strong>
        <div className="container my-3 mx-3">
      <Routes>
        <Route path='/' element = {<TextForm heading = "Enter the text below " />} exact/>
        <Route path='/about' element = {<About alertcaller = {alertcalling}/>} exact/>        
        </Routes>
  </div>
        </Router>
        </>
      

  );
}

export default App;
