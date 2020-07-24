import React, { Component } from "react";
import axios from "../../axiosproject";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    department: "",
    confirmPassword: "",
    errmsg: "",
  };

  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SignUp = (e) => {
    e.preventDefault();
    let msg = "";
    if (this.state.confirmPassword.trim() !== this.state.password.trim()) {
      e.preventDefault();
      msg = "password should be same";
      this.setState({
        errmsg: msg,
      });
    } else {
      const signUpData = {
        username: this.state.username.trim(),
        department: this.state.department.trim().toLowerCase(),
        password: this.state.password.trim(),
      };
      // console.log(signUpData);
      axios
        .post("/user/register", signUpData)
        .then((response) => {
          console.log(response.data);

          localStorage.setItem("authenticate", 1);
          localStorage.setItem("username", this.state.username);
          localStorage.setItem("department", this.state.department);

          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            errmsg: "Username already taken",
          });
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              className="form-control"
              id="username"
              name="username"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="department"
              className="form-control"
              id="department"
              name="department"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              name="password"
              onChange={this.onChangeValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd1">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd1"
              name="confirmPassword"
              onChange={this.onChangeValue}
            />
          </div>

          <button className="btn btn-success" onClick={this.SignUp}>
            Submit
          </button>
        </form>
        <h6 style={{ color: "red" }}>{this.state.errmsg}</h6>
      </React.Fragment>
    );
  }
}

export default Signup;
