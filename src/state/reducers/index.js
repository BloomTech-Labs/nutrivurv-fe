import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/slices.js";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
