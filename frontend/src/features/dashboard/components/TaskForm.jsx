import React, { useState } from "react"
import "../styles/TaskForm.css"

const TaskForm = () => {
  
  const [taskValue, setTaskValue] = useState(undefined)
  
  return (
    <form 
      className="task-form"
    >
     <div className="form-wraper">
       <fieldset className="task-fieldset">
         <input 
           className="task-field" 
           type="text"
           value={taskValue}
           onChange={(e) => setTaskValue(prev => e.target.value)}
           placeholder="Write a task here..." 
           required 
          />
       </fieldset>
       <button
        className="add-task-button"
        type="button"
        onClick={undefined}
       >
         Add
       </button>
     </div> 
    </form>
  )
}

export default Taskform
