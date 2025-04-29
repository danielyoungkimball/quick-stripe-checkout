import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "Joji's Snack Fund 🐱",
  description: "Support Joji the cat's snack fund with a small donation. Every dollar helps keep the snack bowl full!",
  keywords: ["cat", "donation", "pets", "joji", "snacks", "fundraiser"],
  authors: [{ name: "Ace Fortuna LLC" }],
  creator: "Ace Fortuna LLC",
  publisher: "Ace Fortuna LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sendmycatmoney.com",
    title: "Joji's Snack Fund 🐱",
    description: "Support Joji the cat's snack fund with a small donation. Every dollar helps keep the snack bowl full!",
    siteName: "Joji's Snack Fund",
    images: [
      {
        url: "/joji-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Joji the cat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joji's Snack Fund 🐱",
    description: "Support Joji the cat's snack fund with a small donation. Every dollar helps keep the snack bowl full!",
    images: ["/joji-thumbnail.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${righteous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
