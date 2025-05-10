import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseApi from "../baseApi";
import { removeCookie } from "@/src/shears/utils/cookie";

const initialState = {
  user: null,
};

// Thunk to handle logOut and resetApiState
export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { dispatch }) => {
    // Clear user data and reset API state
    dispatch(logOutAction());
    dispatch(baseApi.util.resetApiState());
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    logOutAction: (state) => {
      state.user = null;
      removeCookie("desiTrackerToken");
    },
  },
});

// Export the actions
export const { setUser, logOutAction } = authSlice.actions;
export default authSlice.reducer;
