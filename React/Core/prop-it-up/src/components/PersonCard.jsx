import React from 'react'

const PersonCard = (props) => {
  const {firstName , lastName , age , hairColor} = props;
  return (
    <div>
    <h1>{firstName },{lastName }</h1>
    <h1>Age {age }</h1>
    <h1>hair colour {hairColor }</h1>
    </div>
  )
}

export default PersonCard