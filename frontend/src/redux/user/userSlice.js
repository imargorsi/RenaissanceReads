import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
    },
    signinFailed: (state, action) => {
      state.error = action.payload || true;
    },

    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
    },

    updateUserFailed: (state, action) => {
      state.error = action.payload || true;
    },

    signOut: (state) => {
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const {
  signinSuccess,
  signinFailed,
  updateUserSuccess,
  updateUserFailed,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
