import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterslice"; // Adjust the import path as necessary
import postReducer from "../features/posts/postslice"; // Adjust the import path as necessary

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer, // Ensure you import and add the posts reducer here
  },
});

export default store;
