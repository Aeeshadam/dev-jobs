import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  filterByLocation: "",
  // eslint-disable-next-line no-undef
  isSmallScreen: window.innerWidth <= 768,
  modalIsOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilterByLocation: (state, action) => {
      state.filterByLocation = action.payload;
    },
    setIsSmallScreen: (state, action) => {
      state.isSmallScreen = action.payload;
    },
    setModalIsOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setFilterByLocation,
  setIsSmallScreen,
  setModalIsOpen,
} = searchSlice.actions;

export default searchSlice.reducer;
