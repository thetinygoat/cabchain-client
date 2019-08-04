import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { beginSignup, addDriver } from "../store/actions/signup";
import { REGISTERING } from "../store/actions/actions";
import { Redirect } from "react-router-dom";
import controller from "../controller";
import web3 from "../web3";
const Signup = props => {
  const [formSubmit, setFromSubmit] = useState(false);
  const [address, setaddress] = useState("");
  const [base_fare, setbase_fare] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    setFromSubmit(true);
  };
  if (props.signup.user) {
    (async () => {
      const accounts = await web3.eth.getAccounts();

      controller.methods
        .registerDriver(accounts[0], props.signup.user.id, 0)
        .send({ from: accounts[0] })
        .then(resp => {
          console.log("inside then");
        })
        .catch(e => {
          console.log(e);
        });
    })();
  }
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
              Address
            </label>
            <input
              type="text"
              value={address}
              className="border rounded p-3 w-full focus:shadow-outline"
              onChange={e => setaddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 mt-2">
              Base fair
            </label>
            <input
              type="text"
              className="border rounded p-3 w-full focus:shadow-outline"
              onChange={e => setbase_fare(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className={buttonSate}
            onClick={() => {
              props.beginRegistration(address, base_fare);
            }}
            value={
              formSubmit && !props.signup.message ? "Signing Up..." : "Sign up"
            }
            disabled={formSubmit && !props.signup.message ? true : false}
          />
        </form>
      </div>
      {props.signup.user && <Redirect to="/driver" />}
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
    beginRegistration: (address, base_fare) =>
      dispatch(addDriver({ address, base_fare }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
