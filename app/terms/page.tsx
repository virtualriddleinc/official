import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-2xl mb-8">
              <svg className="w-10 h-10 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Kullanım Koşulları
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Virtual Riddle hizmetlerini kullanırken uyulması gereken kurallar ve şartlar
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#hizmet-kullanimi"
                className="px-6 py-3 bg-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
              >
                Hizmet Kullanımı
              </Link>
              <Link
                href="#fikri-mulkiyet"
                className="px-6 py-3 bg-white text-blue font-medium rounded-xl border border-blue hover:bg-blue-50 transition-colors"
              >
                Fikri Mülkiyet
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
                <Link href="#hizmet-kullanimi" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">1</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Hizmet Kullanımı</span>
                </Link>
                <Link href="#fikri-mulkiyet" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">2</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Fikri Mülkiyet</span>
                </Link>
                <Link href="#sorumluluk" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">3</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Sorumluluk Sınırları</span>
                </Link>
                <Link href="#odeme" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">4</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Ödeme Koşulları</span>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Hizmet Kullanımı */}
              <section id="hizmet-kullanimi" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Hizmet Kullanımı</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Virtual Riddle'ın sunduğu hizmetleri kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                    </p>
                    <h3>Genel Kurallar</h3>
                    <ul>
                      <li>Hizmetleri yasal amaçlar için kullanmak</li>
                      <li>Başkalarının haklarına saygı göstermek</li>
                      <li>Güvenlik önlemlerini ihlal etmemek</li>
                      <li>Sistemin işleyişini engelleyecek faaliyetlerde bulunmamak</li>
                    </ul>
                    <h3>Hesap Güvenliği</h3>
                    <ul>
                      <li>Güçlü şifre kullanımı zorunludur</li>
                      <li>İki faktörlü doğrulama önerilir</li>
                      <li>Hesap bilgilerinin gizli tutulması gerekir</li>
                      <li>Şüpheli aktivitelerin bildirilmesi beklenir</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Fikri Mülkiyet */}
              <section id="fikri-mulkiyet" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Fikri Mülkiyet</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Virtual Riddle'a ait tüm içerikler, logolar, markalar ve yazılımlar şirketimizin fikri mülkiyetidir.
                    </p>
                    <h3>Telif Hakları</h3>
                    <ul>
                      <li>İzinsiz kullanım ve kopyalama yasaktır</li>
                      <li>İçeriklerin paylaşımı için yazılı izin gereklidir</li>
                      <li>Atlassian ürünlerinin markaları ilgili şirkete aittir</li>
                    </ul>
                    <h3>Lisans Hakları</h3>
                    <ul>
                      <li>Yazılım lisansları devredilemez</li>
                      <li>Ters mühendislik yapılamaz</li>
                      <li>Kaynak kodlar değiştirilemez</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sorumluluk Sınırları */}
              <section id="sorumluluk" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9945 17H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Sorumluluk Sınırları</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Hizmetlerimizle ilgili sorumluluk sınırlarımız şunlardır:
                    </p>
                    <h3>Hizmet Kesintileri</h3>
                    <ul>
                      <li>Planlı bakım çalışmaları için önceden bildirim yapılır</li>
                      <li>Beklenmeyen kesintiler için sorumluluk kabul edilmez</li>
                      <li>Mücbir sebeplerden kaynaklanan kesintiler</li>
                    </ul>
                    <h3>Veri Güvenliği</h3>
                    <ul>
                      <li>Veri yedekleme kullanıcının sorumluluğundadır</li>
                      <li>Güvenlik ihlallerine karşı önlemler alınır</li>
                      <li>Üçüncü taraf hizmetlerden kaynaklanan sorunlar</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ödeme Koşulları */}
              <section id="odeme" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.5H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 16.5H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 16.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.44 3.5H17.55C21.11 3.5 22 4.38 22 7.89V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Ödeme Koşulları</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Hizmet bedelleri ve ödeme koşulları aşağıdaki gibidir:
                    </p>
                    <h3>Fiyatlandırma</h3>
                    <ul>
                      <li>Aylık veya yıllık ödeme seçenekleri</li>
                      <li>Kullanıcı sayısına göre değişen fiyatlar</li>
                      <li>Özel paket ve kurumsal fiyatlandırma</li>
                    </ul>
                    <h3>İptal ve İade</h3>
                    <ul>
                      <li>30 gün önceden bildirim şartı</li>
                      <li>Kullanılmayan süre için iade yapılmaz</li>
                      <li>Yıllık ödemelerde indirim avantajı</li>
                    </ul>
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
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl font-bold text-dark mb-4">Sorularınız mı var?</h2>
                  <p className="text-gray-600 mb-6">
                    Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 