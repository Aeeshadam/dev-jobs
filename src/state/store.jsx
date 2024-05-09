import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import addJobReducer from "./addJobSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    addJob: addJobReducer,
  },
});

export default store;
