import { Metadata } from 'next';

// Metadata generation function
async function getConsultingData() {
  return {
    title: 'Atlassian Danışmanlığı',
    description: 'Atlassian araçları hakkında uzman danışmanlık hizmetimizle, kurumsal süreçlerinizi optimize edin ve verimliliğinizi %40\'a kadar artırın',
    services: ['Jira', 'Confluence', 'Bitbucket', 'Agile Dönüşüm']
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getConsultingData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian danışmanlığı',
      'Jira danışmanlığı',
      'Confluence danışmanlığı',
      'Agile dönüşüm',
      'Scrum danışmanlığı',
      'Atlassian Türkiye',
      'yazılım süreç danışmanlığı',
      'kurumsal verimlilik',
      'proje yönetimi danışmanlığı'
    ],
    alternates: {
      canonical: '/solutions/consulting'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Danışmanlık',
      'article:tag': data.services.join(', ')
    }
  }
} 