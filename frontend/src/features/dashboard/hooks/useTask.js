import { useState } from "react";

export const useTask = () => {
  const [taskItems, setTaskItems] = useState([]);
  
  const [taskId, setTaskId] = useState(0);
  
  const createTask = (taskContent) => {
    setTaskId(prevId => prevId + 1);
    
    const task = {
      id: taskId,
      completed: false,
      content: taskContent
    };
    
    setTaskItems(prevTasks => [...prevTasks, task]);
  };
  
  const removeTask = (selfId) => {
      setTaskItems(prev => prev.filter((task) => task.id !== selfId) )
  };
  
  const completeTask = (selfId) => {
    setTaskItems(prev => (prev.map(task => task.id === selfId ? {...task,
    completed: !task.completed} : task)))
  }
  
  return (
    {
    taskItems,
    createTask,
    removeTask,
    completeTask
    }
  );
};