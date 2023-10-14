import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
  IconButton,
  OutlinedInput,
} from "@mui/material";
// import ScrollAnimation from "react-animate-on-scroll";
import CloseIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const Option = ({ active, text, ...props }) => (
  <Stack
    {...props}
    width="100%"
    p={2}
    border={1.5}
    sx={{
      cursor: "pointer",
    }}
    borderColor="#C7C7C7"
    color={active ? "white" : "primary.main"}
    alignItems="center"
    justifyContent="center"
    bgcolor={active ? "primary.main" : "#fff"}
  >
    <Typography variant="subtitle1">{text}</Typography>
  </Stack>
);

const SignupModal = ({ onClose }) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) =>
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));

  const handleSelect = (opt) => setSelected(opt);

  const handleProceed = (e) => {
    if (selected === "Expert") {
      setProceed(true);
    } else {
      //   redirect
    }
  };

  const handleSubmit = async () => {
    const empty = "";
    Object.values(form).forEach((val) => (empty = val));
    if (!empty) return setError(true);

    await axios.post("https://usebasin.com/f/fcce29aa5f25", {
      ...form,
    });
    setSubmitted(true);
    setTimeout(onClose, 1000);
  };
  return (
    <Dialog open fullWidth onClose={onClose}>
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Sign up</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center">
          <Stack spacing={2} width="100%">
            {!proceed ? (
              <>
                {/* <ScrollAnimation delay={200} animateIn="slideInUp"> */}
                <Option
                  active={selected === "Enterprise"}
                  text="Enterprise"
                  onClick={() => handleSelect("Enterprise")}
                />
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation delay={400} animateIn="slideInUp"> */}
                <Option
                  active={selected === "Expert"}
                  text="Expert"
                  onClick={() => handleSelect("Expert")}
                />
                {/* </ScrollAnimation> */}
              </>
            ) : (
              <>
                {/* <ScrollAnimation delay={200} animateIn="slideInUp"> */}
                <OutlinedInput
                  value={form.fullName}
                  name="fullName"
                  onChange={handleChange}
                  fullWidth
                  disabled={submitted}
                  placeholder="Full name"
                />
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation delay={200} animateIn="slideInUp"> */}
                <OutlinedInput
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                  fullWidth
                  disabled={submitted}
                  placeholder="Email address"
                />
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation delay={400} animateIn="slideInUp"> */}
                <OutlinedInput
                  value={form.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  fullWidth
                  disabled={submitted}
                  placeholder="Phone no."
                />
                {/* </ScrollAnimation> */}
              </>
            )}
          </Stack>
        </Stack>
        {error && (
          <Typography mt={2} color="red" variant="body2">
            Please enter the required fields
          </Typography>
        )}
      </DialogContent>
      <DialogActions sx={{ mr: 2, mb: 1 }}>
        {submitted ? (
          "Message sent"
        ) : (
          <Button
            type="submit"
            onClick={proceed ? handleSubmit : handleProceed}
            sx={{
              bgcolor: "black",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
            disableElevation
            variant="contained"
          >
            {proceed ? "Sign up" : "Proceed"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SignupModal;
