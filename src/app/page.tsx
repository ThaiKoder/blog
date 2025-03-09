import Script from "next/script";

let jsonLd =
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ThaiKoder",
  "url": "https://thaikoder.dev/"
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-500 text-white">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Texte centré au milieu */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-center text-2xl">ThaiKoder</h1>
        
      </main>
      {/* Texte en bas de page */}
      <footer className="text-center p-4">
        <p>En construction. Veuillez revenir un peu plus tard.</p>
      </footer>
    </div>
  );
}