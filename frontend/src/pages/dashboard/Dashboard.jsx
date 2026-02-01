import React from "react"
import "./Dashboard.css"
import TaskForm from "@/features/dashboard/components/TaskForm"
import TaskList from "@/features/dashboard/components/TaskList"
import TaskItem from "@/features/dashboard/components/TaskItem"
import { useTask } from "@/features/dashboard/hooks/useTask"

const Dashboard = () => {
  
  return (
    <main className="dashboard">
      <TaskForm/>
      <TaskList/>
    </main>  
  )
}

export default Dashboard