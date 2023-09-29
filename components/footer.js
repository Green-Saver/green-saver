"use client";

// react
import React from "react";

// @mui
import { Container, Grid, Typography, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#81c784",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime modi illo voluptatem nostrum adipisci quidem fuga ducimus, facere inventore quo.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              Batam
            </Typography>
            <Typography variant="body2" color="white">
              Indonesia
            </Typography>
            <Typography variant="body2" color="white">
              Infinite Learning
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/">
              {/* <Facebook /> */}
              Facebook
            </Link>
            <Link href="https://www.instagram.com/" sx={{ pl: 1, pr: 1 }}>
              {/* <Instagram /> */}
              Instagram
            </Link>
            <Link href="https://www.twitter.com/">
              {/* <Twitter /> */}
              Twitter
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/rizkyhaksono/">
              GreenSaver
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
