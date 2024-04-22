const buttonStyle = {
  color: "#EAEAEA",
  marginTop: 4,
  marginBottom: 2, // For spacing between buttons
  border: "3px solid #29962c",
  borderRadius: 6,
  minWidth: { lg: "20%", sm: "30%", xs: "30%" },
  minHeight: "48px",
  zIndex: 1,
  fontSize: { sm: "2.2vh", xs: "3.6vw" }, // Adjust font size for small and extra-small screens
  backgroundColor: "rgba(0, 0, 0, 0)",
  fontFamily: "Fira Code",
  "&:hover": {
    backgroundColor: "rgba(46, 42, 40, 0.8)",
  },
};

export default buttonStyle;
