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
        sx={{
          width: 250,
          height: 250,
          mb: 2,
          top: 20,
          border: "4px solid #29962c",
        }}
      />
      <Typography
        sx={{
          color: "#FFFFFF",
          justifyContent: "center",
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 2,
          fontFamily: "Fira Code",
          fontSize: "18px",
        }}
        variant="subtitle1"
      >
        In over 2 years in the digital field, I've mastered web development and
        graphic design. I create websites that are not only visually appealing
        but also user-focused and functional. My passion for graphic design
        translates into captivating visuals that effectively convey messages.
      </Typography>
      <Typography
        sx={{
          color: "#29962c",
          paddingTop: 60,
          fontFamily: "Roboto Slab",
          fontSize: "36px",
        }}
        variant="h4"
      >
        About Me
      </Typography>
      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum Voluptatibus
      Dolores Aspernatur Animi Perferendis Iste! Culpa Aut Enim Debitis Optio
      Illum Ipsum Quis Perferendis Dolor Expedita. Similique Necessitatibus
      Inventore Doloremque.
      <Typography
        sx={{
          color: "#29962c",
          paddingTop: 2,
          fontFamily: "Fira Code",
          fontSize: "30px",
        }}
        variant="h4"
      >
        My Name Is David
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
