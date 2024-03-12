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
//import { Fade } from "react-awesome-reveal";

const professions = ["Developer", "Designer", "Analyst"];

type Props = {
  visible: boolean;
};

export function AboutMe({ visible }: Props) {
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

  if (!visible) {
    return null;
  }

  return (
    <>
      <Box
        className="BgImg"
        sx={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          position: "absolute",
          minHeight: "100%",
          minHeight: {
            xl: "95%",
            lg: "95%",
            md: "95%",
            sm: "95%",
            xs: "95%",
          },
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
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            document
              .getElementById("About_Me")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          sx={buttonStyle}
        >
          {isSmallScreenOrDown ? "Resume" : "Show Resume"}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={(selectedTab) => {
            selectedTab ? "1" : "1";
          }}
          sx={buttonStyle}
        >
          {isSmallScreenOrDown ? "Projects" : "Show Projects"}
        </Button>
      </Box>
    </>
  );
}
