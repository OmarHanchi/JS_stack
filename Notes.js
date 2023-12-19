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



//HTTP Methods:
If you are not already familiar with HTTP request methods, here's a brief run-down:
// GET is used for passing insensitive information
// POST is used for passing sensitive information.
// PUT is used for passing updating whole sensitive information.
// PATCH is used for passing updating pieces of sensitive information.
// DELETE is used for passing deleting sensitive information.


//
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



------------GET Data
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});

------------POST Data
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data.


-------------get form data:
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});



-------------Route Parameters--------------

--------------Getting Data from a URL

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        console.log(req.params.id);
        // assuming this id is the index of the users array we could return one user this way
        res.json( users[req.params.id] );
    });



---------------------Update Data
------updating data using a put request:

app.patch("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});



-------------------Deleting Data
-------deleting data using a delete request.
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});

