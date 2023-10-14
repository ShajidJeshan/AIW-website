import { Typography, Stack, useMediaQuery } from "@mui/material";
import QuoteImg from "./quote.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ScrollAnimation from "react-animate-on-scroll";
import Wave from "./Wave";

const MidQuote = ({ children, mb = 15, bottomBar = true }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  return (
    <ScrollAnimation animateOnce offset={300} animateIn="fadeIn">
      <Stack mt={10} mb={mb}>
        <Stack
          overflow="hidden"
          sx={{
            "& path": {
              fill: "#1a1a1a",
            },
          }}
        >
          <Wave />
        </Stack>

        <Stack
          bgcolor="common.black"
          pt={10}
          pb={20}
          px={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 3, lg: 5 }}
          position="relative"
          sx={{
            "& .MuiTypography-root": {
              typography: {
                xs: "h4",
                lg: "h3",
              },
            },
          }}
        >
          <Stack position="relative" top={-40}>
            <ScrollAnimation delay={200} animateOnce animateIn="fadeIn">
              <Image src={QuoteImg} width={100} />
            </ScrollAnimation>
          </Stack>
          <Stack px={{ xs: 2, md: 5, lg: 10 }}>
            <ScrollAnimation animateOnce delay={500} animateIn="fadeIn">
              {children}
            </ScrollAnimation>
          </Stack>
          <Stack
            position="relative"
            top={60}
            sx={{
              transform: "rotate(180deg)",
            }}
          >
            <ScrollAnimation delay={200} animateOnce animateIn="fadeIn">
              <Image src={QuoteImg} width={100} />
            </ScrollAnimation>
          </Stack>
        </Stack>
        {bottomBar && (
          <Stack
            bgcolor="secondary.main"
            px={3}
            py={1}
            component={Marquee}
            gradient={false}
            speed={100}
          >
            <Typography mx="auto" fontWeight={700} variant="body2">
              Extraordinarily augment your workforce
            </Typography>
            {isXs && (
              <>
                <Typography mx="auto" fontWeight={700} variant="body2">
                  Extraordinarily augment your workforce
                </Typography>
                <Typography mx="auto" fontWeight={700} variant="body2">
                  Extraordinarily augment your workforce
                </Typography>
              </>
            )}
          </Stack>
        )}
      </Stack>
    </ScrollAnimation>
  );
};

export default MidQuote;
