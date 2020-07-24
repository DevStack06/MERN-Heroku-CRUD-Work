import React, { Component } from "react";
import HomeBuilder from "./Container/HomeBuilder";
import FormBuilder from "./Container/FormBuilder";
import PendingBuilder from "./Container/PendingBuilder";
import ApproveBuilder from "./Container/ApproveBuilder";
import ReqApproveBuilder from "./Container/ReqApproveBuilder";
import RejectedBuilder from "./Container/RejectedBuilder";
import Layout from "./Hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import history from "./history";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {/* <Route path="/signin" component={UserBuilder} />*/}
            <Route path="/home" exact component={HomeBuilder} />
            <Route path="/form" exact component={FormBuilder} />
            <Route path="/pending" exact component={PendingBuilder} />
            <Route path="/approved" exact component={ApproveBuilder} />
            <Route path="/rejected" exact component={RejectedBuilder} />
            <Route path="/reqapprove" exact component={ReqApproveBuilder} />
            <Route path="/" exact component={HomeBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
