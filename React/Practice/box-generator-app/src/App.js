import './App.css';
import { useState } from 'react';
import  Form  from './components/Form';
import  Display  from './components/Display';

function App() {
  // lifting state : update in one coponent and we wanna that update to reach the other one
  const [boxes,setBoxes]=useState([])
  // Boxes is a list for each created box 
  const additionBox=(color)=>{
    //creation of the box
    const box = {box_colour:color}
    console.log(box);
    //addition of the box to the new list of boxes 
    setBoxes([...boxes,box])
  }
  
  return (
    <div className="App">
      <Form addbox = {additionBox} />
      <Display boxes={boxes}/>
    </div>
  );
}

export default App;
