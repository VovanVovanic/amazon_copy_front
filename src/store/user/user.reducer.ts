import { getLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./actions";
import { IInitialState } from "./types";

const initialState: IInitialState = {
  user: getLocalStorage("user"),
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.user = payload.user);
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.user = payload.user);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.user = null);
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.user = payload.user);
      })
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      });
  },
});
