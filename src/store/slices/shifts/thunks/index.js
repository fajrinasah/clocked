import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../components/02-molecules/customToasts";

/* ==================================================================== */
// ADD SHIFT
/* ==================================================================== */
export const addShift = createAsyncThunk(
  "shifts/addShift",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {name, fromTime: "hh:mm:ss", toTime: "hh:mm:ss"}
      const { data } = await api.post("/shifts/new-shift", payload);

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
// SET SHIFT
/* ==================================================================== */
export const setShift = createAsyncThunk(
  "shifts/setShift",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {employeeEmail, scheduledDate: "YYYY-MM-DD", shiftId, salaryDeduction}
      const { data } = await api.post("/shifts/new-schedule", payload);

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
// GET SHIFTS
/* ==================================================================== */
export const getShifts = createAsyncThunk(
  "shifts/getShifts",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/shifts");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
