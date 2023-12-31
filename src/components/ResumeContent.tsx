import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1E1E1E",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Resume() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{}}>
        <Grid xs={8} sx={{}}>
          <Item>Thick Bracket</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Thin Bracket</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Second Thin</Item>
        </Grid>
        <Grid xs={8}>
          <Item>Second Thick</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Second Thin</Item>
        </Grid>
        <Grid xs={8}>
          <Item>Second Thick</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
