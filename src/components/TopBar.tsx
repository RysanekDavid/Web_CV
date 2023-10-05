import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip"
// import Typography from "@mui/material/Typography";

const pages = ["About Me", "Resume", "Projects"];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1E1E1E",
        borderBottom: 3,
        borderColor: "#29962c",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
