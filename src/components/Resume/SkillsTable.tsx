import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const BasicTable = () => {
  const rows = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Eva" },
  ];

  return (
    <Box sx={{}}>
      <TableContainer component={Paper}>
        <Table
          sx={{ backgroundColor: "rgba(19,96,19, 1)" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Jméno</TableCell>
              <TableCell>Jméno</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasicTable;
