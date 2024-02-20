import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/* <body className={inter.className}> */}
    <head> 
    
    
    <body className=" justify-center items-center h-screen pt-36">
      <Navbar />
      
      <main className=  'h-auto flex flex-col justify-center items-center'>{children}</main>
      </body>
      </head>
  </html>
  );
}
