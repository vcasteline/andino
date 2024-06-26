"use client";

import { images } from "@/lib/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading } from "./ui/heading";
import { Button } from "./ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";

export const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(
      () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
      7000
    );

    return () => clearInterval(timer);
  }, [currentImageIndex, hasInteracted]);

  return (
    <div className="mb-4">
      <div className="relative">
        <div
          key={currentImageIndex}
          className="relative w-full h-[500px] animate-fade-in"
        >
          <Image
            src={images[currentImageIndex]}
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0">
          <div className="absolute md:top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit text-center">
            <div className="py-8 px-16 flex flex-col gap-3">
              <p className="uppercase text-secondary font-medium tracking-wide">Best B2B Solution from latin america to the us</p>
              <div className="flex text-secondary flex-col gap-2 mb-2">
                
                <Heading size="h1"> Buy from Top Andino Businesses</Heading> 
                
                <Heading size="h3">Selection of over 100 products at the best value.</Heading>
              </div>
              <Link href={routes.products}>
                <Button>Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentImageIndex(i);
              setHasInteracted(true);
            }}
          >
            <SlideShow.Indicator
              filled={currentImageIndex === i ? true : false}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Indicator = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full border-primary border-2 mt-2",
        filled && "bg-primary"
      )}
    />
  );
};

SlideShow.Indicator = Indicator;
