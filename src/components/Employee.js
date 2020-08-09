import React from "react";

function Employee(props) {
  return (
    <div class="card">
      <div class="card-body">
        <img src={props.image} alt={props.name} />
        <h5 class="card-title">Name: {props.name}</h5>
        <p class="card-text">Phone: {props.phone}</p>
        <p class="card-text">Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Employee;
