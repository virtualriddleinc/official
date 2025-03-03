"use client";

import Link from "next/link";

export default function JiraServiceManagementPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Jira Service Management
            </h1>
            <p className="text-xl text-gray mb-8">
              Modern ekipler için yüksek hızlı ITSM çözümü
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Incident Yönetimi</h3>
              <p className="text-gray">
                Kesintileri hızlıca tespit edin ve çözün.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Change Management</h3>
              <p className="text-gray">
                Değişiklikleri güvenli ve verimli bir şekilde yönetin.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Self Servis Portal</h3>
              <p className="text-gray">
                Kullanıcı dostu portal ile hızlı destek çözümleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              ITSM'yi Modernleştirin
            </h2>
            <p className="text-gray">
              Jira Service Management ile IT operasyonlarınızı dönüştürün.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-dark mb-4">DevOps Entegrasyonu</h3>
              <p className="text-gray">Development ve operations ekiplerini tek platformda birleştirin.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Otomatik iş akışları
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Kod takibi
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Deployment izleme
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-dark mb-4">ITIL Uyumlu</h3>
              <p className="text-gray">ITIL çerçevesine uygun süreç yönetimi.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Problem yönetimi
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Asset yönetimi
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  SLA takibi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              IT Servis Yönetimini Başlatın
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Jira Service Management ile IT operasyonlarınızı optimize edin.
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