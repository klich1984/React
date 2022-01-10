import React, { useState, createContext } from 'react'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
  const tasksInitial = [
    { title: 'Task 01', priority: 'Medium', id: 1 },
    { title: 'Task 02', priority: 'Medium', id: 2 },
  ]
  const [tasks, setTasks] = useState(tasksInitial)
  return (
    <TaskContext.Provider>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext
