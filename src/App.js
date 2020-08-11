import React, { useState } from "react";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";
import Table from "../src/components/Table";
import employeesJson from "../src/employee.json";

function App() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ascending");

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
      <Button sort={() => setOrder("ascending")} children="Sort A-Z" />
      <Button sort={() => setOrder("descending")} children="Sort Z-A" />
      <Table employee={employee} />
    </div>
  );
}

export default App;
