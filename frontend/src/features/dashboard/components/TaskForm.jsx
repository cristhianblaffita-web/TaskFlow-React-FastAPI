import React, { useState } from "react"
import "../styles/TaskForm.css"

const TaskForm = (
  {
    createTask
  }) => {
  
  const [taskValue, setTaskValue] = useState(undefined)
  
  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskValue.trim().length > 0){
      createTask(taskValue)
      setTaskValue("")
    }
  }

  return (
    <form 
      className="task-form"
      onSubmit={handleAddTask}
    >
     <div className="form-wraper">
       <fieldset className="task-fieldset">
         <input 
           className="task-field" 
           type="text"
           maxlength={50}
           value={taskValue}
           onChange={(e) => setTaskValue(prev => e.target.value)}
           placeholder="Write a task here..."
          />
       </fieldset>
       <button
        className="add-task-button"
        type="button"
        onClick={handleAddTask}
       >
         Add
         <div className="add-task-icon"></div>
       </button>
     </div> 
    </form>
  )
}

export default TaskForm
