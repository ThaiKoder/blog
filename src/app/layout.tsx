import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID as string;

if (!GOOGLE_TAG_MANAGER_ID) {
  throw new Error('GOOGLE_TAG_MANAGER_ID is not defined in environment variables');
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThaiKoder",
  description: "Blog de ThaiKoder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

        <GoogleAnalytics gaId={GOOGLE_TAG_MANAGER_ID} />
      </body>
    </html>
  );
}
