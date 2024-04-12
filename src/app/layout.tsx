"use client";

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "Semo",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SessionProvider>
          <NavBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
