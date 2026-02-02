import { useState } from "react";

export const useTask = () => {
  const [taskItems, setTasksItems] = useState([]);
  
  const [taskId, setTaskId] = useState(0);
  
  const createTask = (taskContent) => {
    setTaskId(prevId => prevId + 1);
    
    const task = {
      id: taskId,
      checked: false,
      content: taskContent
    };
    
    setTasksItems(prevTasks => [...prevTasks, task]);
  };
  
  const removeTask = (selfId) => {
      setTasksItems(prev => prev.filter((task) => task.id !== selfId) )
  };
  
  return (
    {
    taskItems,
    createTask,
    removeTask
    }
  );
};