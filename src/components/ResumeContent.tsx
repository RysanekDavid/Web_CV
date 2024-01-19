import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1E1E1E",
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
}));

export default function Resume() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5">Resume</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={6}>
            <Item>
              <h2>Professional Experience</h2>
            </Item>
            <Item sx={{ mt: 2 }}>
              <h2>Education</h2>
            </Item>
            <Item sx={{ mt: 2 }}>
              <h2>Contact Information</h2>
            </Item>
            <Item sx={{ mt: 2 }}>
              <h2>Skills</h2>
            </Item>
            <Item sx={{ mt: 2 }}>
              <h2>Certifications & Languages</h2>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
