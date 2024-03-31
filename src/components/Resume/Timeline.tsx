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
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import EngineeringIcon from "@mui/icons-material/Engineering";
//import CodeIcon from "@mui/icons-material/Code";
//import BuildIcon from "@mui/icons-material/Build";

export default function BasicTimeline() {
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
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={TimelineDatetime}>
          2022 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={ProfesionalExperienceText}>
          Software Developer - Czech Post
          <Typography sx={TimelineText}>
            Producing clean, efficient code based on specifications. Testing,
            Deploying and Fixing and improving existing software and testing and
            deploying.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={TimelineDatetime}>
          2020 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon color="primary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={ProfesionalExperienceText}>
          Freelance developer
          <Typography sx={TimelineText}>
            Writing applications, AI systems, scripts and other things related
            to software engineering based on customer needs and requirements.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={TimelineDatetime}>
          2021 - 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <EngineeringIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={ProfesionalExperienceText}>
          Electrotechnician - SDS
          <Typography sx={TimelineText}>
            Smart home wiring, complete review and solution design.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
