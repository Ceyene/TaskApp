import React from "react";

//renderizo tarea individualmente
const TaskRow = (props) => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
  </tr>
);

export default TaskRow;
