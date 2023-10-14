import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const HighlightedText = ({
  children,
  variant = "h3",
  color = "primary.main",
  invert = false,
  ...props
}) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <Box display="inline-block" {...props} ref={ref}>
      <Stack
        className={onScreen ? "active" : ""}
        direction="row"
        position="relative"
        sx={{
          "& .MuiTypography-root": {
            transition: "1s",
            transitionDelay: ".2s",
          },
          "& .bg": {
            transition: "1s",
            transitionDelay: ".2s",
          },

          "&.active": {
            "& .MuiTypography-root": {
              color: invert ? "black" : "white",
              p: 1,
            },
            "& .bg": {
              width: "100%",
            },
          },
        }}
      >
        <Typography fontWeight={700} variant={variant}>
          {children}
        </Typography>
        <Box
          className="bg"
          sx={{
            backgroundColor: color,
            width: "0%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
          }}
        />
      </Stack>
    </Box>
  );
};

export default HighlightedText;
