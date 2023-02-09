import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { userSlice } from "./features/userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
