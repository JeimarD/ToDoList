import React, { useRef, useState } from "react";
import ToDoTasks from "./ToDoTasks";
import { v4 as uuidv4 } from "uuid";

const ToDoContainer = () => {
  const ref = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tasks.length === 0) return null;
    let num = 0;
    const newTask = { tarea: tasks, id: uuidv4() };
    setList([...list, newTask]);
    setTasks("");
    ref.current.value = "";
    ref.current.focus();
  };

  const handleRemove = (taskName) => {
    setList(list.filter((task) => task.tarea !== taskName));
  };

  const handleEdit = (el, i) => {
    setIsEditing(true);
    setSelectedTask(i);
  };

  const editTask = (task) => {
    const updatedTask = list.map((el) => {
      if (task === el.tarea) {
        return {
          ...el,
          tarea: tasks,
        };
      }
      return el;
    });
    setList(updatedTask);
    setIsEditing(false);
    setTasks("");
  };

  return (
    <div className="todocontainer">
      <h2>¿Qué haremos hoy?</h2>
      <div className="container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ingrese su tarea..."
          autoFocus
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
        handleChange={handleChange}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default ToDoContainer;
