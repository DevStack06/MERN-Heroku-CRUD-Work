import React, { Component } from "react";
import axios from "../../axiosproject";
class Login extends Component {
  state = {
    username: "",
    password: "",
    err: "",
  };

  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SignIn = async (e) => {
    e.preventDefault();

    const loginData = {
      username: this.state.username.trim(),
      password: this.state.password.trim(),
    };
    await axios
      .post("/user/login", loginData)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("authenticate", 1);
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("department", res.data.data.department);

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: "Username/Password is incoorect",
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <h6 style={{ color: "red" }}>{this.state.err}</h6>
        <form>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              className="form-control"
              name="username"
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

          <button className="btn btn-success" onClick={this.SignIn}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
