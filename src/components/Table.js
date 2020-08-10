import React from "react";

function Table({ employee }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((employee) => {
          return (
            <tr key={employee.email}>
              <td>
                <img src={employee.picture.large} alt={employee.name.first} />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
