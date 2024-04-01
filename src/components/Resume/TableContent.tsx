import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  SeparatorRow,
} from "../../styles/ResumePage/Card/TableStyle";
import Chip from "@mui/material/Chip";

/*import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
*/
const data = [
  {
    category: "Tools",
    items: [
      "JIRA",
      "Trello",
      "Git",
      "VS Code",
      "Photoshop",
      "Illustrator",
      "Axure",
      "PowerApps",
    ],
  },
  {
    category: "Certifications",
    items: [
      "React Framework Development",
      "TypeScript Programming",
      "REST API Development",
    ],
  },
];
// Další certifikace...

export default function CustomizedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 380 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Items</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((section, index) => (
            <>
              {index === 1 && (
                <SeparatorRow>
                  <StyledTableCell colSpan={2} />
                </SeparatorRow>
              )}
              <StyledTableRow key={section.category}>
                <StyledTableCell>{section.category}</StyledTableCell>
                <StyledTableCell>
                  {section.items.map((item, itemIndex) => (
                    <Chip
                      label={item}
                      key={itemIndex}
                      variant="outlined"
                      sx={{
                        bgcolor:
                          section.category === "Certifications"
                            ? "rgba(255,223,1, 1)"
                            : "rgba(3, 120, 3, 1)", // nebo jakoukoliv jinou barvu z theme
                        color: "black",
                        margin: "1px",
                        borderColor: "#1e1e1e",
                      }}
                    />
                  ))}
                </StyledTableCell>
              </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
