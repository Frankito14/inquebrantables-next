import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Layouts
import Navigator from "@/layouts/Navigator";
import Banner from "@/layouts/Banner";
import Footer from "@/layouts/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

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
        className={`${inter.variable} font-text antialiased bg-neutral-100 font-text
        absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}
      >
      <Navigator/>
      <Banner/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
