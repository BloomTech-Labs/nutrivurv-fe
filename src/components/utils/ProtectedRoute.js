import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { RootState } from "../../State/reducers";

var jwt_decode = require("jwt-decode");

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const token2 = jwt_decode(localStorage.getItem("token"));
  console.log("token2", token2);
  console.log("token", token);
  return (
    <Route
      {...props}
      render={() => {
        if (token2.userId === token.userId) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" {...props} />;
        }
      }}
    />
  );
};

export default connect(null)(ProtectedRoute);
