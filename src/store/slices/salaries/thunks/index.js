import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../components/02-molecules/customToasts";

/* ==================================================================== */
// ADD SALARY
/* ==================================================================== */
export const addSalary = createAsyncThunk(
  "salaries/addSalary",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {employeeEmail, salaryPeriod: "YYYY-MM", baseAmount: 0}
      const { data } = await api.post("/salaries", payload);

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
// GET PAYROLL REPORTS
/* ==================================================================== */
export const getPayrollReports = createAsyncThunk(
  "salaries/getPayrollReports",
  async (payload, { rejectWithValue }) => {
    try {
      const { filter, period, sortingOption, sortingMethod, page } = payload;
      const { data } = await api.get(
        `/salaries?filter=${filter}&period=${period}&sortingOption=${sortingOption}&sortingMethod=${sortingMethod}&page=${page}`
      );

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
