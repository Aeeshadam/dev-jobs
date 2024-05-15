export const colorStyles = {
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "#19202d",
      color: "#6e8098",
      cursor: "pointer",
      "&:active": {
        ...styles["&:active"],
        backgroundColor: "transparent",
        color: "white",
      },
      "&:hover": {
        ...styles["&:hover"],
        color: "white",
      },
    };
  },
  menuList: (styles) => ({
    ...styles,
    backgroundColor: "#19202d",
    zIndex: 100,
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "#19202d",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#6e8098",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#5964e0",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#5964e0",
    cursor: "pointer",
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
