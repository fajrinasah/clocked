import { createSlice } from "@reduxjs/toolkit";

// THUNKS
import { addEmployee, getEmployees } from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  employees: [],
};

// GLOBAL ERROR HANDLER
const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

/* ==================================================================== */
// EMPLOYEES SLICE
/* ==================================================================== */
const employeesSlice = createSlice({
  name: "employees",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // ADD EMPLOYEE
    builder.addCase(addEmployee.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET EMPLOYEES
    builder.addCase(getEmployees.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        employees: action.payload?.employees,
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

export default employeesSlice.reducer;
