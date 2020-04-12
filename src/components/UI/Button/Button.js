import React from "react";
import "./Button.css";

const button = ({ disabled, children }) => (
  <button
    data-testid="button-submit"
    type="submit"
    className="button"
    disabled={disabled}
  >
    {children}
  </button>
);

export default button;
