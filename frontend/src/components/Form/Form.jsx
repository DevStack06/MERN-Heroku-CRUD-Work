import React, { Component } from "react";
import "./Form.css";
import axios from "../../axiosproject";

import history from "../../history";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: "Select Department First",
      department: "Select Respective Department",
      respectiveUsername: "",
      msg: "",
    };
  }

  onDepartmentClick = (value) => {
    console.log(value);
    let users = this.props.data.filter((i) => {
      return i.department === value;
    });
    console.log(users);
    console.log("hello");
    this.setState({
      users: users,
      department: value,
      user: "Now Select user",
    });
  };
  onUserClick = (value) => {
    console.log(value);
    this.setState({
      user: value,
    });
  };
  onTextAreaChange = (e) => {
    console.log(e.target.value);
    this.setState({
      msg: e.target.value,
    });
  };

  onSubmit = (e) => {
    const formData = {
      department: this.state.department,
      msg: this.state.msg,
      respectiveUsername: this.state.user,
    };
    axios.post(`/form/Add/${this.props.username}`, formData).then((res) => {
      console.log(res.data);
      history.push("/");
    });
  };

  render() {
    let departmentValue = [
      ...new Set(this.props.data.map((i) => i.department)),
    ];
    let departmentDropdown = departmentValue.map((i) => {
      return (
        <p class="dropdown-item" onClick={() => this.onDepartmentClick(i)}>
          {i}
        </p>
      );
    });

    let userDropdown = this.state.users.map((i) => {
      return (
        <p
          class="dropdown-item"
          onClick={() => this.onUserClick(i.username)}
          href="#"
        >
          {i.username}
        </p>
      );
    });

    return (
      <div className="form">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-info ">Created By</button>
          </div>
          <li class="list-group-item list-group-item">{this.props.username}</li>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-dark dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Departments
            </button>
            <div class="dropdown-menu">{departmentDropdown}</div>
          </div>
          <li class="list-group-item list-group-item">
            {this.state.department}
          </li>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-dark dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Users
            </button>
            <div class="dropdown-menu">{userDropdown}</div>
          </div>
          <li class="list-group-item list-group-item">{this.state.user}</li>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Message</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            rows="3"
            onChange={this.onTextAreaChange}
          ></textarea>
        </div>
        <div className="submit">
          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={this.onSubmit}
          >
            Submit Request
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
