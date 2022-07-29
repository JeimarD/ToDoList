import React, { useRef, useState } from "react";
import ToDoTasks from "./ToDoTasks";

const ToDoContainer = () => {
  const ref = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tasks.length === 0) return null;
    const newTask = { tarea: tasks };
    setList([...list, newTask]);
    setTasks("");
    ref.current.value = "";
  };

  const handleRemove = (taskName) => {
    setList(list.filter((task) => task !== taskName));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const editTask = (task) => {
    const updatedTask = list.map((el) => {
      if (task === el.tarea) {
        return {
          ...el,
          tarea: "hola",
        };
      }
      return el;
    });
    setList(updatedTask);
    setIsEditing(false);
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
      <ToDoTasks
        handleRemove={handleRemove}
        list={list}
        handleEdit={handleEdit}
        isEditing={isEditing}
        editTask={editTask}
      />
    </div>
  );
};

export default ToDoContainer;
