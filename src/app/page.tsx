import Script from "next/script";

// Structured data configuration for SEO (JSON-LD)
let jsonLd =
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ThaiKoder",
  "url": "https://thaikoder.dev/"
}

// Dynamic metadata generation for the page
export async function generateMetadata() {
  return {
    title: "ThaiKoder",
    description: "Blog de ThaiKoder",
    alternates:{
      canonical: "https://thaikoder.dev/"
    }
  };
}

// Main component for the homepage
export default function Home() {
  return (
    // Main container with sky blue background and white text
    <div className="flex flex-col min-h-screen bg-sky-500 text-white">
      {/* Injecting structured data for SEO */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Main section centered vertically and horizontally */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-center text-2xl">ThaiKoder</h1>
      </main>
      {/* Footer with construction message */}
      <footer className="text-center p-4">
        <p>En construction. Veuillez revenir un peu plus tard.</p>
      </footer>
    </div>
  );
}