"use client";

import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

type Plan = {
  name: string;
  basePrice: number;
  maxUsers: number;
  features: string[];
};

type Plans = {
  [key: string]: Plan;
};

export default function PricingPage() {
  const [userCount, setUserCount] = useState(5);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans: Plans = {
    starter: {
      name: "Başlangıç",
      basePrice: 599,
      maxUsers: 10,
      features: [
        "Temel DevOps araçları",
        "8/5 destek",
        "100GB depolama",
        "Temel raporlama"
      ]
    },
    professional: {
      name: "Profesyonel",
      basePrice: 999,
      maxUsers: 100,
      features: [
        "Tüm DevOps araçları",
        "24/7 öncelikli destek",
        "500GB depolama",
        "Gelişmiş raporlama",
        "Özel eğitim desteği"
      ]
    },
    enterprise: {
      name: "Kurumsal",
      basePrice: 1999,
      maxUsers: 1000,
      features: [
        "Özel geliştirmeler",
        "7/24 özel destek ekibi",
        "Sınırsız depolama",
        "Özelleştirilmiş raporlama",
        "SLA garantisi"
      ]
    }
  };

  const calculatePrice = (plan: string, users: number): number => {
    return plans[plan].basePrice * users;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#253858] mb-6">
            Şeffaf Fiyatlandırma
          </h1>
          <p className="text-xl text-[#42526E] max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına uygun planı seçin, büyüdükçe ölçeklendirin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Başlangıç Paketi */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-[#253858] mb-4">Başlangıç</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0066FF]">₺2.999</span>
              <span className="text-[#42526E]">/ay</span>
            </div>
            <p className="text-[#42526E] mb-6">
              Küçük ekipler ve yeni başlayan işletmeler için ideal
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                5 kullanıcıya kadar
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Temel DevOps araçları
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                E-posta desteği
              </li>
            </ul>
            <a
              href="/contact"
              className="block w-full py-3 px-4 text-center text-[#0066FF] border-2 border-[#0066FF] rounded-lg hover:bg-blue-50 transition-colors"
            >
              Ücretsiz Dene
            </a>
          </div>

          {/* Profesyonel Paket */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-blue-100 text-[#0066FF] px-4 py-1 rounded-full text-sm font-medium">
                En Popüler
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#253858] mb-4">Profesyonel</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0066FF]">₺4.999</span>
              <span className="text-[#42526E]">/ay</span>
            </div>
            <p className="text-[#42526E] mb-6">
              Büyüyen ekipler ve orta ölçekli işletmeler için
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                20 kullanıcıya kadar
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Gelişmiş DevOps araçları
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                7/24 öncelikli destek
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Özel eğitim ve danışmanlık
              </li>
            </ul>
            <a
              href="/contact"
              className="block w-full py-3 px-4 text-center text-white bg-[#0066FF] rounded-lg hover:bg-[#0052CC] transition-colors"
            >
              Hemen Başla
            </a>
          </div>

          {/* Kurumsal Paket */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-[#253858] mb-4">Kurumsal</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#0066FF]">Özel</span>
            </div>
            <p className="text-[#42526E] mb-6">
              Büyük ekipler ve kurumsal işletmeler için
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sınırsız kullanıcı
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Özel geliştirmeler
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Özel SLA garantisi
              </li>
              <li className="flex items-center text-[#42526E]">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Yerinde destek
              </li>
            </ul>
            <a
              href="/contact"
              className="block w-full py-3 px-4 text-center text-[#0066FF] border-2 border-[#0066FF] rounded-lg hover:bg-blue-50 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#253858] mb-4">
            Özel ihtiyaçlarınız mı var?
          </h2>
          <p className="text-[#42526E] mb-8 max-w-2xl mx-auto">
            İşletmenizin özel ihtiyaçları için size özel çözümler sunalım. 
            Uzman ekibimiz sizinle iletişime geçsin.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-[#0066FF] font-medium hover:underline"
          >
            Bize Ulaşın
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 