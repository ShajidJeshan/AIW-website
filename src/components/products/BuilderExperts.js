import { useContext } from "react";
import { Container, Stack, Typography, Button } from "@mui/material";
import { SignupModalContext } from "../../context/ModalContext";

const BuilderExperts = () => {
  const { openModal } = useContext(SignupModalContext);
  return (
    <Container maxWidth="lg">
      <Stack
        my={10}
        spacing={{ xs: 2, lg: 5 }}
        alignItems="center"
        textAlign="center"
      >
        <Typography
          sx={{
            typography: {
              xs: "h5",
              lg: "h4",
            },
          }}
        >
          Choose from a series of categorised tasks according to <br />
          your schedule and push your skill set to a higher level
        </Typography>
        <Button
          disableElevation
          size="large"
          variant="contained"
          color="secondary"
          onClick={openModal}
        >
          Become an expert
        </Button>
      </Stack>
    </Container>
  );
};

export default BuilderExperts;
