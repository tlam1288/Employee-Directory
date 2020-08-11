import React, { useState } from "react";
import Button from "../src/components/Button";
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

  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("employee");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];

        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  return (
    <div>
      <Header />

      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button sort={() => sortTable()} children="Sort A-Z" />
      <Table employee={employee} />
    </div>
  );
}

export default App;
