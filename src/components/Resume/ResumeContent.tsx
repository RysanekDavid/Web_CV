import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SkillsChart from "./SkillsChart";
import {
  ProfesionalExperienceText,
  ProfesionalExperienceTextPadding,
} from "../../styles/ResumePage/ProffesionalExperienceText";
import pageTittle from "../../styles/ResumePage/PageTittle";
import regularText from "../../styles/ResumePage/RegularText";
import CardTitle from "../../styles/ResumePage/Card/CardTitle";
import ItemStyle from "../../styles/ResumePage/Card/ItemStyle";
export default function Resume() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={pageTittle}>Resume</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 4 }}>
        <Grid container spacing={6} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <ItemStyle>
              <CardTitle>Professional Experience</CardTitle>
              <Typography sx={ProfesionalExperienceText}>
                Software Developer - Czech Post 2022 - present
              </Typography>
              <Typography sx={regularText}>
                Producing clean, efficient code based on specifications.
                Testing, Deploying and Fixing and improving existing software
                and testing and deploying.
              </Typography>
              <Typography sx={ProfesionalExperienceTextPadding}>
                Freelance developer - 2020 - present
              </Typography>
              <Typography sx={regularText}>
                Writing applications, AI systems, scripts and other things
                related to software engineering based on customer needs and
                requirements.
              </Typography>
              <Typography sx={ProfesionalExperienceTextPadding}>
                Electrotechnician - SDS company - 2021 - 2022
              </Typography>
              <Typography sx={regularText}>
                Smart home wiring, complete review and solution design.
              </Typography>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <ItemStyle>
              <CardTitle>Education</CardTitle>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <ItemStyle>
              <CardTitle>Contact Information</CardTitle>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <ItemStyle>
              <CardTitle>Skills</CardTitle>
              <SkillsChart />
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <ItemStyle>
              <CardTitle>Certifications & Languages</CardTitle>
            </ItemStyle>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
