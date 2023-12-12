import React, { useState } from 'react'
const Form = (props) => {
    const [content,setContent]=useState("");
    const {updateTodolist} = (props);
   
    const submitHandler= (e) => {
        e.preventDefault();
        
        updateTodolist ({
            content : content,
            isCompleted : false , 
            id : Math.floor(Math.random()*100000000).toString(),
        });
        setContent("");
    };
       
    return (
     
        <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={submitHandler}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default Form