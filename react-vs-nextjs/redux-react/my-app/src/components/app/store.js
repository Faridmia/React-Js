import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterslice"; // Adjust the import path as necessary

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
