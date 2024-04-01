import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000000",
    color: "white",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    fontWeight: "bold",
    border: 0,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const SeparatorRow = styled(TableRow)(({}) => ({
  height: 80,
  backgroundColor: "#1e1e1e",
  "& > *": {
    // Selekce pro všechny potomky v SeparatorRow, což jsou buňky
    paddingTop: 0,
    paddingBottom: 0,
  },
}));
