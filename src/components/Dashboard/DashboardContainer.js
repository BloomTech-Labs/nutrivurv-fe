import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import FoodSearch from "./components/FoodSearch/FoodSearch";
// import ProtectedRoute from "../utils/ProtectedRoute";

const DashboardContainer = () => {
  return (
    <div className="wrapper flex-row">
      <SideBar />
      <div className="dashboard mt-4 wrapper flex-column">
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/food-search" render={() => <FoodSearch />} />
      </div>
    </div>
  );
};

export default DashboardContainer;
