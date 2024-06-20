import React from 'react';
import EmployeeProfile from './EmployeeProfile';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, name: 'John Doe', position: 'Developer', email: 'john.doe@example.com', phone: '123-456-7890', reportsTo: 'Jane Smith' },
        { id: 2, name: 'Jane Smith', position: 'Designer', email: 'jane.smith@example.com', phone: '987-654-3210', reportsTo: 'John Doe' },
        // Add more employees as needed
      ],
      selectedEmployee: null,
    };
  }

  handleEmployeeClick = (employee) => {
    this.setState({ selectedEmployee: employee });
  };

  handleBackClick = () => {
    this.setState({ selectedEmployee: null });
  };

  handleSave = (updatedEmployee) => {
    this.setState(prevState => ({
      employees: prevState.employees.map(employee =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      ),
      selectedEmployee: updatedEmployee,
    }));
  };

  render() {
    const { employees, selectedEmployee } = this.state;

    return (
      <div>
        {selectedEmployee ? (
          <EmployeeProfile employee={selectedEmployee} onBack={this.handleBackClick} onSave={this.handleSave} />
        ) : (
          <div>
            <h2>Employee List</h2>
            {employees.map(employee => (
              <EmployeeListItem
                key={employee.id}
                employee={employee}
                onClick={this.handleEmployeeClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default EmployeeList;
