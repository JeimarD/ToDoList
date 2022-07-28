import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const ToDoTasks = ({ handleRemove, list, setList }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const editTask = (task) => {
    console.log(task);
    const newUsers = list.map((el) => {
      if (el === task) {
        return "xd";
      }
      return el;
    });
    setList(newUsers);
    setIsEditing(false);
  };

  return (
    <>
      {list.map((el) => (
        <div className="tareas" key={el}>
          <p>{el}</p>
          {isEditing ? (
            <div className="acciones">
              <AiOutlineCheck onClick={() => editTask(el)} />
            </div>
          ) : (
            <div className="acciones">
              <AiOutlineDelete id="eliminar" onClick={() => handleRemove(el)} />
              <AiOutlineEdit id="editar" onClick={() => handleEdit()} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ToDoTasks;
