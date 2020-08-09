import React, { Component } from "react";
import Header from "./Header";
import Employee from "./Employee";
//import API from "../utils/API";
import employees from "../employee.json";

class Wrapper extends Component {
  state = {
    employees,
  };

  // componentDidMount() {
  //   this.searchEmployees("15");
  // }

  // searchEmployees = (query) => {
  //   API.search(query)
  //     .then((res) => console.log(res.data.results))
  //     .then((res) => this.setState({ result: res.data.results }))
  //     .catch((err) => console.log(err));
  // };

  // renderEmployee = () => {
  //   if (this.state.result) {
  //     return <Employee email={this.state.result[0].email} />;
  //   }
  //   return <h3>No Results to Display</h3>;
  // };

  render() {
    return (
      <div>
        <Header />
        <button type="button" class="btn btn-success">
          Sort Button
        </button>
        {this.state.employees.map((employee) => (
          <Employee
            name={employee.name.first + " " + employee.name.last}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </div>
    );
  }
}
export default Wrapper;
