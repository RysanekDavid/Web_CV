export const regularTitle = {
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "1rem",
};

const regularText = {
  color: "rgba(255, 255, 255, 0.7)",
  fontFamily: "Roboto",
  pt: 1,
  "&::before": {
    content: '"•"',
    pr: "0.5rem",
  },
};

export default regularText;
