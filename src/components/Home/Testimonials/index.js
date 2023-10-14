import { useState } from "react";

import {
  Stack,
  Grid,
  Typography,
  IconButton,
  Slide,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

import AWS from "./clients/aws.png";
import BankAsia from "./clients/bank-asia.png";
import CityBank from "./clients/city-bank.png";
import EasternBank from "./clients/eastern-bank.png";
import Fortis from "./clients/fortis.png";
import HBL from "./clients/hbl.png";
import NIB from "./clients/nepal-investment-bank.png";
import Sarvodaya from "./clients/sarvodaya.png";
import Setho from "./clients/setho.png";
import Techcom from "./clients/techcom.png";
import BackArrow from "@mui/icons-material/ArrowBackIos";
import FrontArrow from "@mui/icons-material/ArrowForwardIos";

const clientImages = [
  AWS,
  BankAsia,
  CityBank,
  EasternBank,
  Fortis,
  HBL,
  NIB,
  Sarvodaya,
  Setho,
  Techcom,
];

const testimonials = [
  {
    type: "client",
    testimonial:
      "AIW has helped us save almost 7000 man hours annually by automating 7 critical processes, resulting in huge cost savings. While our customers are growing and transactions are increasing multi-fold, thanks to AIW with which we are able to process payroll in-house more efficiently",
    by: "Adeeb Shams (City Bank ltd)",
    pic: "adeeb.png",
  },
  {
    type: "client",
    testimonial:
      "Our billing department was under lots of pressure due to the pandemic. We had to scale and AIW adoption has really helped us. We continue to adopt automation across many areas",
    by: "Amit Aggarwal (Director, Sarvodaya Hospitals)",
    pic: "amit.webp",
  },
  {
    type: "client",
    testimonial:
      "AIW has completely transformed the customer on boarding process in our bank. We aim to deploy a lot more bots this year",
    by: "Mahbub Alam Vice President (Bank Asia Ltd)",
    pic: "alam.png",
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <Stack mt={20} position="relative">
      <Stack
        sx={{
          backgroundImage: "url(/assets/people.png)",
          height: 500,
          backgroundRepeat: "no-repeat",
        }}
      />
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <Stack
          bgcolor="secondary.main"
          py={10}
          alignItems="center"
          sx={(theme) => ({
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            [theme.breakpoints.only("xs")]: {
              width: "90%",
              top: "20%",
            },
          })}
        >
          <Typography variant="h5">What our</Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "black",
              color: "secondary.main",
              px: 2,
              fontStyle: "italic",
              mt: 1,
            }}
          >
            Experts &amp; Clients have to say
          </Typography>
          <Stack mt={3} mb={2}>
            <Avatar
              sx={{
                width: 50,
                height: 50,
              }}
              src={`/assets/clients/${testimonials[selectedTestimonial].pic}`}
              alt={`/assets/clients/${testimonials[selectedTestimonial].by}`}
            />
          </Stack>
          <Stack direction="row" alignItems="center" px={2}>
            <IconButton
              onClick={() => {
                setSelectedTestimonial((o) =>
                  o === 0 ? testimonials.length - 1 : o - 1
                );
              }}
              size="small"
            >
              <BackArrow fontSize="small" />
            </IconButton>

            <Typography px={1}>
              {testimonials[selectedTestimonial].testimonial}
            </Typography>

            <IconButton
              onClick={() => {
                setSelectedTestimonial((o) =>
                  o === testimonials.length - 1 ? 0 : o + 1
                );
              }}
              size="small"
            >
              <FrontArrow fontSize="small" />
            </IconButton>
          </Stack>

          <Typography mt={2} mx={4}>
            ~ {testimonials[selectedTestimonial].by}
          </Typography>
        </Stack>
      </ScrollAnimation>
      <Stack
        sx={{
          bgcolor: "black",
          height: {
            xs: 0,
            sm: 200,
          },
        }}
      />
      <Stack
        bgcolor="black"
        alignItems="center"
        pt={{
          xs: 6,
          lg: 0,
        }}
        pb={8}
      >
        <Typography mb={5} variant="h5" color="white" textAlign="center">
          Companies that love working with us
        </Typography>
        <Grid
          px={2}
          container
          item
          lg={8}
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          {clientImages.map((image, idx) => (
            <Grid item xs={4} sm={3} md={2} key={idx}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeIn"
                delay={100 * (idx + 1)}
              >
                <Image src={image} alt={`client - ${idx}`} />
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
