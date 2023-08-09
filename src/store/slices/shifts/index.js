import { createSlice } from "@reduxjs/toolkit";

// THUNKS
import { addShift, setShift, getShifts } from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  shifts: [],
};

// GLOBAL ERROR HANDLER
const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

/* ==================================================================== */
// SHIFTS SLICE
/* ==================================================================== */
const shiftsSlice = createSlice({
  name: "shifts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    // ADD SHIFT
    builder.addCase(addShift.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addShift.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // SET SHIFT
    builder.addCase(setShift.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(setShift.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET SHIFTS
    builder.addCase(getShifts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getShifts.fulfilled, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        shifts: action.payload?.shifts,
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

export default shiftsSlice.reducer;
