import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SimpleChart from "./SimpleChart";
import CodeIcon from "@mui/icons-material/Code";
import {
  ProfesionalExperienceText,
  ProfesionalExperienceTextPadding,
} from "../../styles/ResumePage/ProffesionalExperienceText";
//import pageTittle from "../../styles/ResumePage/PageTittle";
import regularText, { regularTitle } from "../../styles/ResumePage/RegularText";
import CardTitle from "../../styles/ResumePage/Card/CardTitle";
import ItemStyle from "../../styles/ResumePage/Card/ItemStyle";
import UniversityIcon from "../../assets/ResumeIcons/university_icon.svg";
import HighSchoolIcon from "../../assets/ResumeIcons/high_school_icon.svg";
import iconsStyles from "../../styles/ResumePage/Card/IconsStyle";
import BasicTable from "./SkillsTable";
import BasicTimeline from "./Timeline";
import { TimelineCardStyle } from "../../styles/ResumePage/Card/ItemStyle";
import { TimelineTitle } from "../../styles/ResumePage/Card/CardTitle";

export default function Resume() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, pt: { xl: 8, lg: 7, md: 7, sm: 7, xs: 7 } }}
      ></Box>
      <Box sx={{ flexGrow: 1, pt: 3, pr: "1rem", pl: "1rem" }}>
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TimelineCardStyle>
              <TimelineTitle>Professional Experience</TimelineTitle>
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
            </TimelineCardStyle>
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
                    ...regularTitle,
                    pl: "1rem",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  Unicorn University - Software development - Bachelor's degree
                </Typography>
              </Box>
              <Typography
                sx={{
                  ...regularText,
                  pl: "3.5rem",
                  fontStyle: "italic",
                }}
              >
                Focus on robotics and automation systems with the basics of
                programming
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", pt: "2rem" }}>
                <img
                  src={HighSchoolIcon}
                  alt="High school"
                  style={iconsStyles}
                />
                <Typography
                  sx={{
                    ...regularTitle,
                    pl: "1rem",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  TEGA - Electronics and Automatisation
                </Typography>
              </Box>
              <Typography
                sx={{
                  ...regularText,
                  pl: "3.5rem",
                  fontStyle: "italic",
                }}
              >
                Focus on robotics and automation systems with the basics of
                programming
              </Typography>
            </ItemStyle>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle>Certifications & Skills</CardTitle>
              <Typography sx={regularText}>
                React framework - web development. applications International
                Corporate TrainingInternational Corporate Training Released
                October 2023
              </Typography>
              <Typography sx={regularText}>
                Programming in TypeScript GOPAS Computer School Released
                September 2023
              </Typography>

              <BasicTable></BasicTable>
            </ItemStyle>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle sx={{ textAlign: "left" }}>
                <CodeIcon
                  sx={{
                    pr: "0.6rem",
                    verticalAlign: "middle",
                  }}
                />
                Programming languages
              </CardTitle>
              <SimpleChart />
            </ItemStyle>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TimelineCardStyle>
              <TimelineTitle>Hobbies</TimelineTitle>
              <BasicTimeline></BasicTimeline>
            </TimelineCardStyle>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
