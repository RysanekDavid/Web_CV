import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SkillsChart from "./SkillsChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1E1E1E",
  color: theme.palette.text.secondary,
  paddingTop: "0.5rem",
  paddingLeft: "2rem",
  borderRadius: "28px",
  boxShadow:
    "0px 12px 16px 0 rgba(0, 220, 0, 0.12), 0 8px 2px 0 rgba(0, 180, 0, 0.08)",
  fontFamily: "Roboto",
  fontSize: "1.2rem",
  height: "40vh",
}));

const Title = styled("h2")({
  fontSize: "2rem",
  textShadow: "0px 1px 3px rgba(255, 255, 255, 0.16)",
  color: "rgba(17, 86, 25, 1)",
  fontFamily: "Roboto",
});

export default function Resume() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.71)",
            textShadow: "0px 1px 10px rgba(255, 255, 255, 0.6)",
            fontWeight: "bold",
            fontFamily: "Roboto",
            fontStyle: "oblique",
            borderBottom: 4,
            borderRadius: "4px",
            display: "flex",
            pt: 7,
            borderColor: "rgba(255, 255, 255, 0.6)",
          }}
          variant="h5"
        >
          Resume
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 4 }}>
        <Grid container spacing={8} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Item>
              <Title>Professional Experience</Title>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Item>
              <Title>Education</Title>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Item>
              <Title>Contact Information</Title>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Item>
              <Title>Skills</Title>
              <SkillsChart />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Item>
              <Title>Certifications & Languages</Title>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
