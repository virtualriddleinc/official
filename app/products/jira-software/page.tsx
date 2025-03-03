"use client";

import Link from "next/link";
import { CommandLineIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Suspense } from 'react';

// Özellik kartı komponenti
const FeatureCard = ({ 
  Icon, 
  title, 
  description 
}: { 
  Icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-white transition-colors">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue" />
    </div>
    <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
    <p className="text-gray">{description}</p>
  </div>
);

// Entegrasyon kartı komponenti
const IntegrationCard = ({ index }: { index: number }) => (
  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-white transition-colors">
    <div className="w-full h-8 sm:h-12 bg-gray-100 rounded animate-pulse"></div>
  </div>
);

export default function JiraSoftwarePage() {
  const features = [
    {
      Icon: CommandLineIcon,
      title: "Çevik Planlama",
      description: "Scrum, Kanban veya kendi özel iş akışınızla projelerinizi planlayın ve takip edin."
    },
    {
      Icon: UsersIcon,
      title: "Takım İş Birliği",
      description: "Ekip üyeleri arasında sorunsuz iletişim ve iş birliği sağlayın."
    },
    {
      Icon: ChartBarIcon,
      title: "Gelişmiş Raporlama",
      description: "Gerçek zamanlı metrikler ve özelleştirilebilir raporlarla projenizi analiz edin."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/icons/jira-software.svg"
                alt="Jira Software"
                width={40}
                height={40}
                priority
                quality={100}
                loading="eager"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Jira Software
              </h1>
            </div>
            <p className="text-white text-lg mb-8">
              Yapay zeka destekli DevOps çözümlerimizle süreçlerinizi otomatikleştirin ve verimliliğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="#"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors text-center"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-blue-900 border border-blue-800 hover:border-white transition-all duration-200">
                <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <feature.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 mb-6">{feature.description}</p>
                <div className="flex items-center text-white group/link">
                  <span className="text-sm font-medium">İncele</span>
                  <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Güçlü Entegrasyonlar
            </h2>
            <p className="text-gray">
              Jira Software, en sevdiğiniz geliştirme araçlarıyla sorunsuz entegre olur.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white p-6 flex items-center justify-center
                border border-gray-100 hover:border-white transition-all duration-200 hover:shadow-xl"
              >
                <Image
                  src={`/images/integration-${i}.webp`}
                  alt={`Integration ${i}`}
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jira Software ile Tanışın
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Ücretsiz deneme sürümüyle Jira Software'in tüm özelliklerini keşfedin.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-4 bg-white text-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Hemen Başlayın
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 