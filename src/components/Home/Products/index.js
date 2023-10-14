import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BuilderImage from "./builder.png";
import VisionImage from "./vision.png";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import ScrollAnimation from "react-animate-on-scroll";

const StaggerList = ({ list, animate = "fadeIn" }) => {
  return (
    <Stack spacing={3}>
      {list.map((feature, idx) => (
        <ScrollAnimation
          animateOnce
          key={feature}
          delay={200 * (idx + 1)}
          animateIn={animate}
        >
          <Stack color="black" direction="row" spacing={1}>
            <ArrowIcon />
            <Typography variant="h6">{feature}</Typography>
          </Stack>
        </ScrollAnimation>
      ))}
    </Stack>
  );
};

const builderFeatures = [
  "Earn Monetary Rewards",
  "Explore Opportunities",
  "Connect with Companies",
  "Deploy Custom Solutions",
];

const visionFeatures = [
  "Visualize and Control",
  "Scale Operations",
  "Realise ROI",
  "Boost Efficiency",
];

const Products = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 20 }}>
      <Grid
        spacing={5}
        mb={{
          xs: 15,
          lg: 10,
        }}
        container
        alignItems="center"
      >
        <Grid item xs={12} lg={6}>
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
            <Typography mb={2} variant="h4">
              Introducing Builder
            </Typography>
            <Stack alignItems="flex-start">
              <Typography color="primary">
                A no code platform for experts to scroll through industries and
                solve real problems by deploying autonomous process solutions.
              </Typography>
              <Typography my={2}>
                An automation platform that makes deployments fast and simple.
              </Typography>
            </Stack>
            <Image src={BuilderImage} />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12} lg={6}>
          <StaggerList list={builderFeatures} />
        </Grid>
      </Grid>
      <Grid
        spacing={5}
        container
        alignItems="center"
        direction={{
          xs: "column-reverse",
          lg: "row",
        }}
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          sx={{
            justifyContent: {
              lg: "center",
            },
          }}
        >
          <Stack>
            <StaggerList list={visionFeatures} />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ScrollAnimation animateOnce animateIn="fadeInRight">
            <Stack>
              <Typography mb={2} variant="h4">
                Introducing Vision
              </Typography>
              <Typography color="primary">
                A powerful tool to manage and control the hybrid workforce in
                real time.
              </Typography>
              <Typography mt={2}>
                Visualise and create operational processes in real time, with
                all the control, from anywhere.
              </Typography>
              <Image src={VisionImage} />
            </Stack>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
