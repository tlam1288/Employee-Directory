import React from "react";
import Header from "./Header";
import Employee from "./Employee";

function Wrapper() {
  return (
    <div>
      <Header />
      <button type="button" class="btn btn-success">
        Sort Button
      </button>
      <Employee
        name="John"
        phone="8322234232"
        job="finance"
        email="john@email.com"
      />
      <Employee />
      <Employee />
    </div>
  );
}

export default Wrapper;
