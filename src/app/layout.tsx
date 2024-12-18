import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['500'],
});


export const metadata: Metadata = {
  title: "WOAH-Messenger",
  description: "Made with Love <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geistSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
