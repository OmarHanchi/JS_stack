import React from 'react';
import PersonCard from './components/PersonCard' 
import './App.css';

function App() {

  return (
    <div className="App">
      <fieldset >
      <legend>1st</legend>
      <PersonCard firstName={"doe"} lastName={"jane"}  age={42}  hairColor={"brown"}/>
      </fieldset>

      <fieldset >
      <legend>2nd</legend>
      <PersonCard firstName={"hanchi"} lastName={"omar"}  age={26}  hairColor={"black"}/>
      </fieldset>

      <fieldset >
      <legend>3rd</legend>
      <PersonCard firstName={"sasuke"} lastName={"ushiha"}  age={42}  hairColor={"blue"}/>
      </fieldset>

      <fieldset >
      <legend>4th</legend>
      <PersonCard firstName={"naruto "} lastName={"uzumaki"}  age={42}  hairColor={"red"}/>
      </fieldset>

      </div>
      
  );
}

export default App;
