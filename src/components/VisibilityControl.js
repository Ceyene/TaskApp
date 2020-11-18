import React from "react";

//controla su propio estado
//del cual derivará que se muestre o no la 2da tabla
const VisibilityControl = (props) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Muestra {props.description}</label>
    </div>
  );
};

export default VisibilityControl;
