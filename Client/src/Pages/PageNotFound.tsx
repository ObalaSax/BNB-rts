import { Box, Button, Typography } from "@mui/material";

function PageNotFound() {
  return (
    <Box padding={2}>
      <Button variant="contained" href="/">
        Go Home
      </Button>
      <Box textAlign="center" marginTop={5} boxShadow={4}>
        <Typography variant="h1" color="initial">
          404 - Page Not Found
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;
