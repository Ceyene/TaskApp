import React, { useState } from "react";

const TaskCreator = (props) => {
  //estado del input para crear nueva tarea
  const [newTaskName, setNewTaskName] = useState("");

  //actualizo el estado del input
  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  //muestro la nueva tarea y limpio el input
  const createNewTask = () => {
    props.createNew(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Escribe la tarea que quieras agregar al listado"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={createNewTask}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default TaskCreator;
