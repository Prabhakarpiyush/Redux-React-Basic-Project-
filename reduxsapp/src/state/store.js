// store.js

import { createStore,applyMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers";
import {thunk} from "redux-thunk";

// Create the Redux store with middleware using configureStore
export const store = createStore(
  reducers, {}, // Make sure to pass the rootReducer here
  applyMiddleware(thunk)
);
