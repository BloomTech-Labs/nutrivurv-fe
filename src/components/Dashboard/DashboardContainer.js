import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
// import ProtectedRoute from "../utils/ProtectedRoute";

const DashboardContainer = () => {
  return (
    <div>
      <SideBar />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default DashboardContainer;
