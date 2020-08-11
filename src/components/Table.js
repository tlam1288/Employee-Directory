import React from "react";

function Table({ employee }) {
  return (
    <table className="table" id="employee">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Photo</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((employee) => {
          return (
            <tr key={employee.email}>
              <td>{employee.name.first}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>
                <img src={employee.picture.large} alt={employee.name.first} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
