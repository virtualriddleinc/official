import { Metadata } from 'next';

// Pricing sayfası metadata generation function
async function getPricingData() {
  return {
    title: 'Fiyatlandırma - Virtual Riddle Danışmanlık Hizmetleri',
    description: 'Virtual Riddle\'ın şeffaf fiyatlandırma planları. Dedike danışmanlık, talep bazlı hizmetler ve eğitim paketleri ile dijital dönüşümünüzü destekliyoruz.',
    packages: [
      'Dedike Danışmanlık Paketi',
      'Talep Bazlı Danışmanlık',
      'Eğitim Paketi'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPricingData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle fiyatlandırma',
      'Atlassian danışmanlık fiyatları',
      'Jira danışmanlık ücretleri',
      'Confluence danışmanlık fiyatları',
      'DevOps danışmanlık paketleri',
      'Agile dönüşüm fiyatları',
      'dijital dönüşüm danışmanlığı',
      'teknoloji danışmanlık paketleri',
      'İstanbul teknoloji danışmanlığı'
    ],
    alternates: {
      canonical: '/pricing'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Fiyatlandırma',
      'article:tag': 'Fiyatlandırma, Danışmanlık Paketleri, Virtual Riddle'
    }
  }
} 