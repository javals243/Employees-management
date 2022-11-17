// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Root } from "../mst";
import { EmployeeComponent } from "./Employee";
interface Props {
  rootTree?: Root;
}
interface State {
  employeeName: string;
  hours_worked: string;
  searchString: string;
}
@inject("rootTree")
@observer
class EmployerComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      employeeName: "",
      hours_worked: "",
      searchString: "",
    };
  }

  render() {
    const { rootTree } = this.props;
    const changeEmployeeName = (e: any) => {
      const employeeName = e.target.value;
      this.setState({ employeeName });
    };
    const num_employees = rootTree?.Employer.num_employees;
    const filterEmployees = rootTree?.Employer.filtered_employees(
      this.state.searchString
    );
    const changeHoursWorked = (e: any) => {
      const hours_worked = e.target.value;
      this.setState({ hours_worked });
    };
    const searchStringChange = (e: any) => {
      const searchString = e.target.value;
      this.setState({ searchString });
    };
    const onSubmit = (e: any) => {
      e.preventDefault();
      const { employeeName, hours_worked } = this.state;
      const { rootTree } = this.props;
      if (!rootTree) return null;
      rootTree.Employer.newEmployee(employeeName, parseInt(hours_worked));
      this.setState({ employeeName: "", hours_worked: "" });
    };
    return (
      <div>
        <p>{rootTree?.Employer.name}</p>
        <p>{rootTree?.Employer.location}</p>
        <p>{`number of employees: ${num_employees}`}</p>
        <hr />
        <h1>New Employee</h1>
        <form onSubmit={onSubmit}>
          <p>Name</p>
          <input
            onChange={changeEmployeeName}
            value={this.state.employeeName}
            type=""
            placeholder="enter your name"
          />
          <p>Hours Worked</p>
          <input
            value={this.state.hours_worked}
            onChange={changeHoursWorked}
            type=""
            placeholder="enter your hours worked"
          />
          <button type="submit" name="Ajouter" value="Add new Employee">
            Submit{" "}
          </button>
        </form>
        <hr />
        <input
          placeholder="Enter your word to search"
          value={this.state.searchString}
          onChange={searchStringChange}
        />
        {filterEmployees?.map((employee) => (
          <EmployeeComponent employee={employee} key={employee.id} />
        ))}
      </div>
    );
  }
}

export { EmployerComponent };
