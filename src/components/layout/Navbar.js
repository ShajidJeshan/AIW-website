import { useState, useContext } from "react";
import { Box, Button, Drawer, Stack, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { SignupModalContext } from "../../context/ModalContext";

const Links = () => (
  <>
    <Link href="/">Home</Link>
    <Link href="/marketplace">Marketplace</Link>
    <Link href="/products">Products</Link>
    <Link href="/contact">Contact us</Link>
  </>
);

const SignupBtn = (props) => (
  <Button
    {...props}
    sx={{
      display: {
        xs: "none",
        // sm: "flex",
      },
    }}
    size="large"
    variant="contained"
  >
    Signup
  </Button>
);

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { openModal } = useContext(SignupModalContext);
  return (
    <>
      <Stack
        width="100%"
        mt={3}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <a>
            <Image src="/assets/logo.png" width="90px" height={45} />
          </a>
        </Link>
        <Stack
          direction="row"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            "& > *": {
              color: "white",
              textDecoration: "none",
              mx: 2,
            },
          }}
        >
          <Links />
        </Stack>
        <SignupBtn onClick={openModal} />
        <IconButton
          onClick={() => setShow(true)}
          sx={{
            color: "white",
            display: {
              md: "none",
            },
          }}
        >
          <MenuIcon color="inherit" />
        </IconButton>
      </Stack>
      <Drawer
        onClose={openModal}
        anchor="right"
        open={show}
        PaperProps={{
          sx: {
            p: 5,
            minWidth: 250,
            bgcolor: "common.black",
            overflow: "visible",
          },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            position: "relative",
            "& > *": {
              color: "white",
              textDecoration: "none",
              typography: "h6",
            },
          }}
        >
          <CancelIcon
            onClick={() => setShow(false)}
            fontSize="large"
            sx={{
              position: "absolute",
              top: -15,
              left: -58,
              color: "GrayText",
            }}
          />
          <Links />
          <Box />
          {/* <Button
            onClick={() => {
              setShow(false);
              setShowSignupModal(true);
            }}
            sx={{ typography: "body1" }}
            variant="contained"
            size="large"
          >
            Sign up
          </Button> */}
        </Stack>
      </Drawer>
    </>
  );
}
