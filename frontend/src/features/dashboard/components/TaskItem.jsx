import React, { useState } from "react"
import "../styles/TaskItem.css"

const TaskItem = (
  {
    taskContent,
    taskId,
    removeTask
  }) => {
  
  const [checkState, setCheckState] = useState(false)
  
  const [isRemoved, setIsRemoved] = useState(false)
  
  const handleRemoveTask = () => {
    setIsRemoved(prev => true)
    setTimeout(() => {
      removeTask(taskId)
    }, 300);
  }

  
  return ( 
    <div className={"task-item " + (isRemoved ? "removed-task" : "")}>
        <input
         className="check-task-button"
         type="checkbox"
         value={checkState}
         onChange={(e) => setCheckState(prev => e.target.checked)}
        />
        
        <div className="task-content-container">
          <p className="task-content">{taskContent} Id:{taskId}</p>
        </div>
        
        <button 
          className="remove-task-button"
          type="button"
          onClick={handleRemoveTask}
        >
          <div className="remove-task-icon"></div>
        </button>

    </div>
  )
}

export default TaskItem