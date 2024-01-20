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
  },
});

export const { signinSuccess, signinFailed } = userSlice.actions;

export default userSlice.reducer;
