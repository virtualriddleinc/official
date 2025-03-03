import Link from "next/link";
import Image from "next/image";

export default function TrainingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/icons/training.svg"
                alt="Training"
                width={40}
                height={40}
                priority
                quality={100}
                loading="eager"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Eğitim & Sertifikasyon
              </h1>
            </div>
            <p className="text-xl text-gray mb-8">
              Atlassian ürünlerinde uzmanlaşın, sertifika sahibi olun
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#courses"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Eğitimler
              </Link>
              <Link
                href="#certification"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Sertifikasyon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Eğitim Programları
            </h2>
            <p className="text-gray">
              Temel seviyeden ileri seviyeye kadar kapsamlı eğitimler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <img src="/icons/jira-software.svg" alt="Jira Software" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Jira Software</h3>
              <ul className="space-y-2 text-gray mb-6">
                <li>• Proje yönetimi temelleri</li>
                <li>• Agile & Scrum metodolojileri</li>
                <li>• İş akışı yönetimi</li>
              </ul>
              <Link
                href="#contact"
                className="text-blue hover:text-blue-600 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <img src="/icons/confluence.svg" alt="Confluence" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Confluence</h3>
              <ul className="space-y-2 text-gray mb-6">
                <li>• İçerik yönetimi</li>
                <li>• Ekip iş birliği</li>
                <li>• Bilgi yönetimi</li>
              </ul>
              <Link
                href="#contact"
                className="text-blue hover:text-blue-600 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <img src="/icons/jira-service-management.svg" alt="Jira Service Management" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Jira Service Management</h3>
              <ul className="space-y-2 text-gray mb-6">
                <li>• ITSM temelleri</li>
                <li>• Servis masası yönetimi</li>
                <li>• SLA ve raporlama</li>
              </ul>
              <Link
                href="#contact"
                className="text-blue hover:text-blue-600 font-medium inline-flex items-center"
              >
                Detaylı Bilgi
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Sertifikasyon Programı
            </h2>
            <p className="text-gray">
              Atlassian sertifikaları ile uzmanlığınızı belgeleyin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold text-dark mb-4">Sertifikasyon Süreci</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold text-blue">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-1">Eğitim</h4>
                    <p className="text-gray text-sm">Kapsamlı eğitim programı ile hazırlanın</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold text-blue">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-1">Pratik</h4>
                    <p className="text-gray text-sm">Gerçek dünya senaryoları ile deneyim kazanın</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold text-blue">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-1">Sınav</h4>
                    <p className="text-gray text-sm">Online sertifikasyon sınavına girin</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold text-blue">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-1">Sertifika</h4>
                    <p className="text-gray text-sm">Resmi Atlassian sertifikanızı alın</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold text-dark mb-4">Sertifika Avantajları</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray">Uluslararası geçerlilik</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray">Kariyer gelişimi</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray">Rekabet avantajı</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray">Uzman ağına erişim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Eğitim Talebi
            </h2>
            <p className="text-gray mb-8">
              Size özel eğitim programı için bizimle iletişime geçin
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
                  <option value="">Eğitim Seçin</option>
                  <option value="jira">Jira Software</option>
                  <option value="confluence">Confluence</option>
                  <option value="jsm">Jira Service Management</option>
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