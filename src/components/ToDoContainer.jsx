import React, { useRef, useState } from "react";
import ToDoCompleted from "./ToDoCompleted";
import ToDoTasks from "./ToDoTasks";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const ToDoContainer = () => {
  const ref = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState("");
  const [list, setList] = useLocalStorage("list", []);
  const [checked, setChecked] = useLocalStorage("checked", []);
  const [selectedTask, setSelectedTask] = useState("");
  const [section, setSection] = useState(true);

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tasks.length === 0) return null;
    const newTask = { tarea: tasks, id: uuidv4() };
    setList([...list, newTask]);
    setTasks("");
    ref.current.value = "";
    ref.current.focus();
  };

  const handleRemove = (taskName) => {
    setList(list.filter((task) => task.id !== taskName));
  };

  const handleRemoveChecked = (taskDeleted) => {
    setChecked(checked.filter((el) => el.id !== taskDeleted));
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

  const handleSection = (e) => {
    if (e.target.id === "tareasp") {
      setSection(true);
    } else if (e.target.id === "tareasc") {
      setSection(false);
    }
  };

  const handleCheck = (el) => {
    const newChecked = { tarea: el.tarea, id: uuidv4() };
    setChecked([...checked, newChecked]);
    setList(list.filter((task) => task.id !== el.id));
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
      <div className="toDoOptions">
        {section ? (
          <>
            <button id="tareasp-act" onClick={handleSection}>
              Tareas Pendientes
            </button>
            <button id="tareasc" onClick={handleSection}>
              Tareas Completadas
            </button>
          </>
        ) : (
          <>
            <button id="tareasp" onClick={handleSection}>
              Tareas Pendientes
            </button>
            <button id="tareasc-act" onClick={handleSection}>
              Tareas Completadas
            </button>
          </>
        )}
      </div>
      {section ? (
        <ToDoTasks
          handleRemove={handleRemove}
          list={list}
          handleEdit={handleEdit}
          isEditing={isEditing}
          editTask={editTask}
          handleChange={handleChange}
          selectedTask={selectedTask}
          handleCheck={handleCheck}
        />
      ) : (
        <ToDoCompleted
          checked={checked}
          handleRemoveChecked={handleRemoveChecked}
        />
      )}
    </div>
  );
};

export default ToDoContainer;
