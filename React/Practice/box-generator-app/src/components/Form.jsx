import React, { useState } from 'react'

export 
const Form = (props) => {
    const [color,setColor]=useState('')
    const submitHandler = e =>{
    e.preventDefault()
    console.log(color);
    // lifting state
    props.addbox(color);
    // cleaning up
    setColor("");
    }

    return (
        <fieldset>

    <form onSubmit={submitHandler} >
        <label >Color</label>
        <input type="text" value={colour} onChange={e=>setColor(e.target.value)} />
        <button>Add</button>
    </form>
    </fieldset>

  )
}
export default Form;

