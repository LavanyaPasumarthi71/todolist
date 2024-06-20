import React from 'react';

class EmployeeListItem extends React.Component {
  handleClick = () => {
    const { employee, onClick } = this.props;
    onClick(employee);
  };

  render() {
    const { employee } = this.props;
    return (
      <div onClick={this.handleClick} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ddd' }}>
        {employee.name} {employee.position}
      </div>
    );
  }
}

export default EmployeeListItem;
