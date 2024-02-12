"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo1 from "@/public/images/logo/logo-1.svg"
const image = [
    {
        images: "/images/logo/logo-1.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-2.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-3.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-4.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-5.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-6.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-7.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-8.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-9.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-10.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-11.svg",
        alt: "img1"
    },
    {
        images: "/images/logo/logo-12.svg",
        alt: "img1"
    },

]
const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === image.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='md:py-20 py-20'>
            <div className="container">
                <h1 className='text-center text-6xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-green-300 md:text-6xl items md:px-20 pb-10  bg-clip-text text-transparent'>Build a brand and start selling in seconds</h1>
                <p className="text-center bg-gradient-to-r from-black to-gray-400 bg-clip-text font-bold text-transparent text-xl">No matter what you sell, Bird Software has everything you need to run your online store.</p>
                <div className="flex justify-center gap-x-4 py-12">
                    <Button className="bg-blue-500 text-lg font-medium hover:bg-blue-600  py-6">Get Started</Button>
                    <Button className="text-lg font-medium bg-gray-600 py-6">Contact Sales</Button>
                </div>
                <video className="rounded-xl" autoPlay loop muted>
                    <source src="./content/hero-1.mp4" type="video/mp4" />
                </video>
                <p className="font-bold bg-gradient-to-r from-purple-800 to-gray-300 text-transparent bg-clip-text text-center text-3xl py-16 -mb-8">More than 100+ brands have built their business with Bird Software.</p>
            </div>
            <div className="grid grid-cols-4 sm:flex pb-8">
                <AnimatePresence
                    custom={currentImageIndex}>
                    {image.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0.8,
                                scale: index === currentImageIndex ? 1.2 : 1,
                                transition: { duration: 0.5 },
                            }}

                            className="flex items-center justify-center sm:h-40 sm:w-40  "
                            exit={{ opacity: 0 }}
                            custom={index}
                            transition={{
                                opacity: { duration: 0.5 },
                            }}



                        >

                            <Image
                                src={image.images}
                                alt={image.alt}
                                width={200}
                                height={200}
                                className="object-contain w-[75px] sm:w-10 md:w-13 lg:w-16 xl:w-20 items-center justify-center flex mx-auto"
                            />


                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>
            
            <div className="container flex flex-col-reverse lg:grid lg:grid-cols-10 lg:gap-x-6">
                <div className="lg:col-span-4 lg:pt-6 border rounded-xl flex flex-col items-center justify-center lg:items-start lg:justify-start p-4 lg:p-0 lg:border-none">
                    <h2 className="text-2xl text-center sm:text-2xl md:text-4xl lg:text-6xl lg:text-left font-bold bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent mb-4 pb-3">From startup to enterprise, Bird has got your back.</h2>
                    <p className="text-[23px] pb-6 text-center lg:text-left">Built for all businesses and communities, Bird is the only platform you need to grow your business.</p>
                    <Button className="bg-blue-500  hover:bg-blue-600 px-12 py-6 text-md font-medium">Get Started</Button>
                </div>
                <div className="lg:col-span-6 pb-6 lg:pb-0">
                    <video className="rounded-xl" autoPlay loop muted >
                        <source src="./content/video-2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>



        </div>
    )
}

export default Hero