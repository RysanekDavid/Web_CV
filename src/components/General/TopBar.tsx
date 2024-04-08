import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const pages = ["About Me", "Resume", "Projects"];

type Props = {
  selectedTab: number;
  onTabChange: (index: number) => void;
};
function ResponsiveTopBar({ selectedTab, onTabChange }: Props) {
  return (
    <AppBar
      sx={{
        backgroundColor: "#121212",
        borderBottom: 3,
        borderBottomColor: "#29962c",
        borderTopColor: "#000000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: {
                xl: "left",
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={(_, newValue) => onTabChange(newValue)}
              centered={true}
              textColor="inherit"
              sx={{
                "& .MuiTabs-indicator": {
                  minHeight: 6,
                  backgroundColor: "#46b363",
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
                    my: 0.6,
                    mx: { xl: 0.3, lg: 0.3, md: 0.3, sm: 0.3, xs: 0.1 },
                    borderTop: selectedTab === index ? 3 : 0,
                    borderLeft: selectedTab === index ? 1 : 0,
                    borderRight: selectedTab === index ? 1 : 0,
                    display: "flex",
                    borderColor: "#29962c",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    fontFamily: "Roboto Slab",
                    fontSize: {
                      xl: "1vw",
                      lg: "1.5vw",
                      md: "2vw",
                      sm: "2.5vw",
                      xs: "3.6vw",
                    },
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
