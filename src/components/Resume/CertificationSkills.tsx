import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import CertificationData from "../../constants/CertificationData";

export default function CertificationSkills() {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", pb: "0.5rem" }} variant="h5">
        Tools
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {CertificationData.tools.map((tool, index) => (
          <Tooltip key={index} title={CertificationData.tooltipT[index]}>
            <Chip
              sx={{
                bgcolor: "rgba(3, 120, 3, 0.6)",
                fontSize: "1.2rem",
                border: "2px solid black",
              }}
              label={tool}
            />
          </Tooltip>
        ))}
      </Box>

      <Typography
        sx={{ fontWeight: "bold", pt: "1rem", pb: "0.5rem" }}
        variant="h5"
      >
        Certifications
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {CertificationData.certifications.map((certification, index) => (
          <Tooltip key={index} title={CertificationData.tooltipC[index]}>
            <Chip
              sx={{
                bgcolor: "rgba(255,223,1, 0.7)",
                fontSize: "1.2rem",
                border: "2px solid black",
              }}
              label={certification}
            />
          </Tooltip>
        ))}
      </Box>
      <Typography
        sx={{ fontWeight: "bold", pt: "1rem", pb: "0.5rem" }}
        variant="h5"
      >
        Languages
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {CertificationData.languages.map((language, index) => (
          <Tooltip title={CertificationData.languageTiers[index]}>
            <Chip
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.5)",
                fontSize: "1.2rem",
                border: "3px solid black",
                color: "white",
              }}
              label={language}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
