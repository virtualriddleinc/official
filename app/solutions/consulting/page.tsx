import Link from "next/link";
import Image from "next/image";

export default function ConsultingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/icons/consulting.svg"
                alt="Consulting"
                width={40}
                height={40}
                priority
                quality={100}
                loading="eager"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Atlassian Danışmanlığı
              </h1>
            </div>
            <p className="text-xl text-gray mb-8">
              Kurumsal süreçlerinizi optimize edin, verimliliğinizi artırın
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Danışmanlık Talebi
              </Link>
              <Link
                href="#services"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Süreç Analizi</h3>
              <p className="text-gray">
                Mevcut iş süreçlerinizin detaylı analizi ve iyileştirme önerileri
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Ürün Danışmanlığı</h3>
              <p className="text-gray">
                Atlassian ürünlerinin kurumunuza özel yapılandırması ve optimizasyonu
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Proje Yönetimi</h3>
              <p className="text-gray">
                Agile ve Scrum metodolojileri ile proje yönetimi danışmanlığı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Danışmanlık Talebi
            </h2>
            <p className="text-gray mb-8">
              Kurumunuzun ihtiyaçlarını anlayalım, size özel çözümler sunalım
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="E-posta"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Şirket"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                />
                <textarea
                  placeholder="Mesajınız"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 