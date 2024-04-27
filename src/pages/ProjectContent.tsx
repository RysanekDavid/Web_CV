import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ProjectSlider from "../components/ProjectComp/ProjectSlider";

function Projects() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontFamily: "Roboto",
          fontStyle: "italic",
          background:
            "-webkit-linear-gradient(85deg, #29962c 40%, #5c6d5c 55%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        variant="h3"
      >
        My Projects
      </Typography>
      <ProjectSlider />
    </Box>
  );
}

export default Projects;
