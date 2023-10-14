import { Box, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SwipeIcon from "@mui/icons-material/Swipe";

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <ArrowForwardIosIcon
    {...props}
    sx={{ right: "-65px !important", color: "#eee !important" }}
  />
);
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <ArrowBackIosIcon
    {...props}
    sx={{ left: "-65px !important", color: "#eee !important" }}
  />
);

const TSlider = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  return (
    <Box maxWidth="560px" mx="auto" px={2}>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<SlickArrowRight />}
        prevArrow={<SlickArrowLeft />}
        arrows={!isXs}
      >
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
            “AIW has completely transformed the customer on boarding process in
            our bank. We aim to deploy a lot more bots this year”
          </Typography>
          <Typography color="primary">
            ~ Mahbub Alam Vice President (Bank Asia Ltd)
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
            “AIW really compliments the digital transformation in our
            organization as we continue to scale and adopt automation across
            many areas."
          </Typography>
          <Typography color="primary">~ Adeeb Shams (City Bank Ltd)</Typography>
        </Box>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
            “Our billing department was under lots of pressure due to the
            pandemic. We had to scale and AIW adoption has really helped us. We
            continue to adopt automation across many areas”
          </Typography>
          <Typography color="primary">
            ~ Ashish Gupta (Director, Sarvodaya Hospitals)
          </Typography>
        </Box>
      </Slider>

      <SwipeIcon
        sx={{
          mt: 3,
          color: "rgba(255,255,255,.5)",
          display: { xs: "inline-block", sm: "none" },
        }}
      />
    </Box>
  );
};

export default TSlider;
