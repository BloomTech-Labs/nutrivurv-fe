import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OnBoardingImg from "../on-boarding/onBoarding-img";
import NextBttn from "../on-boarding/Buttons/NextBttn";
import BackBttn from "../on-boarding/Buttons/BackBttn";
import { connect } from "react-redux";
import Axios from "axios";
import { data } from "jquery";

const SignUp = ({ nextStep, prevStep, handleChange, user }) => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div>
      <div
        className="d-flex justify mt-5 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
        style={{ height: "950px" }}
      >
        <div className="col-xl-3 pt-5">
          <h1 className="text-center pb-3 font-weight-bolder">Sign Up</h1>
          <h4 className="text-center pb-5">
            You&apos;re one step closer to your goals!
          </h4>
          <form data-toggle="validator" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="mb-0">Your Name</label>
              <input
                name="username"
                className="rounded p-3 w-100 border border-primary"
                placeholder="First and Last Name"
                onChange={handleChange}
                defaultValue={user.username}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /\b[^\d\W]+\b/g,
                    message: "Invalid name entry",
                  },
                })}
              />
              {errors.username && (
                <small id="usernameErr" className="text-danger">
                  {errors.username.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="mb-0">E-mail</label>
              <input
                name="email"
                className="rounded p-3 w-100 border border-primary"
                placeholder="email@email.com"
                onChange={handleChange}
                defaultValue={user.email}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small id="emailErr" className="text-danger">
                  {errors.email.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="mb-0">Password</label>
              <input
                name="password"
                className="rounded p-3 w-100 border border-primary"
                placeholder="8-12 characters"
                onChange={handleChange}
                type="password"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password cannot have more than 12 characters",
                  },
                })}
              />
              {errors.password && (
                <small id="pwordErr" className="text-danger">
                  {errors.password.message}
                </small>
              )}
            </div>

            <div className="form-group mb-5">
              <label className="mb-0">Confirm Password</label>
              <input
                name="password_repeat"
                placeholder="Confirm Password"
                className="rounded p-3 w-100 border border-primary"
                type="password"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <small id="pword2Err" className="text-danger">
                  {errors.password_repeat.message}
                </small>
              )}
            </div>
            <NextBttn handleSubmit={handleSubmit} nextStep={nextStep} />
            <BackBttn prevStep={prevStep} />
          </form>
          <div className="d-flex justify-content-center mt-3 p-2">
            <p className="mr-2"> Already a member? </p>
            <Link to="/signin"> Sign In </Link>
          </div>
        </div>
        <OnBoardingImg />
      </div>
    </div>
  );
};

export default connect(null)(SignUp);
