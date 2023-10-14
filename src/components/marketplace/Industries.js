import { useState, Fragment, useRef } from "react";
import {
  Grid,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
  Divider,
  Button,
  Box,
  Fab,
  useTheme,
} from "@mui/material";
import industries from "./inds";
import ArrowUpIcon from "@mui/icons-material/ArrowUpward";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";

const Industries = () => {
  const [industry, setIndustry] = useState("Finance");
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState("");
  const theme = useTheme();

  const tabsRef = useRef();
  const financeRef = useRef();
  const healthcareRef = useRef();
  const educationRef = useRef();
  const retailRef = useRef();
  const transportationRef = useRef();

  const colors = {
    High: theme.palette.primary.light,
    Medium: theme.palette.warning.light,
    Low: theme.palette.success.light,
  };

  const refs = {
    Finance: financeRef,
    Healthcare: healthcareRef,
    Education: educationRef,
    Retail: retailRef,
    Transportation: transportationRef,
  };

  const scrollTo = (offset) =>
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

  const handleTabChange = (e, val) => {
    setIndustry(val);

    scrollTo(refs[val].current.offsetTop);
  };

  return (
    <>
      <Fab
        sx={{ position: "fixed", bottom: 50, right: 50, zIndex: 5 }}
        size="medium"
        color="primary"
        aria-label="goup"
        onClick={() => scrollTo(tabsRef.current.offsetTop)}
      >
        <ArrowUpIcon />
      </Fab>
      <Container maxWidth="lg">
        <Box mt={10} mx="auto">
          <Tabs
            ref={tabsRef}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={industry}
            onChange={handleTabChange}
            TabIndicatorProps={{
              sx: {
                height: 5,
                borderRadius: 20,
                width: "100%",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                typography: "h6",

                "&.Mui-selected": {
                  color: "black",
                  typography: "h5",
                  fontStyle: "italic",
                  fontWeight: 700,
                },
              },
            }}
          >
            <Tab value="Finance" label="Finance" />
            <Tab value="Healthcare" label="Healthcare" />
            <Tab value="Education" label="Education" />
            <Tab value="Retail" label="Retail" />
            <Tab value="Transportation" label="Transportation/ logistics" />
          </Tabs>
        </Box>

        <Stack mb={20}>
          {Object.keys(industries).map((industry) => (
            <Fragment key={industry}>
              <ScrollAnimation animateIn="fadeIn" delay={1} offset={200}>
                <Stack>
                  <Typography mt={20} variant="h4" ref={refs[industry]}>
                    {industries[industry].title}
                  </Typography>
                  <Typography my={3} color="#363636">
                    {industries[industry].summary}
                  </Typography>
                  <Grid container spacing={3}>
                    {industries[industry].cards.map((card, idx) => (
                      <Grid
                        minHeight={400}
                        onClick={() =>
                          selectedCard === `${industry}-${idx}`
                            ? setSelectedCard("")
                            : setSelectedCard(`${industry}-${idx}`)
                        }
                        item
                        xs={12}
                        lg={3}
                        key={card.title}
                        className={
                          selectedCard === `${industry}-${idx}`
                            ? "selected"
                            : ""
                        }
                        position="relative"
                        sx={{
                          transformStyle: "preserve-3d",
                          cursor: "pointer",
                          "&.selected": {
                            "& .front": {
                              transform: "rotateY(180deg)",

                              "& .MuiButton-root": {
                                display: "none",
                              },
                            },
                            "& .back": {
                              transform: "rotateY(180deg)",
                              opacity: 1,
                            },
                          },
                          "& .front, & .back": {
                            transitionTimingFunction:
                              "cubic-bezier(.175, .885, .32, 1.275)",
                            transitionDuration: "1s",
                            transitionProperty: "transform, opacity",
                            // backfaceVisibility: "hidden",
                          },
                        }}
                      >
                        <Stack
                          className="front"
                          py={4}
                          bgcolor="common.black"
                          height="100%"
                          color="white"
                          borderRadius={2}
                          sx={{
                            transform: "rotateY(0deg)",
                            zIndex: 2,
                          }}
                        >
                          <Stack
                            height="100%"
                            alignItems="center"
                            textAlign="center"
                            spacing={3}
                            px={1}
                            justifyContent="space-between"
                          >
                            <Stack alignItems="center" spacing={3}>
                              <img
                                style={{ width: 70 }}
                                src={`/assets/products/icons/${industries[industry].icon}`}
                                alt={card.title}
                              />

                              <Typography
                                fontWeight={700}
                                variant="h6"
                                width="250px"
                                textOverflow="ellipsis"
                                overflow="hidden"
                                noWrap
                                px={1}
                              >
                                {card.title}
                              </Typography>
                            </Stack>
                            <Stack alignItems="flex-start" width="100%" px={2}>
                              <Typography variant="body2">
                                Complexity:{" "}
                                <Typography
                                  component="span"
                                  fontWeight={700}
                                  color={colors[card.complexity]}
                                >
                                  {card.complexity}
                                </Typography>
                              </Typography>
                              <Divider
                                sx={{
                                  borderWidth: 1,
                                  borderColor: "rgba(255,255,255,.3)",
                                  width: "100%",
                                  mb: 3,
                                  mt: 2,
                                }}
                              />
                              <Stack
                                width="100%"
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Typography fontWeight={700} variant="overline">
                                  Time saved: {card.timeSaved}
                                </Typography>
                                <Button
                                  sx={{
                                    borderRadius: 10,
                                    fontWeight: 400,
                                    zIndex: 100,
                                  }}
                                  variant="contained"
                                  size="small"
                                  color="secondary"
                                  onClick={() =>
                                    router.push(
                                      `/contact/?subject=${industry}: ${card.title}`
                                    )
                                  }
                                >
                                  Know more
                                </Button>
                              </Stack>
                            </Stack>
                          </Stack>
                          <Stack
                            className="back"
                            py={1}
                            variant="body2"
                            bgcolor="primary.main"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            color="white"
                            sx={{
                              opacity: 0,
                              transform: "rotateY(180deg)",
                              borderRadius: 2,
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: "100%",
                              height: "100%",
                              typography: "body2",
                              px: 2,
                            }}
                          >
                            {card.info}
                          </Stack>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </ScrollAnimation>
            </Fragment>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Industries;
