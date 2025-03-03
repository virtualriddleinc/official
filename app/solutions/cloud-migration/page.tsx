import Link from "next/link";
import Image from "next/image";

export default function CloudMigrationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/icons/cloud-migration.svg"
                alt="Cloud Migration"
                width={40}
                height={40}
                priority
                quality={100}
                loading="eager"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Cloud Migration
              </h1>
            </div>
            <p className="text-xl text-gray mb-8">
              Atlassian Cloud'a güvenli ve sorunsuz geçiş
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ücretsiz Değerlendirme
              </Link>
              <Link
                href="#process"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Geçiş Süreci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Cloud Geçiş Süreci
            </h2>
            <p className="text-gray">
              Adım adım güvenli ve sorunsuz cloud geçişi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Değerlendirme</h3>
              <p className="text-gray">
                Mevcut sistem analizi ve geçiş planı oluşturma
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Hazırlık</h3>
              <p className="text-gray">
                Veri temizliği ve geçiş öncesi optimizasyon
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Geçiş</h3>
              <p className="text-gray">
                Güvenli veri transferi ve sistem kurulumu
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue">4</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Optimizasyon</h3>
              <p className="text-gray">
                Cloud ortamında performans optimizasyonu
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
              Cloud'un Avantajları
            </h2>
            <p className="text-gray">
              Atlassian Cloud ile işinizi bir üst seviyeye taşıyın
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold text-dark mb-2">Ölçeklenebilirlik</h3>
              <p className="text-gray">
                İhtiyaçlarınıza göre esnek kaynak kullanımı
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold text-dark mb-2">Güvenlik</h3>
              <p className="text-gray">
                Enterprise seviye güvenlik ve veri koruma
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold text-dark mb-2">Maliyet</h3>
              <p className="text-gray">
                Altyapı maliyetlerinde önemli tasarruf
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Ücretsiz Değerlendirme
            </h2>
            <p className="text-gray mb-8">
              Cloud geçiş süreciniz için ücretsiz değerlendirme alın
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
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                >
                  <option value="">Mevcut Atlassian Ortamı</option>
                  <option value="server">Server</option>
                  <option value="data-center">Data Center</option>
                  <option value="cloud">Cloud</option>
                </select>
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