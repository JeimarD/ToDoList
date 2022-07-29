import React from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const ToDoTasks = ({
  handleRemove,
  list,
  handleEdit,
  isEditing,
  editTask,
  handleChange,
  selectedTask,
}) => {
  return (
    <>
      {isEditing ? (
        <>
          {list.slice(selectedTask, selectedTask + 1).map((el) => (
            <div className="tareas" key={el.id}>
              <input
                type="text"
                className="editTask"
                onChange={handleChange}
                autoFocus
                placeholder={el.tarea}
              />
              <div className="acciones">
                <AiOutlineCheck
                  id="editar"
                  onClick={() => editTask(el.tarea)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {list.map((el, i) => (
            <div className="tareas" key={el.id}>
              <p>{el.tarea}</p>
              <div className="acciones">
                <AiOutlineDelete
                  id="eliminar"
                  onClick={() => handleRemove(el.tarea)}
                />
                <AiOutlineEdit
                  id="editar"
                  onClick={() => handleEdit(el.tarea, i)}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ToDoTasks;
