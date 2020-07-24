import React, { Component } from "react";
import axios from "../axiosproject";
import Form from "../components/Form/Form";
import Spinner from "../components/UI/Spinner/Spinner";
class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userdata: [],
    };
  }
  componentDidMount() {
    let username = "";
    username = localStorage.getItem("username");
    let department = "";
    department = localStorage.getItem("department");
    this.setState({
      username: username,
    });
    axios
      .get(`/user/getData/${department}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          userdata: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let currentUI = <Spinner></Spinner>;
    if (this.state.userdata.length > 0) {
      currentUI = (
        <Form username={this.state.username} data={this.state.userdata}></Form>
      );
    }
    return <React.Fragment>{currentUI}</React.Fragment>;
  }
}

export default FormBuilder;
