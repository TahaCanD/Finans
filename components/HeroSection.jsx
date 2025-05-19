import React from 'react';
import { ArrowRight, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 to-blue-900 pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-teal-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-800/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block py-1 px-3 text-sm font-medium bg-teal-500/20 text-teal-300 rounded-full mb-5">
                2020'den Beri Finansal Mükemmellik
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Finansal <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Geleceğinizi</span> Güçlendirin
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg">
                Hedeflerinize güvenle ulaşmanıza yardımcı olan yenilikçi varlık yönetimi, yatırım ve finansal planlama çözümleri.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-950 bg-white hover:bg-gray-100 shadow-lg transition duration-300"
              >
                Hemen Başla <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition duration-300"
              >
                Bize Ulaşın
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">$2.5B+</p>
                <p className="text-sm text-gray-400">Yönetilen Varlık</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">15B+</p>
                <p className="text-sm text-gray-400">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">%98</p>
                <p className="text-sm text-gray-400">Müşteri Memnuniyeti</p>
              </div>
            </div>
          </div>

          <div className="relative lg:flex hidden justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
              <div className="bg-gradient-to-b from-blue-800 to-blue-950 rounded-xl p-5 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-400 text-xs">Toplam Bakiye</p>
                    <p className="text-white text-2xl font-bold">₺24.562,80</p>
                  </div>
                  <div className="bg-teal-500/20 p-2 rounded-md">
                    <TrendingUp size={24} className="text-teal-400" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-white/10 rounded-lg px-3 py-1 text-xs text-white">Bugün +%2,4</div>
                  <div className="bg-teal-500/20 rounded-lg px-3 py-1 text-xs text-teal-300">Bu ay +%12,5</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-2 rounded-md mr-3">
                      <Shield size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">BYF'ler</p>
                      <p className="text-xs text-gray-400">12 varlık</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">₺8.540,20</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-amber-500/20 p-2 rounded-md mr-3">
                      <DollarSign size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Hisse Senetleri</p>
                      <p className="text-xs text-gray-400">8 şirket</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">₺12.458,60</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-teal-500/20 p-2 rounded-md mr-3">
                      <TrendingUp size={20} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Kripto</p>
                      <p className="text-xs text-gray-400">4 varlık</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">₺3.564,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;