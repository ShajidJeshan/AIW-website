import { useState, useEffect } from "react";
import {
  Typography,
  Stack,
  FilledInput,
  Button,
  Container,
  Grid,
  Divider,
} from "@mui/material";

import CtaBg from "../src/components/layout/CtaBg";
import Footer from "../src/components/layout/Footer";
import { useRouter } from "next/router";

import LocationPinIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import { useForm } from "@formcarry/react";

const contact = () => {
  const { state, submit } = useForm({
    id: "0n9HwWoQmSA",
  });
  const router = useRouter();
  const { subject = "" } = router.query;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject,
    message: "",
  });

  const handleChange = (e) =>
    setForm((o) => ({ ...o, [e.target.name]: e.target.value }));

  useEffect(() => {
    setForm((old) => ({ ...old, subject }));
  }, [subject]);

  return (
    <>
      <CtaBg>
        <Stack my={10} mb={5} alignItems="center" spacing={2}>
          <Typography color="white" variant="h2">
            Contact us
          </Typography>
          <Typography
            fontWeight={700}
            fontStyle="italic"
            variant="h6"
            color="primary.light"
          >
            Let's get in touch
          </Typography>
        </Stack>
      </CtaBg>
      <Container sx={{ my: 10 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationPinIcon fontSize="large" />
                <Typography>1st floor, Cyberpark Sector 67 Gurugram</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="large" />
                <Typography>+91 0124-4383768</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <MailIcon fontSize="large" />
                <Typography>info@aiw.works</Typography>
              </Stack>
            </Stack>

            <Divider sx={{ my: 5, typography: "h6" }}>
              We would love to hear from you
            </Divider>

            {state.submitted ? (
              <Stack mt={4} direction="row">
                <Typography>Message sent!</Typography>
              </Stack>
            ) : (
              <Stack
                component="form"
                onSubmit={submit}
                spacing={3}
                p={4}
                sx={{
                  boxShadow: "0px 5px 25px rgb(0 0 0 / 6%)",
                  bgcolor: "white",
                  borderRadius: 2,
                }}
              >
                <FilledInput
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Name"
                />
                <FilledInput
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Email"
                />
                <FilledInput
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Subject"
                />
                <FilledInput
                  onChange={handleChange}
                  name="message"
                  value={form.message}
                  multiline
                  minRows={4}
                  fullWidth
                  placeholder="Message"
                />
                <Button
                  disabled={state.submitting}
                  size="large"
                  disableElevation
                  variant="contained"
                  type="submit"
                >
                  Send message
                </Button>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default contact;
