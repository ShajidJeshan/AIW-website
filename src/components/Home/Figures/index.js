import { useRef } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import FigureDisplay from "./FigureDisplay";
import ScrollAnimation from "react-animate-on-scroll";
import useOnScreen from "../../../hooks/useOnScreen";
import HighlightedText from "../../layout/HighlightedText";

const Figures = () => {
  const ref = useRef();
  const showFigures = useOnScreen(ref);

  return (
    <Container sx={{ mb: 15 }} maxWidth="lg">
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <Stack
          alignItems={{
            lg: "center",
          }}
          spacing={1}
        >
          <Typography variant="h4">Let the numbers speak for the </Typography>
          <HighlightedText>ease, speed and reliability</HighlightedText>
        </Stack>
      </ScrollAnimation>
      <Grid
        mt={{
          xs: 2,
          lg: 10,
        }}
        container
        justifyContent="center"
        spacing={{
          xs: 5,
          lg: 0,
        }}
      >
        <Grid item xs={12} lg={4} ref={ref}>
          <FigureDisplay
            showFigures={showFigures}
            figure={100}
            suffix="+"
            sub="Processes created"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FigureDisplay
            showFigures={showFigures}
            figure={7000}
            suffix="+"
            sub="Hours saved"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FigureDisplay
            showFigures={showFigures}
            figure={100}
            suffix="%"
            sub="Customer Satisfaction"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Figures;
