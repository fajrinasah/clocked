import { configureStore } from "@reduxjs/toolkit";

// REDUCERS
import authReducer from "./slices/auth";
import employeesReducer from "./slices/employees";
import logsReducer from "./slices/logs";
import salariesReducer from "./slices/salaries";
import shiftsReducer from "./slices/shifts";

// CONFIGURE STORE
const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeesReducer,
    logs: logsReducer,
    salaries: salariesReducer,
    shifts: shiftsReducer,
  },
});

export default store;
