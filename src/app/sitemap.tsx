const DNS_WEB = process.env.DNS_WEB;
export const revalidate = 86400; // 24 heures en secondes

export default async function sitemap() {
    const routes = [
        {
          url: `${DNS_WEB}/`,
          lastModified: new Date(),
          changeFrequency: 'Dayly',
          priority: 1,
        }
      ];

      return routes
      
}