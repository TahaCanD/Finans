import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 to-blue-900 relative overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Finansal Geleceğinizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Binlerce müşterimiz gibi siz de uzman rehberliğimiz ve yenilikçi çözümlerimizle finansal hedeflerinize ulaşın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center"
            >
              Hemen Başlayın <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/30 backdrop-blur-sm transition duration-300"
            >
              Danışmanlık Randevusu
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard numara="15B+" yazi="Mutlu Müşteri" />
            <StatCard numara="₺2.5M+" yazi="Yönetilen Varlık" />
            <StatCard numara="10+" yazi="Yıllık Deneyim" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ numara, yazi }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
    <p className="text-4xl font-bold text-white mb-2">{numara}</p>
    <p className="text-gray-300">{yazi}</p>
  </div>
);

export default CTASection;