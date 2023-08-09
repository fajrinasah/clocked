import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../components/02-molecules/customToasts";

/* ==================================================================== */
// ADD EMPLOYEE
/* ==================================================================== */
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {email, positionId}
      const { data } = await api.post("/employees/new-employee", payload);

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
// GET EMPLOYEES (email & fullName)
/* ==================================================================== */
export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/employees");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
