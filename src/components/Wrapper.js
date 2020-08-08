import React from "react";

function Wrapper() {
  return (
    <div>
      <header>
        <h1>Employee Directory</h1>
      </header>
      <button type="button" class="btn btn-success">
        Sort Button
      </button>
      <body>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Employee Name</h5>
            <p class="card-text">Employee Phone</p>
            <p class="card-text">Employee Job</p>
            <p class="card-text">Employee Email</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Wrapper;
