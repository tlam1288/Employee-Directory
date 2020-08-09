import React from "react";

function Button(props) {
  return (
    <button type="button" class="btn btn-success" order={props.order}>
      Sort Button
    </button>
  );
}

export default Button;
