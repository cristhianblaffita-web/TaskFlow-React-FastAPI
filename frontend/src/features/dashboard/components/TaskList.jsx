import React from "react"
import "../styles/TaskList.css"
import TaskItem from "./TaskItem"

const TaskList = (
  {
    taskItems=[], 
    removeTask, 
    completeTask
  }) => {
  
  return ( 
    <div className="tasklist-container">
      <ul className="tasklist">
        {taskItems.length > 0 ? taskItems.map((task) => (
          <TaskItem 
            key={task.id}
            taskContent={task.content} 
            taskId={task.id}
            removeTask={removeTask}
            completed={task.completed}
            completeTask={completeTask}
          />
        )) : <p className="empty-list-msg">Add some tasks here...</p>}
      </ul>
    </div>
  )
}

export default TaskList