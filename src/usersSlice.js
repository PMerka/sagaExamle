import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    getUser: (state) => {
      console.log("loading");
      state.isLoading = true;
      state.isError = false;
    },
    setUser: (state, action) => {
      console.log("setData");
      state.isLoading = false;
      state.users = action.payload;
    },
    setError: (state, action) => {
      console.log("error");
      state.isError = true;
    },
  },
});

export const { getUser, setUser, setError } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
