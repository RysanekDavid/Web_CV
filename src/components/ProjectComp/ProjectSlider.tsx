import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { SliderData } from "../../constants/SliderData";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "../../styles/ProjectsPage/Slider.css";
import LaunchIcon from "@mui/icons-material/Launch";

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
                backgroundColor: "rgba(77, 82, 77, 0.4)",
                p: "16px",
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
                
                <Box sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  zIndex: 2, 
                }}>
                  <project.icon sx={{ fontSize: "3rem", color: "rgba(27,102,157,1)" }} />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    display: "flex",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "50%",
                  }}
                >
                  <LaunchIcon sx={{ color: "white", fontSize: "3.2rem" }} />
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
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectSlider;
