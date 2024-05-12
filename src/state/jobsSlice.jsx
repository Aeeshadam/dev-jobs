import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
    },
    fetchJobsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
      console.log("New state after adding job:", state.jobs);
    },
  },
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsError, addJob } =
  jobsSlice.actions;

export default jobsSlice.reducer;
