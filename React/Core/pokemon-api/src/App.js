import React,{ useState , useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pokemonNames,setPokemonNames]=useState([]); 
      {/*
     useEffect(() => {
    // Fetch data
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(Response =>{
      // Extract Pokemon names from response data
      return Response.json()})
      .then(data=>{setPokemonNames(data.results) })
      //catching error
      .catch((err)=>{console.log(err);})},[]); 
    */}
      useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
          // Assuming the Pokemon names are under the 'results' property
          setPokemonNames(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching Pokemon names:', error);
        });
    }, []);

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
