import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-success mx-2"
      onClick={() => props.sort()}
    >
      {props.children}
    </button>
  );
}

export default Button;
