import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import GamesIcon from "@mui/icons-material/Games";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Grid from "@mui/material/Grid";

const hobbies = [
  { name: "Sport", icon: <SportsMartialArtsIcon /> },
  { name: "Traveling", icon: <LocalAirportIcon /> },
  { name: "Video games", icon: <GamesIcon /> },
  { name: "Movies", icon: <TheatersIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
];

const additionalInfo = [
  { name: "Reliability", icon: <SportsMartialArtsIcon /> },
];

export default function HobbiesAndAdditionalInfo() {
  return (
    <Box
      sx={{
        padding: "16px",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 0 8px 10px rgba(0, 0, 0, 0.74)",
        display: "flex",
        mr: "0.6rem",
        mt: "1.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Hobbies
          </Typography>
          <List>
            {hobbies.map((hobby, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ color: "white" }}>
                  {hobby.icon}
                </ListItemIcon>
                <Typography variant="body1">{hobby.name}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Additional Info
          </Typography>
          <List>
            {additionalInfo.map((info, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ color: "white" }}>{info.icon}</ListItemIcon>
                <Typography variant="body1">{info.name}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
