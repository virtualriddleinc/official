"use client";

import Link from "next/link";

export default function JiraWorkManagementPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Jira Work Management
            </h1>
            <p className="text-xl text-gray mb-8">
              İş ekipleri için güçlü proje ve görev yönetimi
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="#"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
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
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Esnek İş Akışları</h3>
              <p className="text-gray">
                Her departman için özelleştirilmiş iş akışları ve görev yönetimi.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Proje Takvimi</h3>
              <p className="text-gray">
                Görsel takvim görünümü ile projeleri ve görevleri planlayın.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Form Yönetimi</h3>
              <p className="text-gray">
                Özelleştirilebilir formlar ile veri toplama ve iş takibi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Her Departman İçin Çözümler
            </h2>
            <p className="text-gray">
              Jira Work Management, farklı departmanların ihtiyaçlarına uygun çözümler sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Marketing */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-dark mb-2">Marketing</h3>
              <p className="text-gray text-sm">Kampanya yönetimi ve içerik planlaması</p>
            </div>
            {/* HR */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-dark mb-2">İK</h3>
              <p className="text-gray text-sm">İşe alım ve çalışan yönetimi</p>
            </div>
            {/* Finance */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-dark mb-2">Finans</h3>
              <p className="text-gray text-sm">Bütçe takibi ve finansal raporlama</p>
            </div>
            {/* Operations */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-dark mb-2">Operasyon</h3>
              <p className="text-gray text-sm">Süreç yönetimi ve optimizasyonu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              İş Yönetimini Modernleştirin
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Jira Work Management ile ekibinizin verimliliğini artırın.
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
    </div>
  );
} 