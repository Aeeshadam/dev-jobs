import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  position: "",
  location: "",
  contract: "",
  website: "",
  description: "",
  requirements: "",
  logo: "",
  role: "",
};

const formSlice = createSlice({
  name: "formStates",
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setFieldValue } = formSlice.actions;

export default formSlice.reducer;
