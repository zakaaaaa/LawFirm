import React, { useState, useEffect } from 'react';
import { Scale, Users, Award, BookOpen, Mail, Phone, MapPin, Menu, X, ChevronRight, Briefcase, FileText, Building } from 'lucide-react';

const LawFirmWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Litigasi & Arbitrase",
      description: "Representasi hukum di pengadilan dan arbitrase dengan strategi menang yang terbukti efektif",
      features: ["Perdata", "Pidana", "TUN", "Arbitrase Internasional"]
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Hukum Korporasi",
      description: "Solusi hukum komprehensif untuk transaksi bisnis dan kepatuhan korporasi",
      features: ["M&A", "Due Diligence", "Corporate Governance", "Compliance"]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Kontrak & Transaksi",
      description: "Penyusunan dan negosiasi kontrak dengan presisi tinggi untuk melindungi kepentingan klien",
      features: ["Drafting", "Review", "Negosiasi", "Joint Venture"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Investasi & Properti",
      description: "Pendampingan hukum untuk investasi dan transaksi properti skala besar",
      features: ["Real Estate", "Foreign Investment", "Project Finance", "Construction"]
    }
  ];

  const portfolio = [
    {
      year: "2024",
      title: "Sengketa Kontrak Infrastruktur Senilai Rp 500 Miliar",
      client: "PT Konstruksi Nasional",
      result: "Kemenangan penuh di tingkat kasasi dengan kompensasi maksimal",
      category: "Litigasi"
    },
    {
      year: "2024",
      title: "Merger & Akuisisi Perusahaan Teknologi",
      client: "Tech Unicorn Indonesia",
      result: "Transaksi USD 80 Juta berhasil closed dalam 4 bulan",
      category: "Korporasi"
    },
    {
      year: "2023",
      title: "Foreign Direct Investment - Manufacturing Sector",
      client: "Global Manufacturing Corp",
      result: "Investasi USD 150 Juta dengan struktur optimal",
      category: "Investasi"
    },
    {
      year: "2023",
      title: "Kompleks Mixed-Use Development 50 Hektar",
      client: "Premium Developer Indonesia",
      result: "Legal clearance penuh dalam 6 bulan termasuk perizinan",
      category: "Properti"
    }
  ];

  const team = [
    {
      name: "Dr. Ahmad Wijaya, S.H., LL.M.",
      position: "Senior Managing Partner",
      education: "Harvard Law School (LL.M.) • Universitas Indonesia (S.H.)",
      experience: "28 tahun",
      specialization: "Corporate Law & M&A"
    },
    {
      name: "Sarah Kusuma, S.H., LL.M.",
      position: "Managing Partner",
      education: "Oxford University (LL.M.) • Universitas Gadjah Mada (S.H.)",
      experience: "22 tahun",
      specialization: "Litigation & Arbitration"
    },
    {
      name: "Budi Santoso, S.H., M.Kn.",
      position: "Partner",
      education: "Universitas Indonesia (M.Kn., S.H.)",
      experience: "18 tahun",
      specialization: "Property & Investment Law"
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Scale className={`w-10 h-10 transition-colors ${scrolled ? 'text-amber-600' : 'text-white'}`} strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-600 rounded-full"></div>
              </div>
              <div>
                <h1 className={`text-2xl font-serif tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Wijaya & Partners
                </h1>
                <p className={`text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                  Advocates & Legal Consultants
                </p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['Beranda', 'Layanan', 'Portfolio', 'Tim', 'Kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm tracking-wide font-light transition-all relative group ${
                    scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-6 space-y-4">
              {['Beranda', 'Layanan', 'Portfolio', 'Tim', 'Kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 text-amber-500 text-sm tracking-widest uppercase">
              <div className="w-12 h-px bg-amber-500"></div>
              <span>Excellence in Legal Services</span>
              <div className="w-12 h-px bg-amber-500"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Keunggulan Hukum<br />untuk Masa Depan Bisnis
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Memberikan solusi hukum strategis dengan integritas tinggi untuk perusahaan dan individu di seluruh Indonesia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('kontak')}
              className="group bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm transition-all inline-flex items-center space-x-3 shadow-lg hover:shadow-2xl"
            >
              <span className="font-light tracking-wide">Konsultasi Sekarang</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-sm transition-all font-light tracking-wide"
            >
              Lihat Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10">
            {[
              { number: "28+", label: "Tahun Pengalaman" },
              { number: "750+", label: "Kasus Sukses" },
              { number: "100+", label: "Klien Korporasi" },
              { number: "Rp 50T+", label: "Nilai Transaksi" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-amber-500 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-amber-600 text-sm tracking-widest uppercase">
                <div className="w-8 h-px bg-amber-600"></div>
                <span>Praktik Hukum</span>
                <div className="w-8 h-px bg-amber-600"></div>
              </div>
            </div>
            <h2 className="text-5xl font-serif text-gray-900 mb-6">Bidang Keahlian Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Solusi hukum komprehensif yang dirancang untuk melindungi dan memajukan kepentingan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 border border-gray-200 hover:border-amber-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-amber-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-6xl font-serif text-gray-100 group-hover:text-amber-50 transition-colors">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 tracking-wide">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-amber-600 text-sm tracking-widest uppercase">
                <div className="w-8 h-px bg-amber-600"></div>
                <span>Pencapaian</span>
                <div className="w-8 h-px bg-amber-600"></div>
              </div>
            </div>
            <h2 className="text-5xl font-serif text-gray-900 mb-6">Portfolio Kasus Terpilih</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Rekam jejak kesuksesan dalam menangani kasus-kasus kompleks dan bernilai tinggi
            </p>
          </div>

          <div className="space-y-6">
            {portfolio.map((item, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-r from-gray-50 to-white p-8 border-l-4 border-amber-600 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-6 mb-4 md:mb-0">
                    <div className="text-5xl font-serif text-amber-600">{item.year}</div>
                    <div>
                      <h3 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 tracking-wide">Klien: {item.client}</p>
                    </div>
                  </div>
                  <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm tracking-wide">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-700 font-light leading-relaxed border-t border-gray-200 pt-4">
                  <span className="font-medium">Hasil:</span> {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-amber-500 text-sm tracking-widest uppercase">
                <div className="w-8 h-px bg-amber-500"></div>
                <span>Tim Ahli</span>
                <div className="w-8 h-px bg-amber-500"></div>
              </div>
            </div>
            <h2 className="text-5xl font-serif text-white mb-6">Para Partner Kami</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Advokat berpengalaman dengan track record internasional dan dedikasi tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-gray-800 hover:bg-gray-800/50 p-8 border border-gray-700 hover:border-amber-600 transition-all"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-gray-700 to-gray-900 mb-6 flex items-center justify-center relative overflow-hidden">
                  <Users className="w-24 h-24 text-amber-500/20" strokeWidth={1} />
                  <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/10 transition-colors"></div>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                <p className="text-amber-500 font-light mb-4 tracking-wide">{member.position}</p>
                <div className="space-y-3 text-sm text-gray-400 font-light">
                  <p className="leading-relaxed">{member.education}</p>
                  <p><span className="text-white">Pengalaman:</span> {member.experience}</p>
                  <p><span className="text-white">Spesialisasi:</span> {member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-6">Mari Berdiskusi</h2>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi awal yang rahasia dan profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                <Phone className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4">Telepon</h3>
              <p className="text-white/80 font-light mb-2">+62 21 5789 1234</p>
              <p className="text-white/80 font-light">+62 812 9876 5432</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                <Mail className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4">Email</h3>
              <p className="text-white/80 font-light mb-2">contact@wijayapartners.id</p>
              <p className="text-white/80 font-light">info@wijayapartners.id</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                <MapPin className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4">Kantor Pusat</h3>
              <p className="text-white/80 font-light mb-2">Menara Sudirman, Lantai 28</p>
              <p className="text-white/80 font-light">Jl. Jend. Sudirman Kav. 60</p>
              <p className="text-white/80 font-light">Jakarta Selatan 12190</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              <div>
                <p className="text-white font-serif text-lg">Wijaya & Partners</p>
                <p className="text-xs tracking-widest uppercase text-gray-500">Law Firm</p>
              </div>
            </div>
            <p className="text-sm font-light">© 2024 Wijaya & Partners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawFirmWebsite;