import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SimpleChart from "./SimpleChart";
import CodeIcon from "@mui/icons-material/Code";
import regularText from "../../styles/ResumePage/RegularText";
import CardTitle from "../../styles/ResumePage/Card/CardTitle";
import ItemStyle from "../../styles/ResumePage/Card/ItemStyle";
import BasicTable from "./SkillsTable";
import BasicTimeline from "./Timeline";
import { TimelineCardStyle } from "../../styles/ResumePage/Card/ItemStyle";
import { TimelineTitle } from "../../styles/ResumePage/Card/CardTitle";
import EducationTimeline from "./EducationTimeline";

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
              <BasicTimeline></BasicTimeline>
            </TimelineCardStyle>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ItemStyle>
              <CardTitle>Education</CardTitle>

              <EducationTimeline></EducationTimeline>
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
            </TimelineCardStyle>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
