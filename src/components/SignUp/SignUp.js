import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ReactComponent as GirlComputerImg } from "../../assets/GirlComptr.svg";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../Apollo/Mutations/mutations";

const SignUp = ({ setStep, handleChange }) => {
  let input;
  const [createUser, { data }] = useMutation(CREATE_USER);

  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (info) => {
    alert(JSON.stringify(info));
    console.log(info);
    createUser({
      variables: {
        info: {
          name: info.username,
          email: info.email,
          password: info.password,
        },
      },
    });
    console.log("data", data);
    setStep("GettingPersonal");
  };

  return (
    <div>
      <div className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5">
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
                ref={
                  (register({
                    required: "Required",
                    pattern: {
                      value: /\b[^\d\W]+\b/g,
                      message: "Invalid name entry",
                    },
                  }),
                  (node) => {
                    input = node;
                  })
                }
              />
              {errors.username && errors.username.message}
            </div>

            <div className="form-group">
              <label className="mb-0">E-mail</label>
              <input
                name="email"
                className="rounded p-3 w-100 border border-primary"
                placeholder="email@email.com"
                onChange={handleChange}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.message}
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
              {errors.password && <p>{errors.password.message}</p>}
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
                <p>{errors.password_repeat.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary rounded p-2 w-100 border border-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Let&apos;s Go!
            </button>
          </form>
          <div className="d-flex justify-content-center mt-3 p-2">
            <p className="mr-2"> Already a member? </p>
            <Link to="/signin"> Sign In </Link>
          </div>
        </div>
        <div>
          <GirlComputerImg
            className=" d-none d-xl-block col img-responsive mt-5 pt-5 "
            alt="Responsive Sign Up image"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
