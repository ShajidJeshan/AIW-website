import { Container, Grid, Stack, Typography } from "@mui/material";
import HyperImg from "./hyper-automation.png";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import HighlightedText from "../../layout/HighlightedText";

const HyperAutomation = () => {
  return (
    <Container maxWidth={false}>
      <Stack alignItems="center" mb={10} textAlign="center">
        <ScrollAnimation animateOnce delay={200} animateIn="fadeIn">
          <Typography variant="h4" mb={2}>
            Welcome to the next generation of
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateOnce delay={300} animateIn="fadeIn">
          <HighlightedText>Hyper-automation</HighlightedText>
        </ScrollAnimation>
      </Stack>

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10}>
          <ScrollAnimation animateOnce delay={500} animateIn="fadeIn">
            <Image src={HyperImg} layout="responsive" />
          </ScrollAnimation>
          <ScrollAnimation animateOnce delay={500} animateIn="fadeIn">
            <Stack mt={15} mb={10} direction="row" justifyContent="center">
              <Typography fontWeight={700} align="center" variant="h3">
                Either way,{" "}
                <Typography
                  fontWeight={700}
                  component="span"
                  variant="h3"
                  color="primary.main"
                  fontStyle="italic"
                >
                  We got you!
                </Typography>
              </Typography>
            </Stack>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HyperAutomation;
