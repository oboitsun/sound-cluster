import React from "react";
import "./Button.scss";
export default function Button({ children, type = "filled", onClick = () => {} }) {
  return (
    <button onClick={onClick} className={`button button__${type}`}>
      {children}
    </button>
  );
}
