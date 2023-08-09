import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../components/02-molecules/customToasts";

/* ==================================================================== */
// GET LOGS
/* ==================================================================== */
export const getLogs = createAsyncThunk(
  "logs/getLogs",
  async (payload, { rejectWithValue }) => {
    try {
      const { period, sortingOption, sortingMethod, page } = payload;
      const { data } = await api.get(
        `/logs??period=${period}&sortingOption=${sortingOption}&sortingMethod=${sortingMethod}&page=${page}`
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

/* ==================================================================== */
// DO CLOCK
/* ==================================================================== */
export const doClock = createAsyncThunk(
  "logs/doClock",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {scheduledDate: "YYYY-MM-DD", type: "in" or "out", time: "hh:mm:ss"}
      const { data } = await api.patch("/logs/clocked-time");

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
