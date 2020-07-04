import axios from "axios";

const { createSlice, combineReducers } = require("@reduxjs/toolkit");

const SignUpSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
      password: "",
    },
    token: {},
    isFetchingLogin: false,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        token: action.payload,
        isFetchingLogin: true,
      };
    },
  },
});

export const { login } = SignUpSlice.actions;

export default SignUpSlice.reducer;
