import React, {useState} from 'react';
import './App.css';
import AddBox from './components/AddBox'
import DisplayBox from './components/DisplayBox';

function App() {

  const [currentColors, setCurrentColor] = useState([]);

  const changeColor = (newColor) => {
    setCurrentColor([...currentColors, newColor])
  }

  return (
    <div className="App">
    <AddBox onNewBox = {changeColor} />
    <DisplayBox box= {currentColors} />
    </div>
  );
}

export default App;
