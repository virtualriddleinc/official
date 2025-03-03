{/* Hero Section */}
<div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-slate-900 mb-4">Gizlilik Politikası</h1>
    <p className="subtitle text-slate-700 max-w-3xl">
      Kişisel verilerinizin güvenliği bizim için önemlidir. Bu politika, verilerinizin nasıl toplandığını ve korunduğunu açıklar.
    </p>
  </div>
</div>

{/* Content Section */}
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
    <nav className="mb-8 p-4 bg-slate-50 rounded-lg">
      <h2 className="text-slate-900 mb-4 text-lg font-medium">Hızlı Gezinme</h2>
      <ul className="space-y-2">
        <li>
          <a href="#veri-toplama" className="text-blue-700 hover:text-blue-800 hover:underline">
            Veri Toplama ve Kullanım
          </a>
        </li>
        <li>
          <a href="#veri-guvenligi" className="text-blue-700 hover:text-blue-800 hover:underline">
            Veri Güvenliği
          </a>
        </li>
        <li>
          <a href="#cerezler" className="text-blue-700 hover:text-blue-800 hover:underline">
            Çerezler ve İzleme
          </a>
        </li>
        <li>
          <a href="#ucuncu-taraf" className="text-blue-700 hover:text-blue-800 hover:underline">
            Üçüncü Taraf Hizmetler
          </a>
        </li>
      </ul>
    </nav>

    <div className="prose prose-slate max-w-none">
      <section id="veri-toplama" className="mb-12">
        <h2 className="text-slate-900">Veri Toplama ve Kullanım</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h3 className="text-slate-800 mb-2">Topladığımız Kişisel Bilgiler:</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Ad ve soyadınız</li>
            <li>E-posta adresiniz</li>
            <li>Şirket bilgileriniz</li>
          </ul>
        </div>
      </section>

      <section id="veri-guvenligi" className="mb-12">
        <h2 className="text-slate-900">Veri Güvenliği</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Verilerinizi korumak için SSL şifreleme ve düzenli güvenlik denetimleri gibi endüstri standardı güvenlik önlemleri kullanıyoruz.
          </p>
        </div>
      </section>

      <section id="cerezler" className="mb-12">
        <h2 className="text-slate-900">Çerezler ve İzleme</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Çerezleri oturum yönetimi, site tercihlerinizi hatırlama ve analitik amaçlarla kullanıyoruz.
          </p>
        </div>
      </section>

      <section id="ucuncu-taraf" className="mb-12">
        <h2 className="text-slate-900">Üçüncü Taraf Hizmetler</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Atlassian, AWS ve Google Analytics gibi güvenilir üçüncü taraf hizmet sağlayıcılarla çalışıyoruz.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-slate-900 mb-4">Sorularınız mı var?</h2>
        <p className="text-slate-700 mb-6">
          Gizlilik politikamızla ilgili sorularınız için bize ulaşın:
        </p>
        <a
          href="mailto:info@virtualriddle.com"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          E-posta Gönder
        </a>
      </section>

      <div className="text-sm text-slate-500">
        Son güncelleme: 01.01.2024
      </div>
    </div>
  </div>
</div> 
