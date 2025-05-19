import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-2 rounded-md mr-2">
                <span className="font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl text-white">Finans</span>
            </div>

            <p className="text-gray-300 text-sm">
              Yenilikçi çözümler ve uzman rehberliğiyle finansal geleceğinizi güçlendiriyoruz.
            </p>

            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <FooterLink text="Ana Sayfa" to="/" />
              <FooterLink text="Panel" to="/dashboard" />
              <FooterLink text="Yatırımlar" to="/investments" />
              <FooterLink text="Piyasa Haberleri" to="/news" />
              <FooterLink text="İletişim" to="/contact" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <FooterLink text="Portföy Yönetimi" to="/services/portfolio" />
              <FooterLink text="Finansal Danışmanlık" to="/services/advisory" />
              <FooterLink text="Varlık Planlaması" to="/services/planning" />
              <FooterLink text="Risk Yönetimi" to="/services/risk" />
              <FooterLink text="Piyasa Analizleri" to="/services/analysis" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-teal-400 mr-2" />
                <span className="text-gray-300">+90 (212) 555 0123</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-teal-400 mr-2" />
                <span className="text-gray-300">iletisim@finans.com.tr</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-teal-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  Levent 199, Büyükdere Cad.<br />
                  34394 Şişli, İstanbul
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Finans. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 text-sm">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 text-sm">
                Kullanım Koşulları
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-teal-400 text-sm">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ text, to }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
    >
      {text}
    </Link>
  </li>
);

export default Footer;