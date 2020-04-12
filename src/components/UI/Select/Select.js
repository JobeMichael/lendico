import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Select.css";

const Select = ({ label, optionsData, name, errors, inputRef }) => {
  const defaultOption = optionsData[0];

  return (
    <div className="field">
      <label className="label">{label} </label>
      <div className="control-select">
        <Dropdown name={name} options={optionsData} value={defaultOption} />
        {errors[name] && <p>{errors[name].message}</p>}
      </div>
    </div>
  );
};

export default Select;
