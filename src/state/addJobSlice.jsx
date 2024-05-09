import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  position: "",
  location: "",
  contract: "",
  link: "",
  description: "",
  requirements: "",
};

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setLink: (state, action) => {
      state.link = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setRequirements: (state, action) => {
      state.requirements = action.payload;
    },
  },
});

export const {
  setCompany,
  setPosition,
  setLocation,
  setContract,
  setLink,
  setDescription,
  setRequirements,
} = addJobSlice.actions;

export default addJobSlice.reducer;
