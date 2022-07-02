import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import allReducers from "../src/reducers";

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunkMiddleware],
  preloadedState: {},
});
