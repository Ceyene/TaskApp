import React, { useState } from "react";
import TaskBanner from "./components/TaskBanner";
import TaskRow from "./components/TaskRow";

function App() {
  //guardo quien es el propietario de las tareas y las tareas
  const [userName, setUserName] = useState("Cyn");
  const [taskItems, setTaskItems] = useState([
    { name: "Tarea Uno", done: false },
    { name: "Tarea Dos", done: false },
    { name: "Tarea Tres", done: true },
  ]);

  //modifica el estado de las tareas
  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  //renderiza una fila de la tabla por tarea
  const TaskTableRows = () =>
    taskItems.map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <TaskTableRows />
        </tbody>
      </table>
    </div>
  );
}

export default App;
