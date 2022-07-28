import React, { useRef, useState } from "react";
import ToDoTasks from "./ToDoTasks";

const ToDoContainer = () => {
  const ref = useRef(null);
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tasks.length === 0) return null;
    const newToDoList = [...list, tasks];
    setList(newToDoList);
    ref.current.value = "";
  };

  const handleRemove = (taskName) => {
    setList(list.filter((task) => task !== taskName));
  };

  return (
    <div className="todocontainer">
      <h2>¿Qué haremos hoy?</h2>
      <div className="container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ingrese su tarea..."
          ref={ref}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>
      <ToDoTasks handleRemove={handleRemove} list={list} setList={setList} />
    </div>
  );
};

export default ToDoContainer;
