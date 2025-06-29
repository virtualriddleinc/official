export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl">
              Dijital dönüşüm ve teknoloji dünyasından en güncel haberler, makaleler ve analizler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-700 p-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-800 text-sm font-semibold mb-2">DevOps & Cloud</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2024 DevOps Trendleri</h3>
                  <p className="text-gray-700 text-sm mb-4">Yapay zeka destekli DevOps araçları, GitOps ve Platform mühendisliğinin yükselişi...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">5 Mart 2024</span>
                    <button className="text-blue-800 text-sm font-semibold hover:text-blue-900 transition-colors inline-flex items-center group">
                      Devamını Oku 
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-800 text-sm font-semibold mb-2">Dijital Dönüşüm</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Başarılı Dijital Dönüşüm Stratejileri</h3>
                  <p className="text-gray-700 text-sm mb-4">Şirketlerin dijital dönüşüm yolculuğunda dikkat etmesi gereken kritik noktalar...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">3 Mart 2024</span>
                    <button className="text-blue-800 text-sm font-semibold hover:text-blue-900 transition-colors inline-flex items-center group">
                      Devamını Oku 
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 to-purple-700 p-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-800 text-sm font-semibold mb-2">Performans</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Native Uygulamalarda Performans</h3>
                  <p className="text-gray-700 text-sm mb-4">Mikroservis mimarilerde performans optimizasyonu ve izleme stratejileri...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">1 Mart 2024</span>
                    <button className="text-blue-800 text-sm font-semibold hover:text-blue-900 transition-colors inline-flex items-center group">
                      Devamını Oku 
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-600 to-green-700 p-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-800 text-sm font-semibold mb-2">Cloud Computing</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Cloud Stratejileri</h3>
                  <p className="text-gray-700 text-sm mb-4">Farklı cloud sağlayıcılarını etkin kullanmanın yolları ve best practice'ler...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">28 Şubat 2024</span>
                    <button className="text-blue-800 text-sm font-semibold hover:text-blue-900 transition-colors inline-flex items-center group">
                      Devamını Oku 
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  ←
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  →
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 