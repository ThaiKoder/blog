const DNS_WEB = process.env.DNS_WEB;

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${DNS_WEB}/sitemap.xml`,
    };
  }
  