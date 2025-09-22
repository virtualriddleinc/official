import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
  optimizeFonts: true
})

export const metadata: Metadata = {
  title: {
    template: '%s | Virtual Riddle',
    default: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri'
  },
  description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
  keywords: [
    'Atlassian', 'Jira', 'Confluence', 'yazılım danışmanlığı', 'Türkiye',
    'Claude AI', 'MCP entegrasyonu', 'yapay zeka', 'AI asistan',
    'Atlassian danışmanlığı', 'Jira danışmanlığı', 'Confluence danışmanlığı',
    'DevOps', 'Agile', 'proje yönetimi', 'kurumsal çözümler',
    'Remote MCP Server', 'Anthropic Claude', 'AI iş akışları'
  ],
  authors: [{ name: 'Virtual Riddle' }],
  creator: 'Virtual Riddle',
  publisher: 'Virtual Riddle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://virtualriddle.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://virtualriddle.com',
    title: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri',
    description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
    siteName: 'Virtual Riddle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri',
    description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
  },
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#004CFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts are loaded by Next.js font optimization */}
        
        {/* CSS is automatically loaded by Next.js */}
        
        {/* Preload critical resources to reduce network dependency chain */}
        <link rel="preload" href="/contact" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/free-discovery" as="fetch" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/vr-showcase/solutions-1.svg" as="image" type="image/svg+xml" />
        
        
        {/* Fonts are automatically preloaded by Next.js font optimization */}
        
        {/* Critical CSS inline - Above the fold styles */}
        <style>{`
          /* Critical above-the-fold styles */
          * { 
            box-sizing: border-box; 
          }
          
          html { 
            scroll-behavior: smooth; 
            font-display: swap; 
          }
          
          body { 
            background: #fff; 
            color: #172B4D; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            text-rendering: optimizeSpeed;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Hero section critical styles */
          .hero-section { 
            background: linear-gradient(90deg, #004BB3, #0052CC, #004BB3);
            min-height: 100vh;
            position: relative;
            overflow: hidden;
          }
          
          /* Critical typography */
          h1 { 
            font-size: 2.75rem; 
            font-weight: bold; 
            color: white; 
            margin: 0;
            line-height: 1.1;
            letter-spacing: -0.025em;
          }
          
          h2 { 
            font-size: 2rem; 
            font-weight: 600; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.25;
            letter-spacing: -0.02em;
          }
          
          h3 { 
            font-size: 1.5rem; 
            font-weight: 600; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.33;
            letter-spacing: -0.015em;
          }
          
          h4 { 
            font-size: 1.25rem; 
            font-weight: 600; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.4;
            letter-spacing: -0.01em;
          }
          
          /* Critical layout */
          .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 1rem; 
          }
          
          /* Critical button styles */
          .btn-primary {
            background: white;
            color: #004BB3;
            padding: 0.875rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            transition: background-color 0.2s;
            border: none;
            cursor: pointer;
          }
          
          .btn-primary:hover {
            background: #004BB3;
            color: white;
          }
          
          .btn-secondary {
            background: transparent;
            color: white;
            padding: 0.875rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            transition: all 0.2s;
            border: 2px solid white;
            cursor: pointer;
          }
          
          .btn-secondary:hover {
            background: white;
            color: #004BB3;
          }
          
          /* Critical navigation styles */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .navbar-brand {
            font-size: 1.5rem;
            font-weight: 700;
            color: #172B4D;
            text-decoration: none;
          }
          
          /* Critical grid layouts */
          .grid {
            display: grid;
          }
          
          .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          
          .gap-4 { gap: 1rem; }
          .gap-6 { gap: 1.5rem; }
          .gap-8 { gap: 2rem; }
          
          /* Critical flexbox utilities */
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .justify-between { justify-content: space-between; }
          
          /* Critical spacing */
          .p-4 { padding: 1rem; }
          .p-6 { padding: 1.5rem; }
          .p-8 { padding: 2rem; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
          .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          
          .m-0 { margin: 0; }
          .mt-4 { margin-top: 1rem; }
          .mt-8 { margin-top: 2rem; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-8 { margin-bottom: 2rem; }
          
          /* Critical text styles */
          .text-center { text-align: center; }
          .text-left { text-align: left; }
          .text-white { color: white; }
          .text-blue-600 { color: #0052CC; }
          .text-gray-600 { color: #6B7280; }
          .text-gray-800 { color: #1F2937; }
          
          .font-bold { font-weight: 700; }
          .font-semibold { font-weight: 600; }
          .font-medium { font-weight: 500; }
          
          .text-sm { font-size: 0.875rem; }
          .text-base { font-size: 1rem; }
          .text-lg { font-size: 1.125rem; }
          .text-xl { font-size: 1.25rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
          .text-5xl { font-size: 3rem; }
          
          /* Critical background styles */
          .bg-white { background-color: white; }
          .bg-blue-600 { background-color: #0052CC; }
          .bg-gray-50 { background-color: #F9FAFB; }
          .bg-gray-100 { background-color: #F3F4F6; }
          
          /* Critical positioning */
          .relative { position: relative; }
          .absolute { position: absolute; }
          .fixed { position: fixed; }
          .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
          
          /* Critical overflow */
          .overflow-hidden { overflow: hidden; }
          .overflow-x-hidden { overflow-x: hidden; }
          .overflow-y-hidden { overflow-y: hidden; }
          
          /* Critical z-index */
          .z-10 { z-index: 10; }
          .z-20 { z-index: 20; }
          .z-30 { z-index: 30; }
          .z-40 { z-index: 40; }
          .z-50 { z-index: 50; }
          
          /* Critical width/height */
          .w-full { width: 100%; }
          .h-full { height: 100%; }
          .min-h-screen { min-height: 100vh; }
          
          /* Critical border radius */
          .rounded { border-radius: 0.25rem; }
          .rounded-lg { border-radius: 0.5rem; }
          .rounded-xl { border-radius: 0.75rem; }
          .rounded-full { border-radius: 9999px; }
          
          /* Critical shadows */
          .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
          .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
          .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          
          /* Loading states */
          .loading-skeleton { 
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); 
            background-size: 200% 100%; 
            animation: loading 1.5s infinite; 
          }
          
          @keyframes loading { 
            0% { background-position: 200% 0; } 
            100% { background-position: -200% 0; } 
          }
          
          /* Critical responsive */
          @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            h3 { font-size: 1.25rem; }
            .container { padding: 0 0.5rem; }
            .grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .grid-cols-3 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .text-5xl { font-size: 2.5rem; }
            .text-4xl { font-size: 2rem; }
            .py-16 { padding-top: 2rem; padding-bottom: 2rem; }
          }
          
          @media (max-width: 640px) {
            .px-4 { padding-left: 0.5rem; padding-right: 0.5rem; }
            .p-4 { padding: 0.5rem; }
            .p-6 { padding: 1rem; }
            .p-8 { padding: 1.5rem; }
          }
        `}</style>
        {/* rel="me" içeren doğrulama linki */}
        <link rel="me" href="https://sosyal.teknofest.app/@virtualriddle" />
        
        {/* Non-critical CSS - Load asynchronously */}
        <link 
          rel="preload" 
          href="/_next/static/css/app/globals.css" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/app/globals.css" />
        </noscript>
      </head>
      <body className="min-h-screen bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
