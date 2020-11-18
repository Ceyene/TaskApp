import React, { useState } from "react";
import TaskBanner from "./components/TaskBanner";
import TaskCreator from "./components/TaskCreator";
import TaskRow from "./components/TaskRow";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  //guardo en un estado quien es el propietario de las tareas
  // eslint-disable-next-line
  const [userName, setUserName] = useState("Cyn");
  //guardo en otro estado las tareas
  const [taskItems, setTaskItems] = useState([
    { name: "Tarea Uno", done: false },
    { name: "Tarea Dos", done: false },
    { name: "Tarea Tres", done: true },
  ]);
  //guardo en otro estado la clasificación de tareas
  //para utilizarla en otra tabla con las tareas cumplidas
  const [showCompleted, setShowCompleted] = useState(true);

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

  //crear nueva tarea
  const createNew = (taskName) => {
    //compruebo que la tarea no sea una ya existente
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <div className="container-fluid text-center">
        <TaskCreator createNew={createNew} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>{TaskTableRows()}</tbody>
        </table>
        <div className="bg-secondary-text-white text-center p-2">
          <VisibilityControl
            description="tareas cumplidas"
            isChecked={showCompleted}
            callback={(checked) => setShowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Realizada</th>
              </tr>
            </thead>
            <tbody>{TaskTableRows()}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
