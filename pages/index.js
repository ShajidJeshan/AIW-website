import { Typography } from "@mui/material";
import CtaBg from "../src/components/layout/CtaBg";
import { styled } from "@mui/material/styles";
import About from "../src/components/Home/About/";
import HyperAutomation from "../src/components/Home/HyperAutomation/";
import MidQuote from "../src/components/Home/MidQuote/MidQuote";
import Products from "../src/components/Home/Products";
import StrategicallySensitive from "../src/components/Home/StrategicallySensitive";
import Mimic from "../src/components/Home/Mimic";
import Figures from "../src/components/Home/Figures";
import Testimonials from "../src/components/Home/Testimonials";
import Footer from "../src/components/layout/Footer";

const Video = styled("video")``;

const VideoSection = () => {
  return (
    <Video
      sx={{ width: "50%", my: 10 }}
      autoPlay
      src="/assets/cta_vid.mp4"
      muted
    >
      <source src="/assets/cta_vid.mp4" type="video/mp4" />
    </Video>
  );
};

const Quote = () => (
  <Typography variant="h3" color="white">
    Innovation happens at the intersection of{" "}
    <Typography
      variant="h3"
      component="span"
      fontStyle="italic"
      color="secondary.main"
      fontWeight={700}
    >
      people, process and technology
    </Typography>
  </Typography>
);

export default function Home() {
  return (
    <>
      <CtaBg>
        <VideoSection />
      </CtaBg>

      <About />
      <MidQuote>
        <Quote />
      </MidQuote>
      <HyperAutomation />
      <Products />
      <StrategicallySensitive />
      <Mimic />
      <Figures />
      <Testimonials />
      <Footer />
    </>
  );
}
