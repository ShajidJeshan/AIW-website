import { Stack, Typography } from "@mui/material";
import CountUp from "react-countup";

const FigureDisplay = ({ figure, showFigures, suffix, sub }) => {
  return (
    <Stack spacing={2}>
      <Stack>
        <Typography color="primary" fontWeight={700} variant="h1">
          {showFigures && <CountUp duration={2} end={figure} delay={0.5} />}
          {suffix}
        </Typography>
        <Typography pl={2} borderLeft={5} borderColor="primary.main">
          {sub}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FigureDisplay;
