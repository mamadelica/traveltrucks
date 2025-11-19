import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelTrucks — Campervan Rentals",
  description: "Find your dream camper and hit the road. Browse photos, features, reviews, and book online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
