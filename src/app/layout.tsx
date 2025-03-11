import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';

// Retrieving environments variables
const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID as string;
const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID as string;

if (!GOOGLE_TAG_MANAGER_ID) {
  throw new Error('GOOGLE_TAG_MANAGER_ID is not defined in environment variables');
}

if (!CLARITY_PROJECT_ID) {
  throw new Error('CLARITY_PROJECT_ID is not defined in environment variables');
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

        {/* Microsoft Clarity integration */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
