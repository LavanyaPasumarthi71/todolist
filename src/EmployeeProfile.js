import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './EmployeeProfile.css'; // Import the CSS file for styling

class EmployeeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedPosition: props.employee.position,
      editedEmail: props.employee.email,
    };
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleSaveClick = () => {
    const { editedPosition, editedEmail } = this.state;
    const { employee, onSave } = this.props;
    const updatedEmployee = {
      ...employee,
      position: editedPosition,
      email: editedEmail,
    };
    onSave(updatedEmployee);
    this.setState({ isEditing: false });
  };

  handleCancelClick = () => {
    const { employee } = this.props;
    this.setState({
      isEditing: false,
      editedPosition: employee.position,
      editedEmail: employee.email,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { employee, onBack } = this.props;
    const { isEditing, editedPosition, editedEmail } = this.state;

    return (
      <div className="profile-card">
        <button className="back-button" onClick={onBack}>Back to List</button>
        <div className="profile-header">
          <img src={`https://robohash.org/${employee.id}?set=set5`} alt="Profile" className="profile-image" />
          <h2>{employee.name}</h2>
          <p>Reports to: {employee.reportsTo}</p>
        </div>
        <Tabs defaultActiveKey="overview" id="employee-profile-tabs">
          <Tab eventKey="overview" title="Overview">
            <div className="tab-content">
              <h3>Overview</h3>
              {isEditing ? (
                <div>
                  <label>
                    Position:
                    <input
                      type="text"
                      name="editedPosition"
                      value={editedPosition}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              ) : (
                <p>Position: {employee.position}</p>
              )}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <div className="tab-content">
              <h3>Contact</h3>
              {isEditing ? (
                <div>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="editedEmail"
                      value={editedEmail}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              ) : (
                <p>Email: {employee.email}</p>
              )}
            </div>
          </Tab>
          <Tab eventKey="organization" title="Organization">
            <div className="tab-content">
              <h3>Organization</h3>
              {/* Add organization details as needed */}
            </div>
          </Tab>
        </Tabs>
        {isEditing ? (
          <div>
            <button className="save-button" onClick={this.handleSaveClick}>Save</button>
            <button className="cancel-button" onClick={this.handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <button className="edit-button" onClick={this.handleEditClick}>Edit</button>
        )}
      </div>
    );
  }
}

export default EmployeeProfile;
