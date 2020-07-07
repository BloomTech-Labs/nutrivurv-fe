import React from "react";
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
    },
    baseURL: process.env.REACT_APP_NUTRIVURV_API,
  });
};
