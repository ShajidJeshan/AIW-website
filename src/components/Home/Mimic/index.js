import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BotImage from "./image.png";
import ScrollAnimation from "react-animate-on-scroll";

const Mimic = () => {
  return (
    <ScrollAnimation animateOnce animateIn="fadeIn">
      <Container maxWidth="lg">
        <Stack
          borderRadius={5}
          my={15}
          py={{ xs: 4, mg: 10 }}
          px={{ xs: 3, md: 8 }}
          bgcolor="common.black"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            direction={{
              xs: "column-reverse",
              lg: "row",
            }}
            spacing={{
              xs: 5,
              lg: 0,
            }}
          >
            <Grid item xs={6}>
              <Typography mb={5} color="secondary" variant="h4">
                Machines are great. Humans? Even better.
              </Typography>
              <Typography color="#fff">
                But only if we free them up from the mundane and drudgery so
                that they can focus on the extraordinary.
              </Typography>
              <Typography
                mt={5}
                color="secondary"
                variant="h6"
                fontWeight={700}
                fontStyle="italic"
              >
                After all, an investment in automation is ultimately an
                investment in people
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Image src={BotImage} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </ScrollAnimation>
  );
};

export default Mimic;
