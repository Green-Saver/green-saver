"use client";

import Navbar from "@/components/navbar";
import FooterLanding from "@/components/footer";
import Image from "next/image";

import ImageSlider from "@/components/image_slider";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const images = ["/images/picture1.jpg", "/images/picture2.jpg", "/images/picture3.jpg", "/images/picture4.jpg"];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <div className="max-w-screen-xl px-4 mx-auto lg:py-24 lg:px-6 max-[640px]:mt-24 sm:mt-24 md:mt-24 lg:mt-12 xl:mt-12">
          <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white xl:pt-0 lg:pt-0 md:pt-12 sm:pt-12 pt-12">About Us</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-2xl">Were founded in 2023, with offices in Batam, Indonesia.</p>
            <p className="mb-5 font-base text-gray-500 sm:text-lg">
              At GreenSaver, we are passionate about promoting a sustainable future and making recycling an effortless part of your daily routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and
              businesses to embrace recycling practices that benefit both our environment and our communities
            </p>
          </div>

          <ImageSlider images={images} />

          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center justify-items-center gap-8 mt-12">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/images/compressed.jpg" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Rizky Haksono</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hacker</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="https://github.com/rizkyhaksono"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Add Friend
                  </a>

                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/illustration.png" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Annisa</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hacker</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="https://github.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add friend
                  </a>
                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/illustration.png" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yoel</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hacker</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="https://github.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add friend
                  </a>
                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/illustration.png" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Johan</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">PM / Hustler</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="https://github.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add friend
                  </a>
                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/illustration.png" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Risma</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hipster</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="https://github.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add friend
                  </a>
                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-10">
                <Image src="/illustration.png" className="w-24 h-24 mb-3 rounded-full shadow-lg" alt="Rizky" width={300} height={300}></Image>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Arfi</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Hipster</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href="https://github.com/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add friend
                  </a>
                  <a
                    href="https://github.com/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
