import React, { useState } from "react";
//import Wrapper from "./components/Wrapper";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";
import Table from "../src/components/Table";
import employeesJson from "../src/employee.json";

function App() {
  const [search, setSearch] = useState("");
  let employee;
  if (!search) {
    employee = employeesJson;
  } else {
    employee = employeesJson.filter((employee) => {
      return employee.name.first.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <Header />
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Table employee={employee} />
    </div>
  );
}

export default App;
