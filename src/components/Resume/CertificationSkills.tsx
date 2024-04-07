import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const data = {
  tools: [
    "JIRA",
    "Trello",
    "Git",
    "VS Code",
    "Photoshop",
    "Illustrator",
    "Axure",
    "PowerApps",
  ],
  certifications: [
    "React Framework Development",
    "TypeScript Programming",
    "REST API Development",
  ],
  tooltipC: [
    "Creating web applications using React and Typescript like this page - ICT Pro s.r.o.",
    "Writing error-free syntaxes and code writing conventions in TypeScript - GOPAS Computer School",
    "Creating and processing web services both on the backend and on the frontend - GOPAS Computer School",
  ],
  tooltipT: [
    "Software tool for recording errors and problems in software development or project management.",
    "Web application for project management. Trello uses a project management paradigm known as Kanban.",
    "A versioning system to store your projects and all their versions.",
    "Source code editor developed by Microsoft.",
    "Bitmap graphics editor for creating and editing bitmap graphics.",
    "Vector graphics creation tool",
    "A software tool for solution preview called wireframe, rapid prototyping and functional specification aimed at web and personal computers.",
    "A service for building and using custom business applications that connect to your data and work across the web.",
  ],
  languages: ["English", "German", "Czech"],
  languageTiers: ["Fluent", "Basic", "Native"],
};

export default function CertificationSkills() {
  return (
    <Box>
      {/* Tools section */}
      <Typography sx={{ fontWeight: "bold", pb: "0.5rem" }} variant="h5">
        Tools
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {data.tools.map((tool, index) => (
          <Tooltip key={index} title={data.tooltipT[index]}>
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

      {/* Certifications section */}
      <Typography
        sx={{ fontWeight: "bold", pt: "1rem", pb: "0.5rem" }}
        variant="h5"
      >
        Certifications
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {data.certifications.map((certification, index) => (
          <Tooltip key={index} title={data.tooltipC[index]}>
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

      {/* Languages section */}
      <Typography
        sx={{ fontWeight: "bold", pt: "1rem", pb: "0.5rem" }}
        variant="h5"
      >
        Languages
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {data.languages.map((language, index) => (
          <Tooltip title={data.languageTiers[index]}>
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
