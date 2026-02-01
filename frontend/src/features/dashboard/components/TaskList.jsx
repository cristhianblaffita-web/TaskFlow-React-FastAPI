import React from "react"
import "../styles/TaskList.css"
import TaskItem from "./TaskItem"

const TaskList = ({taskItems=[]}) => {
  
  return ( 
    <div className="tasklist-container">
      <ul className="tasklist">
        {taskItems.length > 0 ? taskItems.map((task, id) => (
          <TaskItem taskContent={task.content}/>
        )) : <p className="empty-list-msg">Add some tasks here...</p>}
      </ul>
    </div>
  )
}

export default TaskList