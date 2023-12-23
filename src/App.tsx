import React, { useState } from 'react';
//import './App.css';

interface Task {
  text: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = (): void => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index: number): void => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleDone = (index: number): void => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <h5 className="card-header">Todo List</h5>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" onClick={addTask}>
                Add
              </button>
            </div>
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  task.done ? 'list-group-item-success' : ''
                }`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  {task.text}
                  <div>
                    <button
                      className={`btn ${
                        task.done ? 'btn-warning' : 'btn-success'
                      } mr-2`}
                      onClick={() => toggleDone(index)}
                    >
                      {task.done ? 'Undo' : 'Done'}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeTask(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
