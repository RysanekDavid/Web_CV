import { Box, Grid } from "@mui/material";
import SimpleChart from "../components/Resume/SimpleChart";
import CodeIcon from "@mui/icons-material/Code";
import CardTitle from "../styles/ResumePage/Card/CardTitle";
import ItemStyle from "../styles/ResumePage/Card/ItemStyle";
import CertificationSkills from "../components/Resume/CertificationSkills";
import BasicTimeline from "../components/Resume/Timeline";
import { TimelineCardStyle } from "../styles/ResumePage/Card/ItemStyle";
import { TimelineTitle } from "../styles/ResumePage/Card/CardTitle";
import EducationTimeline from "../components/Resume/EducationTimeline";
//import CustomizedTable from "./TableContent";
import HobbiesAndAdditionalInfo from "../components/Resume/HobbiesInfo";

export default function Resume() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, pt: { xl: 8, lg: 7, md: 7, sm: 7, xs: 7 } }}
      ></Box>
      <Box sx={{ flexGrow: 1, pt: "1rem", pr: "1rem", pl: "1rem", pb: "6rem" }}>
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
              <CertificationSkills></CertificationSkills>
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
            <ItemStyle>
              <TimelineTitle>Hobbies & additional information</TimelineTitle>
              <HobbiesAndAdditionalInfo></HobbiesAndAdditionalInfo>
            </ItemStyle>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
