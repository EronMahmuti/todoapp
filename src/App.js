import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={() => setCounter((prevCount) => prevCount - 1)} >-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
