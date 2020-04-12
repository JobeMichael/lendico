import React from "react";
import "./Input.css";

const input = ({ label, name, errors, infoMsg, ...rest }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        name={name}
        autoComplete="off"
        className="input-element"
        {...rest}
      />
      <p>{infoMsg}</p>
    </div>
  </div>
);

export default input;
