//


// imports : 

//  import React, { useEffect, useState } from 'react';
//  import axios from 'axios';
//  import 'bootstrap/dist/css/bootstrap.css';
//  import { Container, Button, Form } from 'react-bootstrap';
//  import { useNavigate } from "react-router-dom";
//  import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

//
// installs : 
Create a new React App:
//npx create-react-app my-app
//cd my-app
// npm start
Install Axios (for making HTTP requests from React):
//npm install axios
bootstrap installation :
//npm install bootstrap

router installation :
//npm i react-router-dom 
//npm install react-router-dom@6

Create Express.js Server:
//npm install express 

Install Mongoose:
//npm install mongoose

Install Nodemon (optional, for automatic server restart):
//npm install nodemon


















// axios :
const someComponent = props => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
            {responseData}
        </div>
    )
} 

// fetch : 
<body>
    <div id = "root"></div>
    <script>
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();})
            
        .then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);})

        .catch(err=>{
            console.log(err);
        });
    </script>
</body>



