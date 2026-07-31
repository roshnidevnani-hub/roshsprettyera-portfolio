import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Dancing_Script,
  Quicksand,
} from "next/font/google";

// @ts-ignore: allow side-effect CSS import in Next.js app directory
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roshsprettyera.com"),

  title: {
    default: "roshsprettyera | UGC Creator",
    template: "%s | roshsprettyera",
  },

  description:
    "UGC creator creating aesthetic, authentic and high-converting content for beauty, skincare, fashion and lifestyle brands.",

  applicationName: "roshsprettyera",

  authors: [
    {
      name: "Roshni",
    },
  ],

  creator: "Roshni",

  publisher: "roshsprettyera",

  keywords: [
    "UGC Creator",
    "Content Creator",
    "Beauty Creator",
    "Lifestyle Creator",
    "Fashion Creator",
    "Skincare Creator",
    "Brand Collaborations",
    "Instagram Creator",
    "Video Creator",
    "Social Media Creator",
    "roshsprettyera",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "roshsprettyera | UGC Creator",

    description:
      "Creating aesthetic, authentic and engaging UGC for beauty, skincare, fashion and lifestyle brands.",

    url: "https://www.roshsprettyera.com",

    siteName: "roshsprettyera",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "roshsprettyera Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "roshsprettyera | UGC Creator",

    description:
      "Creating aesthetic and authentic UGC content for brands.",

    images: ["/hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7E8EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dancing.variable} ${quicksand.variable} font-body antialiased`}
      >
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}