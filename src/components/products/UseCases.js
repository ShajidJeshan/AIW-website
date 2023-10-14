import { Container, Grid, Stack, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

const UseCases = ({ useCases = [], product }) => {
  return (
    <Stack mt={20} py={15} bgcolor="common.black" color="white">
      <Container maxWidth="lg">
        <ScrollAnimation animateIn="fadeIn">
          <Typography align="center" mb={8} variant="h4">
            You need the AIW {product} if you want to:
          </Typography>
        </ScrollAnimation>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
        >
          {useCases.map((uc, idx) => (
            <Grid key={uc.title} item xs={12} lg={4}>
              <ScrollAnimation
                style={{ height: "100%" }}
                animateIn="fadeIn"
                delay={100 * (idx + 1)}
              >
                <Stack
                  height="100%"
                  alignItems="center"
                  textAlign="center"
                  p={3}
                  border={3}
                  borderColor="secondary.main"
                  borderRadius={3}
                >
                  <img
                    style={{ width: 75 }}
                    src={`/assets/products/icons/${uc.icon}`}
                    alt={uc.title}
                  />
                  <Typography my={1} fontWeight={700} variant="h6">
                    {uc.title}
                  </Typography>
                  <Typography>{uc.text}</Typography>
                </Stack>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default UseCases;
