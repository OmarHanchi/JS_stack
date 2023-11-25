import React from 'react'
import { useState } from 'react';

const PersonCard = (props) => {
  const {lastName,firstName,age,hairColor} = props;
  const [birthday,setBirthday]=useState(age);

  return (
    <div>
    <h1>{props.firstName },{props.lastName }</h1>
    <h1>Age : {birthday} yrs </h1>
    <h1>hair colour : {props.hairColor }</h1>
    <button onClick={()=>setBirthday(birthday + 1)}> birthday button for {props.firstName} {props.lastName}  </button>
    </div>
  )

}

export default PersonCard