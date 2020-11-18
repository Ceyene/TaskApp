import React from "react";

//título de la app
//muestra nombre de usuario y tareas por cumplir
const TaskBanner = (props) => (
  <h4 className="bg-primary text-white text-center p-4">
    {props.userName}'s Task App ({props.taskItems.filter((t) => !t.done).length}{" "}
    tareas pendientes)
  </h4>
);

export default TaskBanner;
