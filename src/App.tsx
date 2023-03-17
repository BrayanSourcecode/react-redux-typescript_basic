import React from 'react';
import TaskForm from './Components/Task/taskForm';
import TaskList from './Components/Task/taskList';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>} />
          <Route path='/create_task' element={<TaskForm/>} />
          <Route path='/edit_task/:id' element={<TaskForm/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
