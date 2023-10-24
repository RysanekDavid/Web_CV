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
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
        maxWidth: "100%",
        minHeight: "70rem",
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
          height: "88vh",
          zIndex: 0,
          top: 0,
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
          top: { xl: "6vh", lg: "6vh", md: "5vh", sm: "6vh", xs: "8vh" },
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
            xl: "1.8vw",
            lg: "2rem",
            md: "2.3rem",
            sm: "2.8vw",
            xs: "1.3rem",
          },
          display: "block",
          position: "absolute",
          whiteSpace: "nowrap",

          top: { xl: "35vh", lg: "30vh", md: "30vh", sm: "30vh", xs: "30vh" },
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

            top: { xl: "43vh", lg: "38vh", md: "38vh", sm: "37vh", xs: "38vh" },
            textAlign: "center",
            fontFamily: "Fira Code",
            display: "block",
            position: "absolute",
            zIndex: 2,
            fontSize: {
              xl: "2.8vw",
              lg: "5vh",
              md: "3.2rem",
              sm: "3.7vw",
              xs: "1.9rem",
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
          top: { xl: "53vh", lg: "47vh", md: "47vh", sm: "45vh", xs: "48vh" },
          paddingLeft: {
            xl: "13vw",
            lg: "7vw",
            md: "7vw",
            sm: "6vw",
            xs: "5vw",
          },
          paddingRight: {
            xl: "13vw",
            lg: "7vw",
            md: "7vw",
            sm: "6vw",
            xs: "5vw",
          },

          fontFamily: "Fira Code",
          fontSize: {
            xl: "1.2vw",
            lg: "1.39rem",
            md: "1.3rem",
            sm: "2vw",
            xs: "0.88rem",
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
          top: {
            xl: "69vh",
            lg: "64vh",
            md: "68vh",
            sm: "62vh",
            xs: "70vh",
          },
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "none",
          },
          position: "absolute",
          border: "3px solid #29962c",
          borderRadius: 6,
          minWidth: {
            xl: "10vw",
            lg: "12vw",
            md: "18vw",
            sm: "20vw",
            xs: "30vw",
          },
          minHeight: {
            xl: "5.5vh",
            lg: "5vh",
            md: "6vh",
            sm: "8vh",
            xs: "8vh",
          },
          zIndex: 2,
          fontSize: {
            xl: "0.8vw",
            lg: 16,
            md: 18,
            sm: "2.6vh",
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
          top: { xl: "78vh", lg: "72vh", md: "76vh" },
          zIndex: 2,

          fontSize: { xl: "2.6vw", lg: "3vw", md: "4vw" },
          cursor: "pointer",
        }}
      />
    </Box>
  );
}
