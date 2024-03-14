import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const itemStyle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1E1E1E",
  paddingTop: "0.2rem",
  paddingLeft: "1.5rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  borderRadius: "20px",
  boxShadow: "0px 0px 5px 2px rgba(0, 220, 0, 0.24)",
  fontFamily: "Roboto",
  fontSize: "1.2rem",
  minHeight: "40vh",
}));

export default itemStyle;
