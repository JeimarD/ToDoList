import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoCompleted = ({ checked, handleRemoveChecked }) => {
  return (
    <>
      {checked.map((el, i) => (
        <div className="tareas" key={el.id}>
          <p>{el.tarea}</p>
          <div className="acciones">
            <AiOutlineDelete
              id="eliminar"
              onClick={() => handleRemoveChecked(el.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDoCompleted;
