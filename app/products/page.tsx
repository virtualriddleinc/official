"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: "jira-software",
      name: "Jira Software",
      description: "Yazılım ekipleri için proje yönetimi ve issue tracking çözümü",
      icon: "/icons/jira-software.svg",
      color: "from-blue-600 to-blue-700",
      features: ["Agile proje yönetimi", "Issue tracking", "Sprint planlama", "Kanban board"],
      href: "/products/jira-software"
    },
    {
      id: "jira-service-management",
      name: "Jira Service Management",
      description: "IT servis yönetimi ve müşteri desteği için kapsamlı çözüm",
      icon: "/icons/jira-service-management.svg",
      color: "from-green-600 to-green-700",
      features: ["ITSM", "Müşteri desteği", "SLA yönetimi", "Self-service portal"],
      href: "/products/jira-service-management"
    },
    {
      id: "jira-work-management",
      name: "Jira Work Management",
      description: "Tüm iş ekipleri için özelleştirilebilir iş yönetim platformu",
      icon: "/icons/jira-work-management.svg",
      color: "from-purple-600 to-purple-700",
      features: ["İş akışı yönetimi", "Departmanlar arası iş birliği", "Esnek görünümler", "Özelleştirilebilir süreçler"],
      href: "/products/jira-work-management"
    },
    {
      id: "confluence",
      name: "Confluence",
      description: "Ekip bilgisi ve dokümantasyon için merkezi platform",
      icon: "/icons/confluence.svg",
      color: "from-orange-600 to-orange-700",
      features: ["Bilgi tabanı", "İş birliği alanları", "Dokümantasyon", "Entegrasyonlar"],
      href: "/products/confluence"
    },
    {
      id: "bitbucket",
      name: "Bitbucket",
      description: "Git repository yönetimi ve CI/CD entegrasyonu",
      icon: "/icons/bitbucket.svg",
      color: "from-indigo-600 to-indigo-700",
      features: ["Git hosting", "CI/CD pipeline", "Code review", "Jira entegrasyonu"],
      href: "/products/bitbucket"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Atlassian Ürün Ailesi
            </h1>
            <p className="text-xl mb-8">
              Yazılım geliştirme, proje yönetimi, iş birliği ve daha fazlası için kapsamlı çözümler. 
              Her ekip için doğru araçları keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tüm Ürünlerimiz
              </h2>
              <p className="text-xl text-gray-600">
                Her ihtiyaca uygun çözümler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Detayları Görüntüle
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Kategorilere Göre Keşfedin
              </h2>
              <p className="text-xl text-gray-600">
                İhtiyacınıza en uygun ürünü bulun
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Project Management */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proje Yönetimi</h3>
                <p className="text-gray-600 mb-6">
                  Yazılım geliştirme ve genel proje yönetimi için kapsamlı çözümler.
                </p>
                <div className="space-y-2">
                  <Link href="/products/jira-software" className="block text-blue-600 hover:text-blue-700 font-medium">
                    Jira Software
                  </Link>
                  <Link href="/products/jira-work-management" className="block text-blue-600 hover:text-blue-700 font-medium">
                    Jira Work Management
                  </Link>
                </div>
              </div>

              {/* Service Management */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Servis Yönetimi</h3>
                <p className="text-gray-600 mb-6">
                  IT servis yönetimi ve müşteri desteği için özel çözümler.
                </p>
                <div className="space-y-2">
                  <Link href="/products/jira-service-management" className="block text-green-600 hover:text-green-700 font-medium">
                    Jira Service Management
                  </Link>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">İş Birliği & Dokümantasyon</h3>
                <p className="text-gray-600 mb-6">
                  Ekip iş birliği ve bilgi yönetimi için güçlü platformlar.
                </p>
                <div className="space-y-2">
                  <Link href="/products/confluence" className="block text-orange-600 hover:text-orange-700 font-medium">
                    Confluence
                  </Link>
                  <Link href="/products/bitbucket" className="block text-orange-600 hover:text-orange-700 font-medium">
                    Bitbucket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Hangi ürünün size uygun olduğunu öğrenin
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Uzmanlarımızla görüşün ve ihtiyaçlarınıza en uygun Atlassian çözümünü keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/free-discovery" 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Keşif
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Uzmanla Görüşün
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 