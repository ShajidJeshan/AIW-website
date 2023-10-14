import { Container, Grid, Stack, Typography } from "@mui/material";
import AiwLogoWhite from "./aiw_logo_white.png";
import Image from "next/image";
import LocationPinIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Stack bgcolor="primary.main">
      <Container maxWidth="lg">
        <Grid
          container
          py={10}
          alignItems="flex-start"
          spacing={{
            xs: 6,
            lg: 2,
          }}
          color="white"
        >
          <Grid item xs={12} lg={3}>
            <Stack alignItems="flex-start">
              <Image src={AiwLogoWhite} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Typography mb={2} fontWeight={700} variant="h5">
              Quick links
            </Typography>
            <Stack spacing={1}>
              <Typography>Home</Typography>
              <Typography>Our products</Typography>
              <Typography>Contact us</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Typography mb={2} fontWeight={700} variant="h5">
              Contact us
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1}>
                <LocationPinIcon />
                <Typography>1st floor, Cyberpark Sector 67 Gurugram</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <PhoneIcon />
                <Typography>+91 0124-4383768</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <MailIcon />
                <Typography>info@aiw.works</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
