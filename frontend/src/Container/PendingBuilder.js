import React, { Component } from "react";
import axios from "../axiosproject";

import Spinner from "../components/UI/Spinner/Spinner";

import "./Overall.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
class PendingBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  onAcceptClick = () => {};
  onRejectClick = () => {};
  componentDidMount() {
    let username = "";
    username = localStorage.getItem("username");

    axios
      .get(`/form/pending/${username}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          data: res.data.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let currentUI = <Spinner></Spinner>;
    if (this.state.data.length > 0) {
      currentUI = (
        <TableContainer className="tablecss" component={Paper}>
          <Table className="table " size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Created By</TableCell>
                <TableCell align="right">Department</TableCell>
                <TableCell align="right">Respective user</TableCell>
                <TableCell align="right">Message</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell align="right">{row.department}</TableCell>
                  <TableCell align="right">{row.respectiveUsername}</TableCell>
                  <TableCell align="right">{row.msg}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else if (this.state.data.length == 0 && !this.state.loading) {
      currentUI = <h1>No Data Available</h1>;
    }
    return <React.Fragment>{currentUI}</React.Fragment>;
  }
}

export default PendingBuilder;
