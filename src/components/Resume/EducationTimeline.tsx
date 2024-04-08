import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { ProfesionalExperienceText } from "../../styles/ResumePage/ProffesionalExperienceText";
import TimelineDatetime from "../../styles/ResumePage/Card/TimelineDatetime";
import { Typography } from "@mui/material";
import { TimelineText } from "../../styles/ResumePage/Card/TimelineText";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";

export default function EducationTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: {
            xl: 0.25,
            lg: 0.35,
            md: 0.35,
            sm: 0.4,
            xs: 0.4,
          },
          pl: "0rem",
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={TimelineDatetime}>
          2022 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon sx={{ color: "#1A1B1A" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={ProfesionalExperienceText}>
          Unicorn University
          <Typography sx={TimelineText}>
            Software development - Bachelor's degree
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={TimelineDatetime}>
          2015 - 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <BusinessIcon sx={{ color: "#1A1B1A" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={ProfesionalExperienceText}>
          TEGA
          <Typography sx={TimelineText}>
            Electronics and Automatisation systems
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
