"use client";

import Link from "next/link";

const solutions = [
  {
    id: "consulting",
    name: "Atlassian Danışmanlığı",
    description: "Atlassian ürünlerinde uzmanlaşmış danışmanlık ve uygulama desteği. Süreç analizi, kurulum, entegrasyon ve özelleştirme ile uçtan uca hizmet sunuyoruz.",
    icon: "💼",
    href: "/solutions/consulting",
    advantages: [
      "Uzman Atlassian danışman ekibi",
      "Kurumsal süreçlere özel çözümler",
      "Hızlı kurulum ve entegrasyon"
    ]
  },
  {
    id: "cloud-migration",
    name: "Cloud Migration",
    description: "Bulut geçişi ve modern altyapı dönüşümü için uçtan uca hizmet. Mevcut verilerinizi güvenle taşıyın, iş sürekliliğinizi artırın.",
    icon: "☁️",
    href: "/solutions/cloud-migration",
    advantages: [
      "Güvenli ve kesintisiz geçiş",
      "Veri kaybı riskine karşı önlemler",
      "Bulutta maliyet ve performans optimizasyonu"
    ]
  },
  {
    id: "training",
    name: "Eğitim & Sertifikasyon",
    description: "Ekipleriniz için Atlassian eğitimleri ve sertifikasyon programları. Pratik uygulamalar ve güncel içeriklerle bilgi seviyenizi yükseltin.",
    icon: "🎓",
    href: "/solutions/training",
    advantages: [
      "Resmi Atlassian eğitim içerikleri",
      "Online ve yerinde eğitim seçenekleri",
      "Sertifikalı eğitmenler"
    ]
  },
  {
    id: "free-discovery",
    name: "Ücretsiz Keşif",
    description: "İhtiyaçlarınıza özel ücretsiz ön analiz ve yol haritası. Dijital dönüşümünüz için ilk adımı birlikte atalım.",
    icon: "🔍",
    href: "/solutions/free-discovery",
    advantages: [
      "Hızlı ve kapsamlı analiz",
      "Kişiselleştirilmiş çözüm önerileri",
      "Hiçbir taahhüt gerektirmez"
    ]
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Çözümlerimiz</h1>
            <p className="text-xl mb-4">Dijital dönüşüm yolculuğunuzda uzman ekibimizle yanınızdayız. İşinize değer katacak çözümlerimizi keşfedin.</p>
            <div className="mt-6 bg-white/10 rounded-xl p-6 max-w-2xl mx-auto text-white/90 text-lg shadow-lg">
              <span className="font-semibold text-white">Neden Virtual Riddle çözümleri?</span>
              <ul className="list-disc list-inside mt-2 text-white/80 text-base text-left mx-auto max-w-lg">
                <li>Her sektöre ve ölçeğe uygun, esnek ve sürdürülebilir çözümler</li>
                <li>Deneyimli danışman ve teknik ekip</li>
                <li>Hızlı uygulama, sürekli destek ve yüksek müşteri memnuniyeti</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="text-base sm:text-lg">✨</span>
                <span>ÇÖZÜM PORTFÖYÜ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Danışmanlık ve Dönüşüm Hizmetlerimiz
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                İş süreçlerinizi modernleştiren, verimliliği artıran ve rekabette öne çıkaran çözümler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {solutions.map((solution) => (
                <Link
                  key={solution.id}
                  href={solution.href}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100 overflow-hidden max-w-sm mx-auto"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 sm:translate-x-12 -translate-y-8 sm:-translate-y-12 scale-0 group-hover:scale-100"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {solution.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="mb-4 pl-4 list-disc text-gray-500 text-xs sm:text-sm">
                      {solution.advantages && solution.advantages.map((adv, i) => (
                        <li key={i}>{adv}</li>
                      ))}
                    </ul>
                    <span className="inline-block mt-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">Detayları Gör</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 mb-24 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Çözümünüzü bulamadınız mı?</h3>
        <p className="text-gray-600 mb-6">Ekibimizle iletişime geçin, size özel bir yol haritası oluşturalım.</p>
        <Link href="/contact" className="inline-block px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all text-lg shadow-lg">Bize Ulaşın</Link>
      </div>
    </main>
  );
} 