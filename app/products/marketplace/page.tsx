"use client";

import Link from "next/link";

export default function MarketplacePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Marketplace
            </h1>
            <p className="text-xl text-gray mb-8">
              Atlassian ürünleri için binlerce uygulama ve entegrasyon
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Uygulamaları Keşfet
              </Link>
              <Link
                href="#"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Geliştirici Ol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Uygulama Kategorileri
            </h2>
            <p className="text-gray">
              İhtiyacınıza uygun uygulamaları keşfedin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Proje Yönetimi</h3>
              <p className="text-gray mb-4">
                Proje ve görev yönetimi için güçlü araçlar.
              </p>
              <Link href="#" className="text-blue hover:text-blue-600 font-medium">
                Uygulamaları Gör →
              </Link>
            </div>

            {/* Category 2 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">İletişim</h3>
              <p className="text-gray mb-4">
                Ekip iletişimi ve iş birliği uygulamaları.
              </p>
              <Link href="#" className="text-blue hover:text-blue-600 font-medium">
                Uygulamaları Gör →
              </Link>
            </div>

            {/* Category 3 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Güvenlik</h3>
              <p className="text-gray mb-4">
                Güvenlik ve uyumluluk uygulamaları.
              </p>
              <Link href="#" className="text-blue hover:text-blue-600 font-medium">
                Uygulamaları Gör →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Apps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Popüler Uygulamalar
            </h2>
            <p className="text-gray">
              En çok tercih edilen uygulamaları keşfedin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* App 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-dark mb-2">Slack</h3>
              <p className="text-gray text-sm mb-4">Gerçek zamanlı iletişim ve bildirimler</p>
              <div className="flex items-center text-sm text-gray">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>4.8 (2.5k+ değerlendirme)</span>
              </div>
            </div>

            {/* App 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-dark mb-2">GitHub</h3>
              <p className="text-gray text-sm mb-4">Kod yönetimi ve versiyon kontrolü</p>
              <div className="flex items-center text-sm text-gray">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>4.7 (1.8k+ değerlendirme)</span>
              </div>
            </div>

            {/* App 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-dark mb-2">Zoom</h3>
              <p className="text-gray text-sm mb-4">Video konferans ve toplantılar</p>
              <div className="flex items-center text-sm text-gray">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>4.6 (1.2k+ değerlendirme)</span>
              </div>
            </div>

            {/* App 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-dark mb-2">Jenkins</h3>
              <p className="text-gray text-sm mb-4">CI/CD ve otomasyon aracı</p>
              <div className="flex items-center text-sm text-gray">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>4.5 (900+ değerlendirme)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Geliştirici Olun
              </h2>
              <p className="text-blue-100 mb-8">
                Kendi uygulamanızı geliştirin ve milyonlarca kullanıcıya ulaşın
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#"
                  className="px-8 py-4 bg-white text-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Geliştirici Portalı
                </Link>
                <Link
                  href="#"
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white/10 transition-colors"
                >
                  API Dokümantasyonu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 