import { Typography, Avatar } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BackgroundImg from "../assets/BgAM.jpg";
import AvatarImage from "../assets/A6.jpg";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//import { Fade } from "react-awesome-reveal";

export function AboutMe() {
  const [currentProfession, setCurrentProfession] = useState("Developer");
  const professions = useMemo(() => ["Developer", "Designer", "Analyst"], []);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [growVisible, setGrowVisible] = useState(true);
  const theme = useTheme();

  const isSmallScreenOrDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowVisible(false);
      setTimeout(() => {
        setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setCurrentProfession(professions[professionIndex]);
        setGrowVisible(true);
      }, 500);
    }, 3400);

    return () => clearInterval(interval);
  }, [professionIndex, professions]);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "1%",
        zIndex: 1,
        width: "98%",
        height: "86%",
      }}
    >
      <Box
        className="BgImg"
        sx={{
          backgroundImage: `url(${BackgroundImg})`,
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          zIndex: 0,
          top: 0,
          marginBottom: { xl: 22, lg: 5, md: 5, sm: 5, xs: 5 },
        }}
      ></Box>
      <Avatar
        src={AvatarImage}
        alt="David Ryšánek photo"
        sx={{
          width: { xl: "25vh", lg: "20vh", md: "20vh", sm: "20vh", xs: "16vh" },
          height: {
            xl: "25vh",
            lg: "20vh",
            md: "20vh",
            sm: "20vh",
            xs: "16vh",
          },
          top: { xl: "6vh", lg: "6vh", md: "5vh", sm: "6vh", xs: "6vh" },
          border: "4px solid #29962c",
          position: "absolute",
          zIndex: 2,
        }}
      />

      <Typography
        sx={{
          color: "#EAEAEA",
          fontFamily: "Fira Code",
          fontSize: {
            xl: "3vh",
            lg: "3vh",
            md: "2.8vh",
            sm: "3.8vw",
            xs: "5.6vw",
          },
          display: "block",
          position: "absolute",
          top: { xl: "36vh", lg: "30vh", md: "30vh", sm: "30vh", xs: "26vh" },
          zIndex: 2,
        }}
        variant="h5"
      >
        Hello I'm David Ryšánek
      </Typography>

      <Grow in={growVisible} timeout={700}>
        <Typography
          sx={{
            color: "#29962c",

            top: { xl: "42vh", lg: "38vh", md: "38vh", sm: "38vh", xs: "34vh" },
            textAlign: "center",
            fontFamily: "Fira Code",
            display: "block",
            position: "absolute",
            zIndex: 2,
            fontSize: {
              xl: "5vh",
              lg: "5vh",
              md: "4vh",
              sm: "4vh",
              xs: "8vw",
            },
          }}
          variant="h4"
        >
          {currentProfession}
        </Typography>
      </Grow>

      <Typography
        sx={{
          color: "#EAEAEA",
          justifyContent: "center",
          paddingLeft: {
            xl: "13vw",
            lg: "10vw",
            md: "7vw",
            sm: "6vw",
            xs: "5vw",
          },
          paddingRight: {
            xl: "13vw",
            lg: "10vw",
            md: "7vw",
            sm: "6vw",
            xs: "5vw",
          },
          paddingTop: {
            xl: "30vh",
            lg: "20vh",
            md: "18vh",
            sm: "24vh",
            xs: "20vh",
          },
          fontFamily: "Fira Code",
          fontSize: {
            xl: "2.5vh",
            lg: "1.4vw",
            md: "1.9vh",
            sm: "2vh",
            xs: "3.5vw",
          },
          display: "block",
          position: "absolute",
          textAlign: "center",
          zIndex: 2,
        }}
        variant="h5"
      >
        In over 2 years in the digital field, I've mastered web development and
        graphic design. I create websites that are not only visually appealing
        but also user-focused and functional. My passion for graphic design
        translates into captivating visuals that effectively convey messages.
      </Typography>

      <Button
        onClick={() => {
          document
            .getElementById("About_Me")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        sx={{
          color: "#EAEAEA",
          marginTop: {
            xl: "56vh",
            lg: "44vh",
            md: "40vh",
            sm: "60vh",
            xs: "50vh",
          },
          border: "3px solid #29962c",
          borderRadius: 6,
          width: { xl: "10vw", lg: "12vw", md: "18vw", sm: "22vw", xs: "30vw" },
          height: { xl: "5.5vh", lg: "5vh", md: "6vh", sm: "8vh", xs: "8vh" },
          zIndex: 2,
          fontSize: {
            xl: 17,
            lg: 16,
            md: 18,
            sm: 22,
            xs: "3.6vw",
          },
          backgroundColor: "rgba(0, 0, 0, 0)",
          fontFamily: "Fira Code",
          "&:hover": {
            backgroundColor: "rgba(46, 42, 40, 0.8)",
          },
        }}
      >
        {isSmallScreenOrDown ? "Resume" : "Show Resume"}
      </Button>
      <ArrowDropDownCircleOutlinedIcon
        onClick={() => {
          document
            .getElementById("About_Me")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        sx={{
          color: "#29962c",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
          position: "absolute",
          alignItems: "center",
          marginTop: { xl: "70vh", lg: "56vh", md: "56vh" },
          zIndex: 2,

          fontSize: { xl: "2.6vw", lg: "3vw", md: "4vw" },
          cursor: "pointer",
        }}
      />
    </Box>
  );
}
