import React, { Component } from "react";

const AuthenticationHandler = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false,
        username: "",
      };
    }

    componentDidMount() {
      let username = "";
      let authenticate = "";

      authenticate = localStorage.getItem("authenticate");
      username = localStorage.getItem("username");

      console.log(authenticate);
      if (!authenticate || authenticate === "") {
        return;
      } else {
        this.setState({
          authenticated: true,
          username: username,
        });
      }
    }

    render() {
      // console.log(this.state.authenticated);
      return (
        <WrappedComponent
          {...this.props}
          authenticated={this.state.authenticated}
          username={this.state.username}
        />
      );
    }
  };
};

export default AuthenticationHandler;
