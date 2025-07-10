import { Metadata } from 'next';

// Contact sayfası metadata generation function
async function getContactData() {
  return {
    title: 'İletişim - Virtual Riddle Teknoloji A.Ş.',
    description: 'Virtual Riddle ile iletişime geçin. Atlassian danışmanlığı, dijital dönüşüm ve teknoloji çözümleri için bizimle iletişime geçin.',
    contact: {
      email: 'info@virtualriddle.com',
      address: 'Maslak Mahallesi AOS 55. Sokak 42 Maslak B Blok No: 4/542, Sarıyer, İstanbul'
    }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle iletişim',
      'Atlassian danışmanlığı iletişim',
      'dijital dönüşüm iletişim',
      'teknoloji danışmanlığı',
      'Jira danışmanlığı',
      'Confluence danışmanlığı',
      'İstanbul teknoloji şirketi',
      'Maslak teknoloji danışmanlığı'
    ],
    alternates: {
      canonical: '/contact'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'İletişim',
      'article:tag': 'İletişim, Virtual Riddle, Atlassian Danışmanlığı'
    }
  }
} 