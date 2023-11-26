import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const RegistrationForm = (props) => {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  
  const handleSubmit= (event) => {
    event.preventDefault()
    const newUser = {firstName,lastName,email,password,confirmPassword}
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log("Welcome", newUser);

  };

  return (
    <div className="container">
    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" >
        <Form.Label>First Name : </Form.Label>
        <Form.Control type="text"  placeholder="Enter your first name"  value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label> Last Name : </Form.Label>
        <Form.Control type="text" placeholder="Enter last  name" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address :</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" placeholder="Enter a Password" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Confirm Your Password : </Form.Label>
        <Form.Control type="password" placeholder="Enter Password again " />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    <div>
      <h1>your form data </h1>
    <p>first Name : {firstName}</p>
    <p>last Name : {lastName}</p>
    <p>Email : {email}</p>
    <p>password : {password}</p>
    <p>confirmed Password : {confirmPassword}</p>

    
    </div>
    </div>

  );
}

export default RegistrationForm;