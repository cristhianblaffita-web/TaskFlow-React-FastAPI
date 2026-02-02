import React from "react"
import "./Dashboard.css"
import TaskForm from "@/features/dashboard/components/TaskForm"
import TaskList from "@/features/dashboard/components/TaskList"
import TaskItem from "@/features/dashboard/components/TaskItem"
import { useTask } from "@/features/dashboard/hooks/useTask"

const Dashboard = () => {
  
  const { 
    taskItems, 
    createTask, 
    removeTask
  } = useTask()
  
  return (
    <main className="dashboard">
      <TaskForm createTask={createTask} />
      
      <TaskList 
        taskItems={taskItems} 
        removeTask={removeTask}
      />
    </main>  
  )
}

export default Dashboard