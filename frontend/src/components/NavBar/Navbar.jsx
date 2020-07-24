import React from "react";
import "./Navbar.css";
import { browserHistory } from "react-router";
// import { NavLink, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import history from "../../history";
const navbar = (props) => {
  const logout = () => {
    console.log("logout");
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    history.push("/");
  };

  let userUI = (
    <div>
      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 ml-2"
        onClick={props.SignUp}
      >
        Signup
      </button>

      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 mx-2"
        onClick={props.SignIn}
      >
        Login
      </button>
    </div>
  );

  if (props.authenticated) {
    userUI = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/form" exact>
            Form
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/pending" exact>
            Pending
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/approved" exact>
            Approved
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rejected" exact>
            Rejected
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/reqapprove" exact>
            Requested (for Approvel)
          </NavLink>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </a>
        </li>

        <button
          type="button"
          className="btn btn-outline-primary my-2 my-sm-0 mx-2"
          onClick={logout}
        >
          Logout
        </button>
      </ul>
    );
  }
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavLink className="navbar-brand" to="/" exact>
          SWITCHON
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userUI}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
