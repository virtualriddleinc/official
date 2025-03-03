export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl">
              Dijital dönüşüm yolculuğunda işletmelere rehberlik eden güvenilir teknoloji ortağınız
            </p>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <p className="text-gray-700 leading-relaxed">
                İşletmelerin dijital dönüşüm süreçlerini en verimli şekilde yönetmelerine yardımcı olmak ve 
                modern teknolojileri kullanarak rekabet avantajı elde etmelerini sağlamak.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
              <p className="text-gray-700 leading-relaxed">
                Türkiye'nin önde gelen dijital dönüşüm ve teknoloji danışmanlığı şirketi olmak ve 
                global pazarda söz sahibi bir teknoloji markası haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenilirlik</h3>
                <p className="text-gray-700">
                  Müşterilerimize her zaman şeffaf ve dürüst davranır, verdikleri sorumluluğun bilinciyle hareket ederiz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Yenilikçilik</h3>
                <p className="text-gray-700">
                  Teknolojik gelişmeleri yakından takip eder, en yeni çözümleri müşterilerimize sunarız.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">İş Birliği</h3>
                <p className="text-gray-700">
                  Müşterilerimizle uzun vadeli iş birlikleri kurar, başarılarını kendi başarımız olarak görürüz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Ekibimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200"></div>
                <h3 className="text-xl font-bold text-gray-900">Ahmet Yılmaz</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200"></div>
                <h3 className="text-xl font-bold text-gray-900">Ayşe Demir</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200"></div>
                <h3 className="text-xl font-bold text-gray-900">Mehmet Kaya</h3>
                <p className="text-gray-600">Teknik Direktör</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200"></div>
                <h3 className="text-xl font-bold text-gray-900">Zeynep Şahin</h3>
                <p className="text-gray-600">Proje Müdürü</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 