import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      class="btn btn-success mx-2"
      onClick={() => props.sort()}
    >
      {props.children}
    </button>
  );
}

export default Button;
