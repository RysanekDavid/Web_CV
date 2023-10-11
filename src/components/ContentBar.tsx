// AboutMe.tsx
import * as React from "react";
import {
  Typography,
  Avatar,
  List,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BackgroundImg from "../assets/BgAM.jpg";
import resumeImage from "../assets/CV - David Ryšánek.jpg";
import SwipeDownTwoToneIcon from "@mui/icons-material/SwipeDownTwoTone";
import AvatarImage from "../assets/A6.jpg";

function AboutMe() {
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
  }, [professionIndex]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          height: "87vh",
        }}
      ></Box>
      <Avatar
        src={AvatarImage}
        alt="David Ryšánek photo"
        sx={{
          width: { xl: 250, lg: 250, md: 220, sm: 200, xs: 180 },
          height: { xl: 250, lg: 250, md: 220, sm: 200, xs: 180 },
          mb: 2,
          top: { xl: 80, lg: 80, md: 70, sm: 60, xs: 40 },
          border: "4px solid #29962c",
        }}
      />

      <Typography
        sx={{
          color: "#EAEAEA",
          paddingTop: { xl: 12, lg: 11, md: 10, sm: 9, xs: 8 },
          fontFamily: "Fira Code",
        }}
        variant="h5"
      >
        Hello I'm David Ryšánek
      </Typography>

      <Box sx={{ height: "50px", position: "relative" }}>
        <Grow in={growVisible} timeout={900}>
          <Typography
            sx={{
              color: "#29962c",
              paddingTop: 3,
              fontFamily: "Fira Code",
              fontWeight: "bold",
              fontSize: "38px",
            }}
            variant="h4"
          >
            {currentProfession}
          </Typography>
        </Grow>
      </Box>

      <Typography
        sx={{
          color: "#EAEAEA",
          justifyContent: "center",
          paddingLeft: { xl: 40, lg: 25, md: 16, sm: 10, xs: 4 },
          paddingRight: { xl: 40, lg: 25, md: 16, sm: 10, xs: 4 },
          paddingTop: 7,
          fontFamily: "Fira Code",
          fontSize: "18px",
        }}
        variant="h5"
      >
        In over 2 years in the digital field, I've mastered web development and
        graphic design. I create websites that are not only visually appealing
        but also user-focused and functional. My passion for graphic design
        translates into captivating visuals that effectively convey messages.
      </Typography>

      <Button
        variant="contained"
        sx={{
          color: "#EAEAEA",
          marginTop: { xl: 7, lg: 6, md: 5, sm: 4, xs: 6 },
          border: "3px solid #29962c",
          borderRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0)",
          fontFamily: "Fira Code",
          "&:hover": {
            backgroundColor: "rgba(46, 42, 40, 0.8)",
          },
        }}
      >
        More About Me
      </Button>
      <SwipeDownTwoToneIcon
        sx={{
          color: "#29962c",
          marginLeft: "auto",
          display: "flex",
          position: "absolute",
          alignItems: "center",
          marginTop: { xl: 90, lg: 70, md: 60, sm: 50, xs: 90 },
          fontSize: 40,
          cursor: "pointer",
        }}
      />
      <Typography
        sx={{
          color: "#29962c",
          paddingTop: 45,
          fontFamily: "Roboto Slab",
          fontSize: "36px",
        }}
        variant="h4"
      >
        About Me
      </Typography>

      <Typography
        sx={{
          color: "#29962c",
          paddingTop: 10,
          fontFamily: "Fira Code",
          fontSize: "30px",
        }}
        variant="h4"
      >
        My Name Is David
      </Typography>

      <Typography
        sx={{
          color: "#29962c",
          paddingTop: 5,
          fontFamily: "Fira Code",
          fontSize: "20px",
        }}
        variant="h4"
      >
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum
        Voluptatibus Dolores Aspernatur Animi Perferendis Iste! Culpa Aut Enim
        Debitis Optio Illum Ipsum Quis Perferendis Dolor Expedita. Similique
        Necessitatibus Inventore Doloremque.
      </Typography>
    </Box>
  );
}

// Resume.tsx

function Resume() {
  return (
    <Box>
      <Typography sx={{ color: "#FFFFFF" }} variant="h5">
        My CV
      </Typography>
      <img
        src={resumeImage}
        alt="Můj životopis"
        style={{ width: "50%", height: "auto", color: "#FFFFFF" }}
      />
    </Box>
  );
}

// Projects.tsx

function Projects() {
  return (
    <Box>
      <Typography variant="h5">Moje Projekty</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Název projektu</Typography>
              <Typography variant="body2">Popis projektu...</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export { AboutMe, Resume, Projects };
