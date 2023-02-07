import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { alertsSlice } from "./features/alertsSlice";
import { userSlice } from "./features/userSlice";

const rootReducer = combineReducers({
  alerts: alertsSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
