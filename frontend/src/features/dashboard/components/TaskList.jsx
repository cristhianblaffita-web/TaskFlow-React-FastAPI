import React from "react"
import "../styles/TaskList.css"
import TaskItem from "./TaskItem"

const TaskList = ({taskItems=[], removeTask}) => {
  
  return ( 
    <div className="tasklist-container">
      <ul className="tasklist">
        {taskItems.length > 0 ? taskItems.map((task, id) => (
          <TaskItem 
            key={id}
            taskContent={task.content} 
            taskId={task.id}
            removeTask={removeTask}
          />
        )) : <p className="empty-list-msg">Add some tasks here...</p>}
      </ul>
    </div>
  )
}

export default TaskList