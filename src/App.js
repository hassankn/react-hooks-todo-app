import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'GoLang',
      isCompleted: false
    },
    {
      text: 'Redux',
      isCompleted: false
    },
    {
      text: 'MySQL',
      isCompleted: false
    }
  ]);

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) =>
          <Todo key={index} index={index} todo={todo}>

          </Todo>
        )}
      </div>
    </div>
  )

}

export default App;
