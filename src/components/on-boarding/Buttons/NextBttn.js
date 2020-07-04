import React from "react";
import { connect, useSelector } from "react-redux";
import { login } from "../../../State/Slices/slices";
import Axios from "axios";
import { data } from "jquery";

var jwt_decode = require("jwt-decode");

const NextBttn = ({ handleSubmit, nextStep }) => {
  const onSubmit = async (data) => {
    console.log(data);
    const { username, email, password } = data;
    Axios.post(`https://nutrivurv-be.herokuapp.com/api/auth/register`, {
      name: username,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("error", err));
    nextStep();
  };

  return (
    <>
      <button
        data-cy="submit"
        type="submit"
        className="btn-primary rounded p-2 w-100 border border-primary"
        onClick={handleSubmit(onSubmit)}
      >
        Continue
      </button>
    </>
  );
};

export default connect(null)(NextBttn);
