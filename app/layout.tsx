import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "TravelTrucks — Campervan Rentals",
  description: "Find your dream camper and hit the road. Browse photos, features, reviews, and book online.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700", "900"],
  variable: "--font-family",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        
        <Header/>
       
          {children}
         
      </body>
    </html>
  );
}
