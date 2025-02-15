import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//Layouts
import Navigator from "@/layouts/Navigator";
import Banner from "@/layouts/Banner";
import Footer from "@/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inquebrantables UNAHUR",
  description: "Centro de estudiantes de la Universidad Nacional de Hurlingham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100`}
      >
      <Navigator/>
      <Banner/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
