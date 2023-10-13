import { Typography, Card, Grid, CardContent } from "@mui/material";
import Box from "@mui/material/Box";

function Resume() {
  return (
    <Box>
      <Typography sx={{ color: "#FFFFFF" }} variant="h5">
        My CV
      </Typography>
      <img
        src={"resumeImage"}
        alt="Můj životopis"
        style={{ width: "50%", height: "auto", color: "#FFFFFF" }}
      />
    </Box>
  );
}

// Projects.tsx

function Projects() {
  return (
    <Box>
      <Typography variant="h5">Moje Projekty</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Název projektu</Typography>
              <Typography variant="body2">Popis projektu...</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Resume, Projects };
