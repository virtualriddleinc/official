{/* Hero Section */}
<div className="bg-gradient-to-br from-slate-50 via-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-slate-900 mb-4">Kullanım Koşulları</h1>
    <p className="subtitle text-slate-700 max-w-3xl">
      Virtual Riddle hizmetlerini kullanırken uymanız gereken kurallar ve koşullar.
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
          <a href="#hizmet-kullanimi" className="text-blue-700 hover:text-blue-800 hover:underline">
            Hizmet Kullanımı
          </a>
        </li>
        <li>
          <a href="#fikri-mulkiyet" className="text-blue-700 hover:text-blue-800 hover:underline">
            Fikri Mülkiyet
          </a>
        </li>
        <li>
          <a href="#sorumluluk" className="text-blue-700 hover:text-blue-800 hover:underline">
            Sorumluluk Sınırları
          </a>
        </li>
        <li>
          <a href="#hesap-guvenligi" className="text-blue-700 hover:text-blue-800 hover:underline">
            Hesap Güvenliği
          </a>
        </li>
        <li>
          <a href="#odeme-kosullari" className="text-blue-700 hover:text-blue-800 hover:underline">
            Ödeme Koşulları
          </a>
        </li>
      </ul>
    </nav>

    <div className="prose prose-slate max-w-none">
      <section id="hizmet-kullanimi" className="mb-12">
        <h2 className="text-slate-900">Hizmet Kullanımı</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h3 className="text-slate-800 mb-2">Temel Kurallar:</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Hizmetlerimizi yasal amaçlar için kullanmalısınız</li>
            <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
            <li>Sistemin güvenliğini tehlikeye atacak eylemlerden kaçınmalısınız</li>
          </ul>
        </div>
      </section>

      <section id="fikri-mulkiyet" className="mb-12">
        <h2 className="text-slate-900">Fikri Mülkiyet</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Tüm içerik, logo ve markalar Virtual Riddle'ın fikri mülkiyetidir ve izinsiz kullanılamaz.
          </p>
        </div>
      </section>

      <section id="sorumluluk" className="mb-12">
        <h2 className="text-slate-900">Sorumluluk Sınırları</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Hizmetlerimizin kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu değiliz.
          </p>
        </div>
      </section>

      <section id="hesap-guvenligi" className="mb-12">
        <h2 className="text-slate-900">Hesap Güvenliği</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Hesabınızın güvenliğinden siz sorumlusunuz. Şüpheli bir durum fark ederseniz hemen bize bildirin.
          </p>
        </div>
      </section>

      <section id="odeme-kosullari" className="mb-12">
        <h2 className="text-slate-900">Ödeme Koşulları</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            Ödeme planları ve koşulları hakkında detaylı bilgi için fiyatlandırma sayfamızı ziyaret edin.
          </p>
        </div>
      </section>

      <section className="bg-indigo-50 rounded-lg p-6 mb-8">
        <h2 className="text-slate-900 mb-4">Sorularınız mı var?</h2>
        <p className="text-slate-700 mb-6">
          Kullanım koşullarımızla ilgili sorularınız için bize ulaşın:
        </p>
        <a
          href="mailto:info@virtualriddle.com"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium shadow-sm"
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
