import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Playgame from './component/Playgame';
import Startgame from './component/Startgame';
import { Prev } from 'react-bootstrap/esm/PageItem';


function App() {
  const [play, setplay] = useState(false)
  const changeplay=()=>{
    setplay((prev)=>!prev)
  }
  return (
    <>
        
        {/* this is the project 1 shoes project  */}
   <div >
  <Navbar/>
  <Main/>

    </div> 
    </>
  );
}

export default App;
