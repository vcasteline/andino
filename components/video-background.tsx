"use client";
import { Heading } from "./ui/heading";
import { Button } from "./ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";

export const VideoBackground = () => {
  return (
    <div className="relative w-full h-[650px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        // style={{width: '100%', height: '0px'}}
        className="relative top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://utfs.io/f/74dc6dec-6316-44e5-bfe5-56ff4f180700-ayykj0.mp4" type="video/mp4" />
      </video>

      <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0">
        <div className="absolute md:top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit text-center">
          <div className="py-8 px-16 flex flex-col gap-3">
            <p className="uppercase text-secondary font-medium tracking-wide">
              Best B2B marketplace from South America to the us
            </p>
            <div className="flex text-secondary flex-col gap-2 mb-2">
              <Heading size="h1">Buy from Top Andino Businesses</Heading>
              <Heading size="h3">
                Selection of over 100 products at the best value.
              </Heading>
            </div>
            <Link href={routes.products}>
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};