// Retrieving domain name from environment variables
const DNS_WEB = process.env.DNS_WEB;

// Configuration of indexing rules for robots
export default function robots() {
    return {
      rules: {
        userAgent: '*', // Applies to all robots
        allow: '/',     // Allows indexing of the entire site
      },
      // Indicating sitemap location for search engines
      sitemap: `${DNS_WEB}/sitemap.xml`,
    };
  }
  