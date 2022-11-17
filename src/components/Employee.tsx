import { observer } from "mobx-react";
import React, { Component } from "react";
import { Employee } from "../mst";
interface State {}
interface Props {
  employee: Employee;
}
@observer
class EmployeeComponent extends Component<Props, State> {
  render() {
    const { hours_worked, name } = this.props.employee;
    return (
      <>
        <p>{`name: ${name}`}</p>
        <p>{`hours of worked: ${hours_worked}`}</p>
      </>
    );
  }
}

export { EmployeeComponent };
