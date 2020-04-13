import React from "react";
import "./Select.css";

const Select = ({ label, optionsData, name, infoMsg, ...rest }) => {
  const defaultOption = optionsData[0];
  let options = optionsData.map(({ value, label }) => {
    return (
      <option key={value} value={value}>
        {label}
      </option>
    );
  });
  return (
    <div className="field">
      <label className="label">{label} </label>
      <div className="control-select">
        <select className="select" name={name} value={defaultOption} {...rest}>
          {options}
        </select>
        <p>{infoMsg}</p>
      </div>
    </div>
  );
};

export default Select;
