import { createSlice } from "@reduxjs/toolkit";

// THUNKS
import { getTodayLog, getLogs, doClock } from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  currentLogStatus: "out",
  logsData: {
    page: null,
    totalPages: null,
    totalLogs: null,
    logsLimit: null,
    logs: [],
  },
  log: {},
};

// GLOBAL ERROR HANDLER
const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

/* ==================================================================== */
// LOGS SLICE
/* ==================================================================== */
const logsSlice = createSlice({
  name: "logs",
  initialState: INITIAL_STATE,

  reducers: {
    setCurrentLogStatus: (state, action) => {
      // payload: string of type of do-clock
      state.currentLogStatus = action.payload;
    },
  },

  extraReducers: (builder) => {
    // GET TODAY'S LOG
    builder.addCase(getTodayLog.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getTodayLog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.log = action.payload;
    });

    // GET LOGS
    builder.addCase(getLogs.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getLogs.fulfilled, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        logsData: action.payload?.data,
      });
    });

    // DO CLOCK
    builder.addCase(doClock.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(doClock.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default logsSlice.reducer;

// export action(s)
export const { setCurrentLogStatus } = logsSlice.actions;
