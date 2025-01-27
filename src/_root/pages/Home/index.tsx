import React from 'react'
import { Animate } from 'react-simple-animate';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import Carusel from './components/Carousel';
import { ArrowUpRight } from 'lucide-react';
import Card from './components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselCard from './components/CarouselCard';
const cards = Array(5).fill(null);
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F6F9FF] flex gap-3 items-center justify-center p-4">
        <Carousel className="w-[1290px]">
          <CarouselContent className="">
            {Array.from({ length:5  }).map((_, index) => (
              <CarouselItem key="3" className=" md:basis-1/ lg:basis-1/3">
                <div className="">
                  <CarouselCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-[50%] flex gap-2">

          <CarouselPrevious />
          <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Home