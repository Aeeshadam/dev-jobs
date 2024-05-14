export const colorStyles = {
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "#19202d",
      color: "#6e8098",
      cursor: "pointer",
    };
  },
  menuList: (styles) => ({
    ...styles,
    backgroundColor: "#19202d",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "#19202d",
    border: "none",
    cursor: "pointer",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
};

export const optionsContract = [
  {
    label: "Full Time",
    value: "Full Time",
  },
  {
    label: "Part Time",
    value: "Part Time",
  },
  {
    label: "Remote",
    value: "Remote",
  },
  {
    label: "Internship",
    value: "Internship",
  },
];
