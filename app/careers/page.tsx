import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 21.5L12 16.5L3.5 21.5V5.5C3.5 4.4 4.4 3.5 5.5 3.5H18.5C19.6 3.5 20.5 4.4 20.5 5.5V21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Kariyer Fırsatları
              </h1>
            </div>
            <p className="text-xl text-gray mb-8">
              Atlassian ekosisteminde uzmanlaşmış ekibimize katılın
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#apply"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Başvuru Yap
              </Link>
              <Link
                href="#culture"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Şirket Kültürü
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Şirket Kültürümüz
            </h2>
            <p className="text-gray">
              Yenilikçi, dinamik ve sürekli gelişen bir ortamda çalışın
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Sürekli Öğrenme</h3>
              <p className="text-gray">
                Atlassian ürünleri ve yeni teknolojiler hakkında sürekli eğitim fırsatları
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Esnek Çalışma</h3>
              <p className="text-gray">
                Remote çalışma ve esnek saat uygulamaları ile iş-yaşam dengesi
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Kariyer Gelişimi</h3>
              <p className="text-gray">
                Uluslararası sertifikasyonlar ve kariyer gelişim planları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-dark mb-4 text-center">
                Başvuru Formu
              </h2>
              <p className="text-gray mb-8 text-center">
                Ekibimize katılmak için formu doldurun
              </p>
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
                  placeholder="Pozisyon"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                />
                <textarea
                  placeholder="Kendinizi Tanıtın"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                ></textarea>
                <div className="flex items-center justify-center">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    <div className="px-4 py-2 border border-gray-200 rounded-lg hover:border-blue transition-colors">
                      <span className="text-gray-600">CV Yükle (PDF, DOC)</span>
                    </div>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Başvuruyu Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 