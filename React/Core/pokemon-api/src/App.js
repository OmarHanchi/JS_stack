import React,{ useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pokemonNames,setPokemonNames]=useState([]); 
  useEffect(() => {
    // Fetch data
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(Response =>{
      // Extract Pokemon names from response data
      return Response.json()})
      .then(data=>{setPokemonNames(data.results) })
      //catching error
      .catch((err)=>{console.log(err);})},[]); 
 
      return (
        <div className="App">
          <ul className="list-group">
            <h2 className="text-center mb-4">Pokemon Names</h2>
            {pokemonNames.map((pokemonObj, index) => (
              <li key={index} className="list-group-item">
                {pokemonObj.name}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default App;
