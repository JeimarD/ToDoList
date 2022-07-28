import React, { useState } from "react";

const ToDoContainer = () => {
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addTask = (e) => {
    if (tasks.length === 0) return null;
    const newToDoList = [...list, tasks];
    setList(newToDoList);
  };

  const handleRemove = (taskName) => {
    setList(list.filter((task) => task !== taskName));
  };

  return (
    <div className="todocontainer">
      <h2>¿Qué haremos hoy?</h2>
      <div className="container">
        <input type="text" onChange={handleChange} placeholder="Ingrese su tarea..." />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        {list.map((el, i) => (
          <div className="tareas" key={el}>
            <p>{el}</p>
            <button onClick={() => handleRemove(el)}> X </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoContainer;
