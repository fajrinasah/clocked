import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../components/02-molecules/customToasts";

/* ==================================================================== */
// VERIFY OTP TOKEN
/* ==================================================================== */
export const verifyOtpToken = createAsyncThunk(
  "auth/verifyOtpToken",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {uuidWithContext, body: {token: ""}}
      const { data } = await api.post(
        `/auth/verification/${payload?.uuidWithContext}`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// LOGIN
/* ==================================================================== */
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {email, password}
      const { data, headers } = await api.post("/auth/login", payload);

      // get token from headers
      const token = headers?.authorization.split(" ")[1];

      // set token in local storage
      localStorage.setItem("token", token);

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// KEEP LOGIN
/* ==================================================================== */
export const keepLogin = createAsyncThunk(
  "auth/keepLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/keep-login");

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.response.data?.message + ". Please login."
          : error
      );
    }
  }
);

/* ==================================================================== */
// ACTIVATE ACCOUNT
/* ==================================================================== */
export const activateAccount = createAsyncThunk(
  "auth/activateAccount",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {uuidWithContext, body: {fullName, dob, password}}
      const { data } = await api.patch(
        `/auth/activation-data/${payload?.uuidWithContext}`,
        payload?.body
      );

      toastSuccess(data?.message + " Please log in.");

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// LOGOUT
/* ==================================================================== */
export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      // remove token from local storage
      localStorage.removeItem("token");

      toastSuccess("Successfully logged out");

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
