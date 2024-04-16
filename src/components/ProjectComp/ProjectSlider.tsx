import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { SliderData } from "../../constants/SliderData";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ProjectSlider = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",

        overflow: "hidden",
        ml: "1rem",
        mr: "1rem",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode
        navigation
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2, spaceBetween: 40 },
          800: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {SliderData.map((project, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "20px",
                border: "3px solid rgba(41,150,44, 0.94)",
                cursor: "pointer",
                my: "4rem",
                mx: "3rem",

                p: "16px",

                transition: "transform 0.3s ease, border-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)", // Adjusted scale factor for a more noticeable effect
                  zIndex: 1, // Ensures card is above others on scale
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    borderRadius: "inherit",
                    transition: "background-color 0.3s ease",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.backgroundImage}
                alt={project.title}
                sx={{
                  height: {
                    xs: "200px",
                    sm: "250px",
                    md: "300px",
                    lg: "350px",
                    xl: "450px",
                  },
                  zIndex: 0,
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.content}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectSlider;
