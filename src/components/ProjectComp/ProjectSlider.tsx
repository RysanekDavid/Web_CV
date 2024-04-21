import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { SliderData } from "../../constants/SliderData";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "../../styles/ProjectsPage/Slider.css";
import LaunchIcon from "@mui/icons-material/Launch";
import HandymanIcon from "@mui/icons-material/Handyman";

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
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2, spaceBetween: 40 },
          1000: { slidesPerView: 3, spaceBetween: 50 },
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
                mx: "1rem",
                backgroundColor: "rgba(77, 82, 77, 0.4)",
                p: "12px",
                transition: "transform 0.6s ease, border-color 0.6s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  zIndex: 1,
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
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={project.backgroundImage}
                  alt={project.title}
                  sx={{
                    maxHeight: "450px",
                    zIndex: 0,
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: 28,
                    right: 32,
                    zIndex: 2,
                  }}
                >
                  <project.icon
                    sx={{
                      fontSize: "2.6rem",
                      color: "rgba(0,60,0,1)",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      p: "4px",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 12,
                    display: "flex",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                    p: "4px",
                  }}
                >
                  <LaunchIcon sx={{ color: "black", fontSize: "2.8rem" }} />
                </Box>
              </Box>

              <CardContent>
                <Typography
                  sx={{ color: "white" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {project.content}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <HandymanIcon
                    sx={{ mr: 1.2, color: "rgba(56, 119, 103,1)" }}
                  />{" "}
                  <Typography
                    sx={{ color: "rgba(56, 119, 103,1)" }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {project.built}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectSlider;
