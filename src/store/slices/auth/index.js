import { createSlice } from "@reduxjs/toolkit";

// THUNKS
import {
  verifyOtpToken,
  login,
  keepLogin,
  logout,
  activateAccount,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  user: {
    email: "",
    fullName: "",
    dob: "",
    roleId: null,
    positionId: null,
    joinedAt: "",
    updatedAt: "",
  },
};

// GLOBAL ERROR HANDLER
const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

// GLOBAL SUCCESS HANDLER
const isAuthSuccess = (action) => {
  return [login.fulfilled.type, keepLogin.fulfilled.type].includes(action.type);
};

/* ==================================================================== */
// AUTH SLICE
/* ==================================================================== */
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // VERIFY OTP TOKEN
    builder.addCase(verifyOtpToken.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(verifyOtpToken.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // LOGIN
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });

    // KEEP LOGIN
    builder.addCase(keepLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    // ACTIVATE ACCOUNT
    builder.addCase(activateAccount.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(activateAccount.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state = Object.assign(state, INITIAL_STATE);
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });

    // SUCCESS HANDLER
    builder.addMatcher(isAuthSuccess, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        user: action.payload?.user,
      });
    });
  },
});

export default authSlice.reducer;
