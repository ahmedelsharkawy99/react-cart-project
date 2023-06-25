import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputClasses = props.clearClass
    ? `${props.className}`
    : `${classes.input} ${props.className ? props.className : ""}`;
  return (
    <div className={inputClasses}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.condition && (
        <p className={classes["error-message"]}>{props.errorMessage}</p>
      )}
    </div>
  );
});

export default Input;
