import React from "react";

function Employee(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.phone}</p>
        <p class="card-text">{props.job}</p>
        <p class="card-text">{props.email}</p>
      </div>
    </div>
  );
}

export default Employee;
