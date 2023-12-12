import React, { useState } from "react";
import Display from "./component/Display";
import Form from "./component/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const [todolist,setTodolist] = useState([]);
  const updateTodolist = (newTodo) => {
    setTodolist ((prevTodo)=>(
      [...prevTodo, newTodo]
    ))
  };
  
  // delete func 
  const deleteButton =(idFromBelow)=>{
const FilteredTodos = todolist.filter((todo)=>{
  return todo.id !== idFromBelow;
});
setTodolist(FilteredTodos);
  };

  // function to handle style change 
  const handlecompleted = (todoFromBelow) => {
    let updateTodos = todolist.map((todo) => {
      if (todo === todoFromBelow) {
        let newTodo = {...todo}
        newTodo.isCompleted = !newTodo.isCompleted;
        return newTodo
      }
      else
      return todo;
    });
    setTodolist(updateTodos);
  };
  return (
    <div >
        <Form updateTodolist={updateTodolist}/>
        <Display todolist={todolist} deleteButton={deleteButton} handlecompleted={handlecompleted}/>
    </div>
  );

};

export default App;
