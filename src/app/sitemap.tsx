// Retrieving domain name from environment variables
const DNS_WEB = process.env.DNS_WEB;

// Setting up sitemap update frequency
export const revalidate = 86400; // 24 hours in seconds

// Dynamic sitemap generation
export default async function sitemap() {
    // Defining site routes with their metadata
    const routes = [
        {
          url: `${DNS_WEB}/`,
          lastModified: new Date(),
          changeFrequency: 'Dayly',
          priority: 1, // Maximum priority for homepage
        }
      ];

      return routes
}