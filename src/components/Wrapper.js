import React, { Component } from "react";
import Header from "./Header";
import Employee from "./Employee";
import API from "../utils/API";

class Wrapper extends Component {
  state = {
    result: {},
  };

  componentDidMount() {
    this.searchEmployees("15");
  }

  searchEmployees = (query) => {
    API.search(query)
      .then(console.log(query))
      .then((res) => console.log(res.data.results));

    // .catch((err) => console.log(err));
  };

  renderEmployee = () => {
    if (this.state.result.result) {
      return <h3>It Worked</h3>;
    }
    return <h3>No Results to Display</h3>;
  };

  render() {
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
        {this.renderEmployee()}
        <Employee />
      </div>
    );
  }
}
export default Wrapper;
