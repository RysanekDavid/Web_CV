import { Typography, Avatar } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BackgroundImg from "../assets/BgAM.jpg";
import AvatarImage from "../assets/A6.jpg";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

//import { Fade } from "react-awesome-reveal";

export function AboutMe() {
  const [currentProfession, setCurrentProfession] = useState("Developer");
  const professions = useMemo(() => ["Developer", "Designer", "Analyst"], []);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [growVisible, setGrowVisible] = useState(true);

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
          width: { xl: "25vh", lg: "20vh", md: 200, sm: 180, xs: 140 },
          height: { xl: "25vh", lg: "20vh", md: 200, sm: 180, xs: 140 },
          top: { xl: "6vh", lg: "6vh", md: 70, sm: 60, xs: "54%" },
          border: "4px solid #29962c",
          position: "absolute",
          zIndex: 2,
        }}
      />

      <Typography
        sx={{
          color: "#EAEAEA",
          fontFamily: "Fira Code",
          fontSize: { xl: "3vh", lg: 30, md: 28, sm: 24, xs: 20 },
          display: "block",
          position: "absolute",
          top: { xl: "36vh", lg: "30vh", md: 70, sm: 60, xs: "54%" },
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

            top: { xl: "43vh", lg: "38vh", md: 70, sm: 60, xs: "54%" },
            textAlign: "center",
            fontFamily: "Fira Code",
            display: "block",
            position: "absolute",
            zIndex: 2,
            fontSize: {
              xl: "6vh",
              lg: "5vh",
              md: "34px",
              sm: "32px",
              xs: "30px",
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
          paddingLeft: { xl: "13vw", lg: "10vw", md: 16, sm: 10, xs: 4 },
          paddingRight: { xl: "13vw", lg: "10vw", md: 16, sm: 10, xs: 4 },
          paddingTop: { xl: "30vh", lg: "22vh", md: 5, sm: 4, xs: 3 },
          fontFamily: "Fira Code",
          fontSize: {
            xl: "2.5vh",
            lg: "1.4vw",
            md: "18px",
            sm: "18px",
            xs: "17px",
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
          marginTop: { xl: "55vh", lg: "30vw", md: 5, sm: 4, xs: 3 },
          border: "3px solid #29962c",
          borderRadius: 6,
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0)",
          fontFamily: "Fira Code",
          "&:hover": {
            backgroundColor: "rgba(46, 42, 40, 0.8)",
          },
        }}
      >
        More About Me
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
          marginTop: { xl: "70vh", lg: "40vw", md: 84 },
          zIndex: 2,

          fontSize: { xl: 38, lg: 38, md: 38, sm: 38, xs: 34 },
          cursor: "pointer",
        }}
      />
    </Box>
  );
}
