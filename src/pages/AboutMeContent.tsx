import { Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BackgroundImg from "../assets/BgAM.jpg";
import AvatarImage from "../assets/A6.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import buttonStyle from "../styles/AboutMePage/ButtonStyle";
import descriptionStyle from "../styles/AboutMePage/DescriptionStyle";
import avatarStyle from "../styles/AboutMePage/AvatarStyle";
import {
  greetStyle,
  professionStyle,
} from "../styles/AboutMePage/GreetAndProfessionStyle";

interface AboutMeProps {
  onScrollToSection: (sectionKey: "resume" | "projects") => void;
}

const professions = ["Developer", "Designer", "Analyst"];

export function AboutMe({ onScrollToSection }: AboutMeProps) {
  const [professionIndex, setProfessionIndex] = useState(0);
  const [growVisible, setGrowVisible] = useState(true);
  const theme = useTheme();
  const isSmallScreenOrDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowVisible(false);
      setTimeout(() => {
        setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setGrowVisible(true);
      }, 500);
    }, 3400);

    return () => clearInterval(interval);
  }, [professionIndex]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        className="BgImg"
        sx={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minWidth: "100vw",
          position: "absolute",
          minHeight: "90vh",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
          pt: 12,
          pb: 4,
        }}
      >
        <Avatar src={AvatarImage} alt="David Ryšánek photo" sx={avatarStyle} />
      </Box>

      <Typography sx={greetStyle} variant="h5">
        Hello I'm David Ryšánek
      </Typography>

      <Grow in={growVisible} timeout={700}>
        <Typography sx={professionStyle} variant="h4">
          {professions[professionIndex]}
        </Typography>
      </Grow>

      <Typography sx={descriptionStyle} variant="h5">
        In over 2 years in the digital field, I've mastered web development and
        graphic design. I create websites that are not only visually appealing
        but also user-focused and functional. My passion for graphic design
        translates into captivating visuals that effectively convey messages.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", lg: "column" },
          alignItems: "center",
          justifyContent: "center",
          mb: { xl: 12, lg: 10, md: 8, sm: 10, xs: 18 },
          zIndex: 2,
        }}
      >
        <Button
          onClick={() => onScrollToSection("resume")}
          sx={{ ...buttonStyle, mr: { lg: 0, xs: 1 } }}
        >
          {isSmallScreenOrDown ? "Resume" : "Show Resume"}
        </Button>
        <Button
          onClick={() => onScrollToSection("projects")}
          sx={{ ...buttonStyle, ml: { lg: 0, xs: 1 } }}
        >
          {isSmallScreenOrDown ? "Projects" : "Show Projects"}
        </Button>
      </Box>
    </Box>
  );
}
