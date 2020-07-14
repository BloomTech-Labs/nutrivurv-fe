import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const nutrivurvAPI = process.env.REACT_APP_NUTRIVURV_API;
const edamamAppID = process.env.REACT_APP_EDAMAM_APP_ID;
const edamamAppKey = process.env.REACT_APP_EDAMAM_APP_KEY;

const initialState = {
  user: {
    id: 0,
    name: "",
    email: "",
  },
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isAuthenticating: false,
  authError: null,
  items: [],
  searchError: "",
  isFetching: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.authError = null;
      state.isAuthenticating = true;
      state.isAuthenticated = false;
    },
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.authError = null;
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token");
    },
    authFail: (state, action) => {
      state.authError = action.payload;
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
    callItem: (state, action) => {
      state.isFetching = true;
      state.searchError = "";
    },
    callItemSuccess: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
      state.searchError = "";
    },
    callItemFail: (state, action) => {
      state.searchError = action.payload;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFail,
  logout,
  callItem,
  callItemFail,
  callItemSuccess,
  searchError,
} = AuthSlice.actions;

export const authenticate = (creds, type) => async (dispatch) => {
  dispatch(authStart());

  try {
    const response = await axios.post(
      `${nutrivurvAPI}/api/auth/${type}`,
      creds
    );
    localStorage.setItem("token", response.data.token);
    dispatch(authSuccess(response.data.user));
  } catch (error) {
    dispatch(authFail(error.response.data.message));
  }
};

export const Edamam = (search) => async (dispatch) => {
  dispatch(callItem());
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${edamamAppID}&app_key=${edamamAppKey}&ingr=${search}`
    );
    // const data = await response.json();
    dispatch(callItemSuccess(response.data.hints));
  } catch (error) {
    dispatch(callItemFail(error.response));
  }
};

export default AuthSlice.reducer;
