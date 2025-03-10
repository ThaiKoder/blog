import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

// Retrieving Google Tag Manager ID from environment variables
const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID as string;

if (!GOOGLE_TAG_MANAGER_ID) {
  throw new Error('GOOGLE_TAG_MANAGER_ID is not defined in environment variables');
}

// Configuration of Geist Sans font for general text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configuration of Geist Mono font for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global site metadata
export const metadata: Metadata = {
  title: "ThaiKoder",
  description: "Blog de ThaiKoder",
};

// Main Layout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Setting the site language to French
    <html lang="fr">
      <body
        // Applying custom fonts and anti-aliasing
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Google Analytics integration */}
        <GoogleAnalytics gaId={GOOGLE_TAG_MANAGER_ID} />
      </body>
    </html>
  );
}
