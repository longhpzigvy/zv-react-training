import React from 'react';
import './App.css';
import Task1 from './task1/task1';
import Task2 from './task2/task2';
import Task3 from './task3/task3';

const App = _ => {
  return (
    <div className='App'>
      <Task1 />
      <hr />
      <Task2 />
      <hr />
      <Task3 />
    </div>
  );
}

export default App;
