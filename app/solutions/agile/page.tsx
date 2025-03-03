import Image from 'next/image';

export default function AgilePage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Agile Geliştirme <br />
              <span className="text-blue-200">Çözümleri</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Modern yazılım geliştirme süreçlerinizi optimize edin. Çevik metodolojiler ile 
              projelerinizi daha hızlı ve verimli bir şekilde hayata geçirin.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Ücretsiz Danışmanlık
              </a>
              <a href="#features" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Detaylı Bilgi
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
          <div className="relative h-full">
            <Image
              src="/images/software-development.svg"
              alt="Agile Development"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#253858] mb-4">Agile Geliştirme Avantajları</h2>
            <p className="text-xl text-[#42526E] max-w-2xl mx-auto">
              Çevik metodolojiler ile yazılım geliştirme süreçlerinizi daha verimli hale getirin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Hızlı Teslimat</h3>
              <p className="text-[#42526E]">
                Sprint'ler ile düzenli aralıklarla çalışan yazılım teslim edin, müşteri geri bildirimlerini hızla değerlendirin.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Takım İşbirliği</h3>
              <p className="text-[#42526E]">
                Daily Scrum toplantıları ve sprint planlamaları ile takım içi iletişimi güçlendirin.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Kalite Kontrol</h3>
              <p className="text-[#42526E]">
                Sprint retrospektifleri ve sürekli iyileştirme ile yazılım kalitesini artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#253858] mb-4">Agile Süreç</h2>
            <p className="text-xl text-[#42526E] max-w-2xl mx-auto">
              Scrum metodolojisi ile projelerinizi nasıl yönetiyoruz?
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Sprint Planlama</h3>
              <p className="text-[#42526E]">
                2 haftalık sprint'ler ile çalışma planı oluşturma
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Daily Scrum</h3>
              <p className="text-[#42526E]">
                Günlük 15 dakikalık durum değerlendirmeleri
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Sprint Review</h3>
              <p className="text-[#42526E]">
                Tamamlanan işlerin demo ve değerlendirmesi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#253858] mb-3">Retrospektif</h3>
              <p className="text-[#42526E]">
                Süreç iyileştirme ve geri bildirim toplantısı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Agile Dönüşümünüze Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ücretsiz danışmanlık hizmetimizle Agile süreçlerinizi optimize edelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Hemen Başlayın
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 