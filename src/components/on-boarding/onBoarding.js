import moment from "moment";
import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Active from "./ActivityLevelForm";
import GettingPersonal from "./GettingPersonal";
import WeightGoals from "./WeightGoals";
import BMI from "./bmi-calc/BMI";
import DietaryPref from "./dietaryPref";
import GettingStarted from "./gettingStarted";
import history from "../../history";

const OnBoarding = ({ step, nextStep, prevStep }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    gender: "",
    goalWeight: "",
    activityLevel: "",
    DietaryPref: "",
    ft: "",
    inch: "",
    weight: "",
    kg: "",
    cm: "",
    weightChangeRate: "",
    dateOfBirth: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  }

  // console.log(user);
  function handleChangeKg(e) {
    setUser({
      ...user,
      [e.target.name]: Math.round(e.target.value * 0.45359237),
    });
  }

  return (
    <>
      {step === 1 ? (
        <GettingStarted nextStep={nextStep} />
      ) : step === 6 ? (
        <SignUp
          user={user}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      ) : step === 2 ? (
        <GettingPersonal
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      ) : step === 3 ? (
        <Active
          user={user}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      ) : step === 5 ? (
        <WeightGoals
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      ) : step === 4 ? (
        <BMI
          nextStep={nextStep}
          setUser={setUser}
          prevStep={prevStep}
          user={user}
          handleChange={handleChange}
        />
      ) : (
        <SignIn history={history} />
      )}
    </>
  );
};

export default OnBoarding;
