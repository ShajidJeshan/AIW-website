import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutImage from "./about-img.png";

import ScrollAnimation from "react-animate-on-scroll";

import HighlightedText from "../../layout/HighlightedText";

const About = () => {
  return (
    <ScrollAnimation animateOnce animateIn="fadeIn">
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack
          mb={10}
          direction="row"
          spacing={2}
          alignItems="center"
          position="relative"
        >
          <HighlightedText>Reimagine</HighlightedText>
          <Typography
            sx={{
              typography: {
                xs: "h5",
                lg: "h4",
              },
              fontWeight: 700,
            }}
          >
            your workforce
          </Typography>
        </Stack>
        <Grid
          container
          spacing={{
            xs: 5,
            lg: 10,
          }}
          alignItems="center"
        >
          <Grid item xs={10} lg={6}>
            <ScrollAnimation animateOnce delay={500} animateIn="fadeIn">
              <Image src={AboutImage} />
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ScrollAnimation animateOnce delay={400} animateIn="fadeIn">
              <Typography variant="h6">
                Work as we know it, is at the cusp of a paradigm shift, where
                the tools of technology will augment the human workforce.
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce delay={700} animateIn="fadeIn">
              <Typography
                variant="h6"
                mt={2}
                fontWeight={700}
                color="primary.main"
              >
                By combining the best of human and artificial intelligence, we
                bring in a smarter, faster and a newer era of Work.
              </Typography>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </ScrollAnimation>
  );
};

export default About;
