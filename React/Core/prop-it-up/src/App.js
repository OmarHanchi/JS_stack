import React from 'react';
import PersonCard from './components/PersonCard' 
import './App.css';

function App() {
  return (
    <div className="App">
      <fieldset>
      <legend> 1st </legend>

      <PersonCard
        PersonCard firstName={"doe"} 
        lastName={"jane"}  
        age={42}  
        hairColor={"brown"}
      />
      </fieldset>
      <fieldset>
      <legend> 2nd </legend>

      <PersonCard
        PersonCard firstName={"omar"} 
        lastName={"hanchi"}  
        age={26}  
        hairColor={"black"}
      />
      </fieldset>

      

      </div>      
  );
}

export default App;
