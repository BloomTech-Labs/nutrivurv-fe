import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import BMI from "./bmi-calc/BMI";
import Landing from "../LandingPage/LandingPage";
import DietaryPref from "./dietaryPref";
import GettingPersonal from "./GettingPersonal";
import Active from "./ActivityLevelForm";

const OnBoarding = () => {
  const [user, setUser] = useState({});
  const [step, setStep] = useState("signUp");

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // console.log(user);
  return (
    <>
      {step === "signUp" ? (
        <SignUp
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : step === "GettingPersonal" ? (
        <GettingPersonal
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : step === "ActivityLevel" ? (
        <Active
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : step === "DietaryPref" ? (
        <DietaryPref
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : step === "BMI" ? (
        <BMI setUser={setUser} user={user} handleChange={handleChange} />
      ) : (
        <Landing />
      )}
    </>
  );
};

export default OnBoarding;
