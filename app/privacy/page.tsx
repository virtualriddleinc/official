import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-2xl mb-8">
              <svg className="w-10 h-10 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Kişisel verilerinizin korunması ve güvenliği bizim için önemli. Bu politika, verilerinizin nasıl toplandığını ve kullanıldığını açıklar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#kisisel-veriler"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                Kişisel Veriler
              </Link>
              <Link
                href="#veri-guvenligi"
                className="px-6 py-3 bg-white text-blue font-medium rounded-xl border border-blue hover:bg-blue-50 transition-colors"
              >
                Veri Güvenliği
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-12">
              <h2 className="text-xl font-semibold text-dark mb-4">İçerik</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="#kisisel-veriler" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">1</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Kişisel Veriler</span>
                </Link>
                <Link href="#veri-guvenligi" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">2</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Veri Güvenliği</span>
                </Link>
                <Link href="#cerezler" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">3</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Çerezler</span>
                </Link>
                <Link href="#ucuncu-taraf" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">4</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Üçüncü Taraf Hizmetler</span>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Kişisel Veriler */}
              <section id="kisisel-veriler" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Kişisel Veriler</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Virtual Riddle olarak, size daha iyi hizmet verebilmek için bazı kişisel bilgilerinizi toplamaktayız. 
                      Bu bilgiler şunları içerebilir:
                    </p>
                    <ul>
                      <li>Ad ve soyadınız</li>
                      <li>E-posta adresiniz</li>
                      <li>Şirket bilgileriniz</li>
                      <li>IP adresi ve tarayıcı bilgileri</li>
                      <li>Kullanım istatistikleri</li>
                    </ul>
                    <h3>Veri Toplama Amacı</h3>
                    <p>
                      Kişisel verilerinizi aşağıdaki amaçlarla toplamakta ve işlemekteyiz:
                    </p>
                    <ul>
                      <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
                      <li>Müşteri desteği sağlamak</li>
                      <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                      <li>Güvenlik ve dolandırıcılığı önleme</li>
                      <li>İletişim ve bilgilendirme</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Veri Güvenliği */}
              <section id="veri-guvenligi" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 8.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Veri Güvenliği</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Kişisel verilerinizin güvenliği için en üst düzey önlemleri almaktayız. 
                      Verilerinizin korunması için uygulanan güvenlik önlemleri:
                    </p>
                    <ul>
                      <li>SSL/TLS şifreleme protokolleri</li>
                      <li>Güvenlik duvarları ve saldırı tespit sistemleri</li>
                      <li>Düzenli güvenlik denetimleri ve testleri</li>
                      <li>Veri erişim kontrolleri ve yetkilendirme</li>
                      <li>Fiziksel güvenlik önlemleri</li>
                      <li>Personel güvenlik eğitimleri</li>
                    </ul>
                    <h3>Veri Saklama</h3>
                    <p>
                      Kişisel verileriniz, hizmet ilişkimiz devam ettiği sürece ve yasal saklama sürelerince güvenli sistemlerimizde saklanmaktadır.
                    </p>
                  </div>
                </div>
              </section>

              {/* Çerezler */}
              <section id="cerezler" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Çerezler ve İzleme</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Web sitemizde deneyiminizi iyileştirmek için çerezler kullanmaktayız. 
                      Kullanılan çerez türleri:
                    </p>
                    <ul>
                      <li>
                        <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevleri için gerekli
                      </li>
                      <li>
                        <strong>Performans Çerezleri:</strong> Site performansını analiz etmek için
                      </li>
                      <li>
                        <strong>İşlevsellik Çerezleri:</strong> Kişiselleştirilmiş deneyim için
                      </li>
                      <li>
                        <strong>Hedefleme Çerezleri:</strong> İlgi alanlarınıza uygun içerik için
                      </li>
                    </ul>
                    <h3>Çerez Tercihleri</h3>
                    <p>
                      Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz. Ancak bazı temel çerezleri devre dışı bırakmanız durumunda site işlevselliği etkilenebilir.
                    </p>
                  </div>
                </div>
              </section>

              {/* Üçüncü Taraf Hizmetler */}
              <section id="ucuncu-taraf" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 19H17.5C21.5 19 22 17.2 22 15.5C22 13.8 21.5 12 17.5 12C17.5 7 15.5 5 12 5C8.5 5 6.5 7 6.5 12C2.5 12 2 13.8 2 15.5C2 17.2 2.5 19 6.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Üçüncü Taraf Hizmetler</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Hizmetlerimizi sağlarken güvenilir üçüncü taraf servis sağlayıcılarla çalışmaktayız:
                    </p>
                    <ul>
                      <li>
                        <strong>Atlassian:</strong> Ürün ve hizmet altyapısı
                      </li>
                      <li>
                        <strong>AWS:</strong> Bulut altyapı hizmetleri
                      </li>
                      <li>
                        <strong>Google Analytics:</strong> Kullanım analizi
                      </li>
                      <li>
                        <strong>Stripe:</strong> Ödeme işlemleri
                      </li>
                    </ul>
                    <p>
                      Bu hizmet sağlayıcılar kendi gizlilik politikalarına tabidir ve verilerinizi korumak için gerekli önlemleri almaktadır.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl font-bold text-dark mb-4">Sorularınız mı var?</h2>
                  <p className="text-gray-600 mb-6">
                    Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:info@virtualriddle.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      E-posta Gönder
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue font-medium rounded-xl border border-blue hover:bg-blue-50 transition-colors"
                    >
                      İletişim Formu
                    </Link>
                  </div>
                </div>
              </section>

              {/* Last Update */}
              <div className="text-center text-gray-500 text-sm">
                Son güncelleme: 01.01.2024
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mt-4">
                  Virtual Riddle
                  <br />
                  Maslak Mah. AOS 55. Sok. 42 Maslak B Blok No:4/542
                  <br />
                  Sarıyer/İSTANBUL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 