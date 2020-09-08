import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [color, setColor] = useState("");
  const [allColors, setAllColors] = useState([]);

  const formSubmit = () => {
    setAllColors([...allColors, color]);
    setColor('');
  }

  return (
    <div className="App">
      <BoxForm color={color} setColor={setColor} formSubmit={formSubmit}/>
      <div style={{padding:'10px'}}>
        {
          allColors.map((col, i) => 
          <BoxDisplay key={i} color={col}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
