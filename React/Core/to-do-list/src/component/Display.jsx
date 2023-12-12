import React from 'react'
// destructuring props
const Display = (props) => {
    const {todolist,deleteButton,handlecompleted}=props;
    return (
        <div>
          {todolist.map((todo, index) => (
            <div key={todo.id} className="mb-3 border p-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className={`mb-0 ${todo.isCompleted ? 'text-decoration-line-through' : ''}`}>
                  {todo.content}
                </p>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`checkbox-${index}`}
                    onChange={() => handlecompleted(todo)}
                    checked={todo.isCompleted}
                  />
                  <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                    Completed
                  </label>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteButton(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Display