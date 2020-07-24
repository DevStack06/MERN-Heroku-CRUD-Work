import React, { Component } from "react";
import axios from "../axiosproject";
import ReactTable from "react-table-6";
import Spinner from "../components/UI/Spinner/Spinner";
import "react-table-6/react-table.css";
import "./Overall.css";
class ReqApproveBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      columns: [
        {
          Header: () => <div style={{ textAlign: "left" }}>Created By</div>,
          accessor: "username",
        },
        {
          Header: () => <div style={{ textAlign: "left" }}>Department</div>,

          accessor: "department",
        },
        {
          Header: () => (
            <div style={{ textAlign: "left" }}>Respective User</div>
          ),

          accessor: "respectiveUsername",
        },
        {
          Header: () => <div style={{ textAlign: "left" }}>Message</div>,

          accessor: "msg",
        },
        {
          Header: () => <div style={{ textAlign: "left" }}> Status</div>,
          accessor: "status",
        },
        {
          Header: "Accept/Reject",
          accessor: "name",
          Cell: ({ cell }) => (
            <div className="buttoncss">
              {" "}
              <button class="btn btn-primary" onClick={this.onAcceptClick}>
                Accept
              </button>{" "}
              <button class="btn btn-danger" onClick={this.onRejectClick}>
                Reject
              </button>
            </div>
          ),
        },
      ],
    };
  }
  onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        console.log("A Td Element was clicked!");
        console.log("it produced this event:", e);
        console.log("It was in this column:", column);
        console.log("It was in this row:", rowInfo);
        console.log("It was in this table instance:", instance);
      },
    };
  };
  onAcceptClick = () => {};
  onRejectClick = () => {};
  componentDidMount() {
    let username = "";
    username = localStorage.getItem("username");

    axios
      .get(`/form//penApprovel/${username}`)
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
        <div className="tablecss">
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            getTrProps={this.onRowClick}
            defaultPageSize={5}
          />
        </div>
      );
    } else if (this.state.data.length == 0 && !this.state.loading) {
      currentUI = <h1>No Data Available</h1>;
    }
    return <React.Fragment>{currentUI}</React.Fragment>;
  }
}

export default ReqApproveBuilder;
