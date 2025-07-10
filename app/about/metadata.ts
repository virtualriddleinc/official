import { Metadata } from 'next';

// About sayfası metadata generation function
async function getAboutData() {
  return {
    title: 'Hakkımızda - Virtual Riddle Teknoloji A.Ş.',
    description: 'Virtual Riddle Teknoloji A.Ş., Atlassian sertifikalı uzmanlardan oluşan deneyimli ekibimizle Türkiye\'nin önde gelen şirketlerine Atlassian danışmanlığı hizmeti sunuyor.',
    company: 'Virtual Riddle Teknoloji A.Ş.',
    location: 'Maslak 42, İstanbul'
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle',
      'Atlassian danışmanlığı',
      'Jira danışmanlığı',
      'Confluence danışmanlığı',
      'yazılım danışmanlığı',
      'Türkiye teknoloji şirketi',
      'Maslak teknoloji',
      'dijital dönüşüm',
      'Atlassian Türkiye',
      'kurumsal çözümler'
    ],
    alternates: {
      canonical: '/about'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Kurumsal',
      'article:tag': 'Virtual Riddle, Atlassian, Danışmanlık'
    }
  }
} 