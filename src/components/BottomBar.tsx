//import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function redirectTo(url: string) {
  window.open(url, "blank");
}

export default function BottomBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 50,
        position: "fixed",
        bottom: { xl: 0, lg: 0, md: 0, sm: 2, xs: 2 },
        borderTop: 3,
        borderColor: "#29962c",
        zIndex: 2,
      }}
    >
      <BottomNavigation sx={{ backgroundColor: "#121212" }} showLabels>
        <BottomNavigationAction
          label="Github"
          sx={{ color: "#FFFFFF" }}
          icon={<GitHubIcon sx={{ color: "#FFFFFF" }} />}
          onClick={() => redirectTo("https://github.com/RysanekDavid")}
        />
        <BottomNavigationAction
          label="LinkedIn"
          sx={{ color: "#FFFFFF" }}
          icon={
            <LinkedInIcon sx={{ color: "#FFFFFF", fontFamily: "Fira Code" }} />
          }
          onClick={() =>
            redirectTo(
              "https://www.linkedin.com/in/david-ry%C5%A1%C3%A1nek-aa088a20a/"
            )
          }
        />
        <BottomNavigationAction
          label="Email me"
          sx={{ color: "#FFFFFF" }}
          icon={<EmailIcon sx={{ color: "#FFFFFF" }} />}
          onClick={() => redirectTo("mailto:rysanek.david.3@gmail.com")}
        />
        <BottomNavigationAction
          label="Phone"
          sx={{ color: "#FFFFFF" }}
          icon={<CallIcon sx={{ color: "#FFFFFF" }} />}
          onClick={() => redirectTo("tel:+420 774 182 331")}
        />
      </BottomNavigation>
    </Box>
  );
}
