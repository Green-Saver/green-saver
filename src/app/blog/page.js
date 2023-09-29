"use client";

// @mui
import { Container, Typography, Card, CardActions, CardContent, CardMedia, Button, Pagination } from "@mui/material";

// next
import Image from "next/image";

// components
import ResponsiveAppBar from "../../../components/app_bar";
import Footer from "../../../components/footer";

export default function BlogPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container className="bg-white  mx-auto">
        <Typography variant="h1" className="font-black sm:text-base md:text-xl lg:text-2xl xl:text-4xl py-8" sx={{ color: "#074C06" }}>
          Most Recent Posts
        </Typography>
        <div className="grid justify-items-center gap-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140" image="illustration.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Share
              </Button>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140" image="illustration.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Share
              </Button>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140" image="illustration.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Share
              </Button>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140" image="illustration.png" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Share
              </Button>
              <Button size="small" sx={{ color: "#40AD3E" }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <Pagination count={10} shape="rounded" className="mt-10 grid justify-items-center" />
      </Container>
      <Footer></Footer>
    </div>
  );
}
