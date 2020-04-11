import React from "react";
import { ErrorMessage } from "react-hook-form";
import "./Input.css";

const input = ({ label, name, errors, inputRef, ...rest }) => {
  console.log(errors);
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          name={name}
          autoComplete="off"
          ref={inputRef}
          className="input-element"
          {...rest}
        />
        <ErrorMessage errors={errors} name={name}>
          {({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            );
          }}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default input;
