import { NavBar } from "@/components/navbar";
import "../../../styles/globals.css";
import { Footer } from "@/components/footer";
import React from "react";
import { FloatingStar } from "@/components/floating-star";

export const metadata = {
  title: "Andino - B2B Marketplace",
  description: "An online marketplace featuring high-quality South American goods such as Pima Cotton Towels and more. We are creating a trading channel between Andean region producers and US consumers.",
};

export default async function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col ">
      {/* <FloatingStar /> */}
      <NavBar showSecondAnnouncementBar={true} />
      <div className="h-full flex-1 mb-8">{children}</div>
      <Footer />
    </div>
  );
}
