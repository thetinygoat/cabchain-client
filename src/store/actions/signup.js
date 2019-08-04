import { REGISTER_ERROR, REGISTERED } from "./actions";
import axios from "../../axios";

const rejectSignup = payload => {
  return {
    type: REGISTER_ERROR,
    payload
  };
};
const acceptSignup = payload => {
  localStorage.setItem("user", JSON.stringify(payload.user));
  return {
    type: REGISTERED,
    payload
  };
};
export const login = payload => {
  return {
    type: "LOGIN",
    payload
  };
};
export const beginSignup = payload => {
  console.log(payload);
  return async dispatch => {
    axios
      .post("/users/new", {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        dispatch(acceptSignup(response.data));
      })
      .catch(e => {
        console.log(e);
        dispatch(rejectSignup(e.response.data));
      });
  };
};

export const addDriver = payload => {
  return async dispatch => {
    axios
      .post("/drivers/new", {
        address: payload.address,
        base_fare: payload.base_fare
      })
      .then(response => {
        dispatch(acceptSignup({ user: response.data }));
      })
      .catch(e => {
        console.log(e);
        dispatch(rejectSignup(e.response.data));
      });
  };
};
