import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-300/20 via-transparent to-transparent opacity-30"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kişisel verilerinizin korunması ve güvenliği önceliğimiz. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#kisisel-veriler"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-xl hover:bg-white/90 transition-colors shadow-lg"
              >
                Kişisel Veriler
              </Link>
              <Link
                href="#veri-guvenligi"
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
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
                <Link href="#gizlilik-haklari" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">4</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Gizlilik Hakları</span>
                </Link>
                <Link href="#veri-ihlali" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">5</span>
                  </span>
                  <span className="text-gray-600 group-hover:text-blue transition-colors">Veri İhlali Bildirimi</span>
                </Link>
                <Link href="#ucuncu-taraf" className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue font-medium">6</span>
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

              {/* Gizlilik Hakları */}
              <section id="gizlilik-haklari" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 10.6499H9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8.2002V13.2002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Gizlilik Hakları</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aşağıdaki haklara sahipsiniz:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">Bilgi Alma Hakkı</h4>
                        <p className="text-indigo-700/80 text-sm">
                          Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">Erişim Hakkı</h4>
                        <p className="text-indigo-700/80 text-sm">
                          İşlenen kişisel verilerinize erişim ve bunların bir kopyasını alma
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">Düzeltme Hakkı</h4>
                        <p className="text-indigo-700/80 text-sm">
                          Yanlış veya eksik kişisel verilerinizin düzeltilmesini isteme
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">Silme Hakkı (Unutulma Hakkı)</h4>
                        <p className="text-indigo-700/80 text-sm">
                          Kişisel verilerinizin belirli koşullar altında silinmesini talep etme
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">İşlemeyi Kısıtlama Hakkı</h4>
                        <p className="text-indigo-700/80 text-sm">
                          Kişisel verilerinizin işlenmesinin kısıtlanmasını talep etme
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-indigo-700">Veri Taşınabilirliği Hakkı</h4>
                        <p className="text-indigo-700/80 text-sm">
                          Kişisel verilerinizi yapılandırılmış bir formatta alma ve başka bir veri sorumlusuna aktarma
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-6">Başvuru Süreci</h3>
                    <p>
                      Haklarınızı kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz. Başvurunuz en geç 30 gün içinde sonuçlandırılacaktır:
                    </p>
                    <ul>
                      <li>info@virtualriddle.com adresine e-posta göndererek</li>
                      <li>İletişim formu üzerinden talep oluşturarak</li>
                      <li>Şirket adresimize yazılı başvuru yaparak</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Veri İhlali Bildirimi */}
              <section id="veri-ihlali" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.0001 21.41H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5.00003C10.5401 1.79003 13.4601 1.79003 15.2401 5.00003L18.1801 10.29L21.3001 15.91C22.9801 18.94 21.5201 21.42 18.0601 21.42H12.0001V21.41Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9945 17H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-dark">Veri İhlali Bildirimi</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Kişisel verilerinizin güvenliğini ihlal eden bir durumla karşılaşılması halinde aşağıdaki adımları izlemekteyiz:
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <span className="text-red-600 font-bold">1</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Tespit ve Değerlendirme</h4>
                        </div>
                        <p className="text-gray-600 ml-11">
                          Veri ihlali tespit edildiğinde, ihlalin kapsamı, etkilenen kişiler ve olası zararlar hemen değerlendirilir.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <span className="text-red-600 font-bold">2</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Kurul Bildirimi</h4>
                        </div>
                        <p className="text-gray-600 ml-11">
                          Kişisel Verileri Koruma Kurulu'na en geç 72 saat içerisinde ihlal bildirimi yapılır.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <span className="text-red-600 font-bold">3</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">İlgili Kişilere Bildirim</h4>
                        </div>
                        <p className="text-gray-600 ml-11">
                          İhlalden etkilenen kişilere en kısa sürede ve doğrudan bildirim yapılır.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <span className="text-red-600 font-bold">4</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">İyileştirme Önlemleri</h4>
                        </div>
                        <p className="text-gray-600 ml-11">
                          Benzer ihlallerin tekrarlanmaması için gerekli teknik ve idari önlemler alınır.
                        </p>
                      </div>
                    </div>
                    <p className="mt-6">
                      Veri ihlalinden şüpheleniyorsanız veya böyle bir durumu bildirmek istiyorsanız lütfen <a href="mailto:privacy@virtualriddle.com" className="text-blue-600 hover:underline">privacy@virtualriddle.com</a> adresine e-posta gönderin.
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

              {/* SSS - Sıkça Sorulan Sorular */}
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9955 13.75H12.0045" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-dark">Sıkça Sorulan Sorular</h2>
                </div>

                <div className="space-y-6 mt-6">
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                        <h4 className="font-medium text-gray-900">Kişisel verilerimi tamamen sildirebilir miyim?</h4>
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600">
                          Evet, kişisel verilerinizin tamamının silinmesini talep edebilirsiniz. Ancak bazı veriler yasal yükümlülüklerimiz gereği belirli süreler boyunca saklanmak zorunda olabilir. Silme talebinizi iletişim kanallarımız üzerinden iletebilirsiniz.
                        </p>
                      </div>
                    </details>
                  </div>

                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                        <h4 className="font-medium text-gray-900">Kişisel verilerimi kimlerle paylaşıyorsunuz?</h4>
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600">
                          Kişisel verileriniz, hizmetlerimizi sunmak için gereken üçüncü taraf hizmet sağlayıcılarla ve yasal zorunluluk halinde yetkilendirilmiş kamu kurum ve kuruluşlarıyla paylaşılabilir. Bu paylaşımlar her zaman gizlilik anlaşmaları ve veri koruma düzenlemeleri çerçevesinde gerçekleştirilir.
                        </p>
                      </div>
                    </details>
                  </div>

                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                        <h4 className="font-medium text-gray-900">Verilerin korunması için ne tür önlemler alıyorsunuz?</h4>
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600">
                          Verilerinizin güvenliği için endüstri standardı güvenlik protokollerini kullanıyoruz. SSL/TLS şifreleme, erişim kontrolleri, periyodik güvenlik denetimleri, güvenlik duvarları ve düzenli yedekleme işlemleri gibi birçok teknik ve idari önlemi uyguluyoruz.
                        </p>
                      </div>
                    </details>
                  </div>

                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                        <h4 className="font-medium text-gray-900">Gizlilik politikanızı değiştirdiğinizde nasıl haberdar olacağım?</h4>
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600">
                          Gizlilik politikamızda önemli değişiklikler yaptığımızda, siteye bir bildirim ekleyeceğiz ve kayıtlı kullanıcılarımızı e-posta yoluyla bilgilendireceğiz. Her gizlilik politikası güncellemesini sayfanın altında belirtilen son güncelleme tarihinden kontrol edebilirsiniz.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </section>

              {/* Last Update */}
              <div className="text-center text-gray-500 text-sm bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Son güncelleme: 01.06.2024</span>
                  <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full">Versiyon 2.1</span>
                </div>
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