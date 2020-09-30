import React from 'react';
import './App.css';

function App() {
  return (
    <div id="todo-app-container">
      <h1>To Do App</h1>
      <div class="add-item">
        <input type="text" placeholder="Type something..."></input>
        <button>ADD</button>
      </div>
      <div class="item">
        <div class="item-list">
          <input type="checkbox"></input>
          <span>lalala</span>
        </div>
        <button>x</button>
      </div>
    </div>
  );
}

export default App;
