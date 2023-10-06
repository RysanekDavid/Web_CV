import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// import { createTheme } from "@mui/system";

const pages = ["About Me", "Resume", "Projects"];

function ResponsiveTopBar() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#121212",
        borderBottom: 3,
        borderColor: "#29962c",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,

              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              position: "relative",

              justifyContent: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              },
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              centered={true}
              textColor="inherit"
              indicatorColor="primary"
              sx={{
                "& .MuiTabs-indicator": {
                  top: 0,
                  display: "none",
                },
              }}
            >
              {pages.map((page, index) => (
                <Tab
                  key={index}
                  label={page}
                  sx={{
                    backgroundColor:
                      selectedTab === index ? "#121212" : "#1E1E1E",
                    my: 1,
                    mx: 1,
                    whiteSpace: "nowrap",
                    borderTop: selectedTab === index ? 3 : 0,
                    borderLeft: selectedTab === index ? 3 : 0,
                    borderRight: selectedTab === index ? 3 : 0,

                    borderColor: "#29962c",
                    fontSize: {
                      xl: "18px",
                      lg: "18px",
                      md: "16px",
                      sm: "16px",
                      xs: "16px",
                    },
                    fontFamily: "Roboto Slab",
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveTopBar;
