import React, { useState } from "react"
import "../styles/TaskItem.css"

const TaskItem = () => {
  
  const [checkState, setCheckState] = useState(false)
  
  return ( 
    <div className="task-item">
      <input
       className="check-task-button"
       type="checkbox"
       value={checkState}
       onChange={(e) => setCheckState(prev => e.target.checked)}
      />
      
      <div className="task-content-container">
        <p className="task-content"></p>
      </div>
      
      <button 
        className="remove-task-button"
        type="button"
        onClick={undefined}
      >
        X
      </button>
    </div>
  )
}

export default TaskItem