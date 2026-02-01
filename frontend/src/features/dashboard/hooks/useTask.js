import { useState } from "react";
//import TaskItem from "../components/TaskItem";

export const useTask = () => {
  const [taskItems, setTasksItems] = useState([]);
  
  const [taskId, setTaskId] = useState(0);
  
  const createTask = (taskContent) => {
    setTaskId(prev => prev + 1);
    
    const task = {
      id: taskId,
      checked: false,
      content: taskContent,
      deleted: false
    };
    
    setTasksItems(prev => [...prev, task]);
    
    return task;
  };
  
  return (
    {
    taskItems,
    createTask
    }
  );
};