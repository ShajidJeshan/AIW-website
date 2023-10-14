import { Container, Stack, Typography, useTheme } from "@mui/material";

const Screenshot = ({ product }) => {
  const { palette } = useTheme();
  return (
    <Container maxWidth="lg">
      <Stack mt={10} alignItems="center" textAlign="center">
        <Typography
          fontWeight={700}
          variant="h3"
          fontStyle="italic"
          color="primary.main"
          mb={6}
        >
          {product === "builder"
            ? "Build smarter, build faster"
            : "Visualise insights, verify processes"}
        </Typography>
        <img
          style={{ width: "80%" }}
          src={`/assets/products/${product}_ss.png`}
          alt="builder ss"
        />
        {product === "builder" ? (
          <Typography mt={10} variant="h4">
            Unravel the{" "}
            <span style={{ color: palette.primary.main }}>
              power of no-code,
            </span>
            <br />
            simplified for everyone
          </Typography>
        ) : (
          <Typography mt={10} variant="h4">
            Kick start your workflow automation <br />
            <span
              style={{
                color: palette.primary.main,
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              Design, Manage and Coordinate
            </span>
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default Screenshot;
