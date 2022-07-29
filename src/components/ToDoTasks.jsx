import React from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const ToDoTasks = ({ handleRemove, list, handleEdit, isEditing, editTask }) => {
  return (
    <>
      {list.map((el) => (
        <div className="tareas" key={el.tarea}>
          <p>{el.tarea}</p>
          {isEditing ? (
            <div className="acciones">
              <AiOutlineCheck id="editar" onClick={() => editTask(el.tarea)} />
            </div>
          ) : (
            <div className="acciones">
              <AiOutlineDelete id="eliminar" onClick={() => handleRemove(el.tarea)} />
              <AiOutlineEdit id="editar" onClick={() => handleEdit()} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ToDoTasks;
