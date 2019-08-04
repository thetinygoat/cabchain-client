import React, { Fragment, useEffect } from "react";
import Signup from "./pages/signup";
import { Switch, Route } from "react-router-dom";
import UserPage from "./pages/user";
import DriverSignup from "./pages/driver-register";
import Driver from "./pages/driver";
import Order from "./pages/order";
import { login } from "./store/actions/signup";
import { connect } from "react-redux";
function App(props) {
  useEffect(() => {
    (async () => {
      if (!window.ethereum) {
        alert(
          "metamask extension not found!! please install and create an account"
        );
      }
      await window.ethereum.enable();
    })();
  });
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    props.login(user);
  }
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/user" component={UserPage} />
        <Route path="/driver" exact component={Driver} />
        <Route path="/order" component={Order} />
        <Route path={"/driver/register"} component={DriverSignup} />
      </Switch>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login({ user }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
