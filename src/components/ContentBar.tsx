// AboutMe.tsx
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import resumeImage from "../assets/CV - David Ryšánek.jpg";
import AvatarImage from "../assets/avatar1.jpg";

function AboutMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        src={AvatarImage}
        alt="David Ryšánek fotka"
        sx={{ width: 160, height: 160, mb: 2, top: 10 }}
      />
      <Typography sx={{ color: "#FFFFFF" }} variant="h4">
        David Ryšánek
      </Typography>
      <Typography sx={{ color: "#FFFFFF" }} variant="subtitle1">
        Něco o mně...
      </Typography>
    </Box>
  );
}

// Resume.tsx

function Resume() {
  return (
    <Box>
      <Typography sx={{ color: "#FFFFFF" }} variant="h5">
        My CV
      </Typography>
      <img
        src={resumeImage}
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
        // Přidejte další projekty podle potřeby...
      </Grid>
    </Box>
  );
}

export { AboutMe, Resume, Projects };
