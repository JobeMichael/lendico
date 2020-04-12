import React from "react";
import "./Input.css";

const input = ({ label, name, errors, inputRef, ...rest }) => (
  <div className="field">
    <label className="label">{label} : </label>
    <div className="control">
      <input
        name={name}
        autoComplete="off"
        ref={inputRef}
        className="input-element"
        {...rest}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  </div>
);

export default input;
