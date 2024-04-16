import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ProjectSlider from "../components/ProjectComp/ProjectSlider";

function Projects() {
  return (
    <Box>
      <Typography variant="h5">Moje Projekty</Typography>
      <ProjectSlider />
    </Box>
  );
}

export default Projects;
