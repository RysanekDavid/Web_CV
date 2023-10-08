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

type Props = {
  selectedTab: number;
  onTabChange: (index: number) => void;
};

function ResponsiveTopBar({ selectedTab, onTabChange }: Props) {
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
                md: "center",
                lg: "left",
                xl: "left",
              },
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={(event, newValue) => onTabChange(newValue)}
              centered={true}
              textColor="inherit"
              indicatorColor="primary"
              sx={{
                "& .MuiTabs-indicator": {
                  height: 8,
                  backgroundColor: "#46b363",
                },
              }}
            >
              {pages.map((page, index) => (
                <Tab
                  key={index}
                  label={page}
                  sx={{
                    minWidth: { xl: 200, lg: 200, md: 200, sm: 180, xs: 125 },
                    backgroundColor:
                      selectedTab === index ? "#121212" : "#1E1E1E",
                    my: 1,
                    mx: { xl: 0.3, lg: 0.3, md: 0.3, sm: 0.3, xs: 0.2 },
                    whiteSpace: "nowrap",
                    borderTop: selectedTab === index ? 3 : 0,
                    borderLeft: selectedTab === index ? 3 : 0,
                    borderRight: selectedTab === index ? 3 : 0,

                    borderColor: "#29962c",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    fontSize: {
                      xl: "20px",
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
