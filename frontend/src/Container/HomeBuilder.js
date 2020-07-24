import React, { Component } from "react";
import "./Overall.css";
class AppBuilder extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hi this is Balram Rathore. Welcome on SwitchOn Assignment</h1>
        <h3 className="note">
          You need to sign In or Sign Up first to use this Web App
        </h3>
        <div className="info">
          For the testing you can login with the below credential-:
        </div>
        <div className="info">Username: Dev Stack</div>
        <div className="info">Password: 12345</div>
      </div>
    );
  }
}

export default AppBuilder;
