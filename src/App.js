
import './App.css';
import { useState, useEffect } from 'react';
import { TasksProvider } from './TasksContext';
import AddTask from './AddTask';
import TaskList from './TaskList';


function App() {
  
  return(
    <div className='wrapper' >
      <TasksProvider>
        <h1>Todo list</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  )
}
export default App;
