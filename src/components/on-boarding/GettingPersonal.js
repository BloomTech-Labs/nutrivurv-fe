import "react-datepicker/dist/react-datepicker.css";

import { addDays } from "date-fns";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import OnBoardingImg from "../on-boarding/onBoarding-img";
import BackBttn from "./Buttons/BackBttn";
import NextBttn from "./Buttons/NextBttn";

const GettingPersonal = ({ nextStep, prevStep, handleChange, user }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-5">
        <h1 className="text-center pb-5 font-weight-bolder mt-5">
          Getting Personal
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group d-block">
            <div>
              <label className="mb-0">What's your date of birth?</label>
            </div>
            <div>
              <input
                type="date"
                className="py-3 px-2 w-100 rounded border border-primary"
                name="dateOfBirth"
                defaultValue={user.dateOfBirth}
                onChange={handleChange}
                ref={register({
                  required: {
                    value: true,
                    message: "required",
                  },
                })}
              />
              {errors.dateOfBirth && (
                <small className="text-danger form-text">
                  {errors.dateOfBirth.message}
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="mb-0">How do you identify?</label>
            <select
              className="py-3 px-2 w-100 rounded border border-primary"
              id="gender"
              name="gender"
              onChange={handleChange}
              defaultValue={user.gender}
              ref={register({
                required: {
                  value: true,
                  message: "required",
                },
              })}
            >
              <option disabled value="">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            {errors.gender && (
              <small className="text-danger form-text">
                {errors.gender.message}
              </small>
            )}
          </div>
          <NextBttn handleSubmit={handleSubmit} nextStep={nextStep} />
          <BackBttn prevStep={prevStep} />
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default GettingPersonal;
