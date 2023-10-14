import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import analytics from "./icons/analytics.png";
import creativity from "./icons/creativity.png";
import fast from "./icons/fast.png";
import focus from "./icons/focus.png";
import security from "./icons/security.png";
import ScrollAnimation from "react-animate-on-scroll";

const SSTab = ({ icon, text, order }) => (
  <ScrollAnimation animateOnce animateIn="fadeIn" delay={order * 100}>
    <Stack
      p={2}
      pr={0}
      direction="row"
      bgcolor="#D5E0F5"
      alignItems="center"
      borderRadius={2}
    >
      <Stack
        bgcolor="primary.main"
        alignItems="center"
        justifyContent="center"
        minHeight="80px"
        minWidth="80px"
        borderRadius="50%"
        border={3}
        mr={2}
      >
        <Stack>
          <Image src={icon} />
        </Stack>
      </Stack>
      <Typography fontWeight={500} fontStyle="italic" pr={2}>
        {text}
      </Typography>
    </Stack>
  </ScrollAnimation>
);

const StrategicallySensitive = () => {
  return (
    <Stack bgcolor="common.black" py={15}>
      <Container maxWidth="lg">
        <Stack
          alignItems={{
            lg: "center",
          }}
          spacing={{
            xs: 0,
            lg: 2,
          }}
        >
          <Typography color="#fff" variant="h4">
            A shift from random routine to
          </Typography>
          <Typography fontStyle="italic" color="secondary.main" variant="h4">
            Strategically Sensitive
          </Typography>
        </Stack>

        <Grid
          container
          mt={{
            xs: 3,
            lg: 15,
          }}
          direction="row"
          justifyContent="space-between"
          spacing={{
            xs: 5,
            lg: 0,
          }}
        >
          <Grid item xs={12} lg={4}>
            <SSTab
              order={1}
              icon={creativity}
              text="Unlock the reservoir of creativity"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SSTab order={2} icon={analytics} text="Enhanced analytics" />
          </Grid>
        </Grid>

        <Grid my={5} container justifyContent="center">
          <Grid item xs={12} lg={4}>
            <SSTab
              order={3}
              icon={focus}
              text="Employees can focus on information gathering and employee sharing"
            />
          </Grid>
        </Grid>

        <Grid
          spacing={{
            xs: 5,
            lg: 0,
          }}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={12} lg={4}>
            <SSTab icon={fast} text="Fast, simple and fully automated" />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SSTab
              order={5}
              icon={security}
              text="Blockchain enabled security"
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default StrategicallySensitive;
