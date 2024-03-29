import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simpson Portfolio",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/* <body className={inter.className}> */}
    <head className='bg-neutral-200 dark:bg-black dark:text-white'> 
   
{/*  */}

    
    <body className=" background-color dark:bg-black dark:text-white justify-center items-center h-screen pt-36">
    
      
      <main className=  ' dark:bg-black dark:text-white h-auto flex flex-col justify-center items-center'>{children}</main>
      </body>
      </head>
  </html>
  );
}
