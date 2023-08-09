import { createSlice } from "@reduxjs/toolkit";

// THUNKS
import { addSalary, getPayrollReports } from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  reportsData: {
    page: null,
    totalPages: null,
    totalReports: null,
    reportsLimit: null,
    reports: [],
  },
};

// GLOBAL ERROR HANDLER
const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

/* ==================================================================== */
// SALARIES SLICE
/* ==================================================================== */
const salariesSlice = createSlice({
  name: "salaries",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    // ADD SALARY
    builder.addCase(addSalary.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addSalary.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET PAYROLL REPORTS
    builder.addCase(getPayrollReports.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getPayrollReports.fulfilled, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        reportsData: action.payload?.data,
      });
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default salariesSlice.reducer;
