import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SimpleChart from "./SkillsChart";
import {
  ProfesionalExperienceText,
  ProfesionalExperienceTextPadding,
} from "../../styles/ResumePage/ProffesionalExperienceText";
import pageTittle from "../../styles/ResumePage/PageTittle";
import regularText from "../../styles/ResumePage/RegularText";
import CardTitle from "../../styles/ResumePage/Card/CardTitle";
import ItemStyle from "../../styles/ResumePage/Card/ItemStyle";
import UniversityIcon from "../../assets/ResumeIcons/university_icon.svg";
import HighSchoolIcon from "../../assets/ResumeIcons/high_school_icon.svg";
import iconsStyles from "../../styles/ResumePage/Card/IconsStyle";

export default function Resume() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={pageTittle}>Resume</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 3, pr: "1rem", pl: "1rem" }}>
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle>Education</CardTitle>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={UniversityIcon}
                  alt="University"
                  style={iconsStyles}
                />
                <Typography
                  sx={{
                    ...regularText,
                    pl: "1rem",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  Unicorn University - Software development - Bachelor's degree
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pt: "2rem" }}>
                <img
                  src={HighSchoolIcon}
                  alt="High school"
                  style={iconsStyles}
                />
                <Typography
                  sx={{
                    ...regularText,
                    pl: "1rem",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  TEGA - Electronics and Automatisation{" "}
                </Typography>
              </Box>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle>Contact Information</CardTitle>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle>Skills</CardTitle>
              <SimpleChart />
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
