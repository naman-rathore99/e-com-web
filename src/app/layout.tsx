import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

import Navbar from "@/components/global/large-navbar";
import Footer from "@/components/global/large-footer";
import SubNavbar from "@/components/global/sub-navbar";
import UpperNavbar from "@/components/global/upper-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AYNcore E-commerce",
  description: "Made with AYNcore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lightBackground w-screen relative`}>
        <div className='w-full  bg-[#232F3E] text-white'>
          <UpperNavbar />
          <Navbar />


          <SubNavbar />
        </div>
        <main className='main flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
