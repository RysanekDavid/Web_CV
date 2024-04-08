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
import BackHandIcon from "@mui/icons-material/BackHand";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import ForumIcon from "@mui/icons-material/Forum";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const hobbies = [
  { name: "Sport", icon: <SportsMartialArtsIcon /> },
  { name: "Traveling", icon: <LocalAirportIcon /> },
  { name: "Video games", icon: <GamesIcon /> },
  { name: "Movies", icon: <TheatersIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
];

const additionalInfo = [
  { name: "Reliability", icon: <BackHandIcon /> },
  { name: "Diligence", icon: <ThumbUpAltIcon /> },
  { name: "Teamwork", icon: <GroupsIcon /> },
  { name: "Communication", icon: <ForumIcon /> },
  { name: "Time flexible", icon: <AccessTimeIcon /> },
];

export default function HobbiesAndAdditionalInfo() {
  return (
    <Box
      sx={{
        padding: "16px",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 0 6px 12px rgba(20, 20, 20, 1)",
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
