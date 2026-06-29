import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hilltone Resort Manali | Luxury Stay in Manali",
  description:
    "Experience luxury stay at Hilltone Resort Manali with premium rooms, family suites, mountain views, dining, indoor recreation and top-class hospitality.",

  keywords: [
    "Hilltone Resort Manali",
    "Luxury Resort in Manali",
    "Best Resort in Manali",
    "Family Resort Manali",
    "Mountain View Resort",
    "Luxury Hotel Manali",
    "Manali Resort",
    "Premium Stay in Manali",
  ],

  openGraph: {
    title: "Hilltone Resort Manali",
    description:
      "Luxury stay in Manali with premium rooms, mountain views and family suites.",
    url: "https://hilltoneresortmanali.in",
    siteName: "Hilltone Resort Manali",
    images: [
      {
        url: "/images/hill-front.jpg",
        width: 1200,
        height: 630,
        alt: "Hilltone Resort Manali",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hilltone Resort Manali",
    description:
      "Luxury stay in Manali with premium rooms and mountain views.",
    images: ["/images/hill-front.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}