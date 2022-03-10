
import './App.css';
import { useState, useEffect } from 'react';
import { TasksProvider } from './TasksContext';
import AddTask from './AddTask';
import TaskList from './TaskList';


function App() {
  
  return(
    <div>
      <TasksProvider>
        <h1>Today you are going to do</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  )
}
export default App;
