import { Stack, Typography, useTheme } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import MidQuote from "../src/components/Home/MidQuote/MidQuote";
import CtaBg from "../src/components/layout/CtaBg";
import Footer from "../src/components/layout/Footer";
import HighlightedText from "../src/components/layout/HighlightedText";
import Industries from "../src/components/marketplace/Industries";

const Quote = () => (
  <Typography variant="h3" color="white">
    A digital landscape of opportunities, ideas and limitless possibilities for
    <Typography
      component="span"
      fontWeight="h3"
      color="secondary.main"
      fontStyle="italic"
    >
      {" "}
      industry specific
    </Typography>{" "}
    solutions and developments
  </Typography>
);

export default function Marketplace() {
  const { palette } = useTheme();
  return (
    <>
      <CtaBg>
        <Stack py={20} alignItems="center">
          <ScrollAnimation animateIn="fadeIn">
            <Typography
              textAlign="center"
              color="white"
              variant="h4"
              mb={4}
              lineHeight={1.8}
            >
              <span
                style={{ color: palette.secondary.light, fontStyle: "italic" }}
              >
                Transform your business
              </span>{" "}
              with solutions designed by AIW,
              <br />
              for every industry and its needs
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={400}>
            <Stack>
              <Typography textAlign="center" color="white" variant="h3">
                Take control over the
              </Typography>
              <HighlightedText mt={2} color="secondary.main" invert={true}>
                power of digitisation
              </HighlightedText>
            </Stack>
          </ScrollAnimation>
        </Stack>
      </CtaBg>
      <Industries />
      <MidQuote mb={0} bottomBar={false}>
        <Quote />
      </MidQuote>
      <Footer />
    </>
  );
}
