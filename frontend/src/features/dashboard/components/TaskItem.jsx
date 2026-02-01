import React, { useState } from "react"
import "../styles/TaskItem.css"

const TaskItem = (
  {
    taskContent
  }) => {
  
  const [checkState, setCheckState] = useState(false)
  
  return ( 
    <div className="task-item">
      <div className="task-body">
        <input
         className="check-task-button"
         type="checkbox"
         value={checkState}
         onChange={(e) => setCheckState(prev => e.target.checked)}
        />
        
        <div className="task-content-container">
          <p className="task-content">{taskContent}</p>
        </div>
        
        <button 
          className="remove-task-button"
          type="button"
          onClick={undefined}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default TaskItem