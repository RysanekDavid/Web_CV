const buttonStyle = {
  color: "#EAEAEA",
  display: "flex",
  mt: 4,
  border: "3px solid #29962c",
  borderRadius: 6,
  minWidth: {
    xl: "10vw",
    lg: "12vw",
    md: "18vw",
    sm: "20vw",
    xs: "30vw",
  },
  minHeight: {
    xl: "5.5vh",
    lg: "5vh",
    md: "6vh",
    sm: "8vh",
    xs: "8vh",
  },
  zIndex: 0,
  fontSize: {
    xl: "0.8vw",
    lg: 16,
    md: 18,
    sm: "3vh",
    xs: "3.6vw",
  },
  backgroundColor: "rgba(0, 0, 0, 0)",
  fontFamily: "Fira Code",
  "&:hover": {
    backgroundColor: "rgba(46, 42, 40, 0.8)",
  },
};

export default buttonStyle;
