import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Toaster } from "@/components/ui/Toaster";

export const metadata = {
  title: "Andino - B2B Marketplace",
  description: "An online marketplace featuring high-quality South American goods such as Pima Cotton Towels and more. We are creating a trading channel between Andean region producers and US consumers.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            defer
            data-domain="andinomarketplace.com"
            src="https://plausible.io/js/script.tagged-events.js"
          ></script>
        </head>
        <body>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
