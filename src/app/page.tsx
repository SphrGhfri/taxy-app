// app/page.js - no directives needed
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm" >
      <Grid container spacing={2}>
        <Typography variant="h1">Home</Typography>
      </Grid>
    </Container>
  );
}