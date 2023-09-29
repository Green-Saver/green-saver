"use client";

// react
import * as React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// @mui
import { Container, Typography, Button } from "@mui/material";

// component
import ResponsiveAppBar from "../../components/app_bar";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container className="bg-white py-4 mx-auto mb-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-8 self-center">
            <Typography className="pt-6 font-black sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl" sx={{ color: "#074C06" }}>
              Daur Ulang Menjadi Lebih Mudah
            </Typography>
            <Typography className="sm:text-sm md:text-sm lg:text-base xl:text-base pb-8" sx={{ color: "#40AD3E" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officiis totam distinctio quam itaque corrupti provident quaerat nobis fugit ad alias laboriosam, placeat pariatur odit recusandae voluptatem porro, rerum fuga!
              Officiis libero velit consectetur accusantium tempore. Reprehenderit optio atque autem.
            </Typography>
          </div>
          <Image width={500} height={100} src="/illustration.png" alt="Illustration" className="object-cover mx-auto my-auto"></Image>
        </div>
        <Link href="/about">
          <Button variant="outlined" size="large" color="success" sx={{ "& button": { m: 1 }, color: "#40AD3E", borderColor: "#40AD3E" }}>
            Selengkapnya
          </Button>
        </Link>
      </Container>
      <Footer></Footer>
    </div>
  );
}
