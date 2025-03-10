# ThaiKoder Blog 🌐

A personal blog built with Next.js, featuring a modern and minimalist design.

## Technologies 🛠️

- **Next.js** - React framework for production
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For styling and responsive design
- **Google Analytics** - For website analytics
- **Geist Font** - Typography from Vercel (Sans and Mono variants)

## Features ⭐

- SEO optimized with metadata and JSON-LD
- Responsive design
- Google Analytics integration
- Sitemap generation
- Robots.txt configuration
- Modern typography with Geist font family

## Getting Started 🚀

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
GOOGLE_TAG_MANAGER_ID=your_gtm_id
DNS_WEB=your_website_url
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/thaikoder.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure 📁

```
src/
├── app/
│   ├── layout.tsx    # Main layout component
│   ├── page.tsx      # Homepage component
│   ├── sitemap.tsx   # Dynamic sitemap generation
│   ├── robots.tsx    # Robots.txt configuration
│   └── globals.css   # Global styles
```

## SEO Features 🎯

- Dynamic metadata generation
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📬

ThaiKoder - [https://thaikoder.dev](https://thaikoder.dev)
