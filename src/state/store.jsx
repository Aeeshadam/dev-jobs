import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import formReducer from "./formSlice";
import jobsReducer from "./jobsSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    addJob: formReducer,
    jobs: jobsReducer,
  },
});

export default store;
