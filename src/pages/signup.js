import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { beginSignup } from "../store/actions/signup";
import { REGISTERING } from "../store/actions/actions";
import { Redirect } from "react-router-dom";
const Signup = props => {
  const [formSubmit, setFromSubmit] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    setFromSubmit(true);
  };
  let buttonSate =
    formSubmit && !props.signup.message
      ? "bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-50 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  return (
    <Fragment>
      <h1 className="text-center font-bold text-5xl text-gray-700 m-3">
        Sign Up
      </h1>
      {props.signup.message && (
        <div className="border rounded bg-red-500 text-white max-w-lg mx-auto p-4 m-2 shadow text-center">
          {props.signup.message}
        </div>
      )}
      <div className="w-full max-w-sm mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-700 font-bold mb-2 mt-2">
              Username
            </label>
            <input
              type="text"
              className="border rounded p-3 w-full focus:shadow-outline"
              onChange={e => setusername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 mt-2">
              Password
            </label>
            <input
              type="password"
              className="border rounded p-3 w-full focus:shadow-outline"
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className={buttonSate}
            onClick={() => {
              props.dispatchBeginSignup();
              props.beginSignUp(username, password);
            }}
            value={
              formSubmit && !props.signup.message ? "Signing Up..." : "Sign up"
            }
            disabled={formSubmit && !props.signup.message ? true : false}
          />
        </form>
      </div>
      {props.signup.user && <Redirect to="/user" />}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    login: state.login,
    signup: state.signup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchBeginSignup: () => dispatch({ type: REGISTERING }),
    beginSignUp: (username, password) =>
      dispatch(beginSignup({ username, password }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
