import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Studio",
  description: "Premium dental care with a modern approach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <InteractiveBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dental Studio",
              "image": "https://dentalstudio.com/hero-bg.png",
              "logo": "https://dentalstudio.com/logo.png",
              "description": "Premium cosmetic and implant dentistry provider.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Dental Avenue",
                "addressLocality": "Medical District",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "telephone": "+15551234567",
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}