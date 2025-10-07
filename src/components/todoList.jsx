import React, { useState } from "react";
import "./todoList.css";

function TodoList() {
  const [task, setTask] = useState(""); // input field
  const [tasks, setTasks] = useState([]); // list of tasks

  // Add new task
  function addTask() {
    if (task.trim() === "") return; // prevent empty input
    setTasks([...tasks, task]); // add task to array
    setTask(""); // clear input field
  }

  // Delete a task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h1 className="title">To-do List</h1>
      <div className="input-fild">
        <div className="todo-list">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add your Task"
          />
          <button className="btn-read" onClick={addTask}>
            Add +
          </button>
        </div>
      </div>

      {/* Display tasks */}
      <div className="list-Task">
        <ul>
          {tasks.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
