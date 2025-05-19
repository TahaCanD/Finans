import React from 'react';
import { PieChart, BarChart, LineChart, Wallet, Shield, CreditCard, DollarSign, Package, Clock, UserPlus } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Kapsamlı Finansal Hizmetler</h2>
          <p className="text-gray-600 text-lg">
            Finansal hedeflerinize ulaşmanıza yardımcı olmak için tasarlanmış güçlü araç ve hizmetlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Hizmet 
            ikon={<PieChart size={24} className="text-blue-600" />}
            baslik="Portföy Yönetimi"
            bilgi="Yatırım portföyünüzü maksimum getiri için takip etmek, analiz etmek ve optimize etmek için gelişmiş araçlar."
            renk="blue"
          />
          
          <Hizmet 
            ikon={<BarChart size={24} className="text-teal-600" />}
            baslik="Piyasa Analizleri"
            bilgi="Her piyasa koşulunda bilinçli yatırım kararları almanıza yardımcı olacak gerçek zamanlı veri ve içgörüler."
            renk="teal"
          />
          
          <Hizmet 
            ikon={<Wallet size={24} className="text-amber-600" />}
            baslik="Varlık Planlaması"
            bilgi="Finansal hedeflerinize ve risk toleransınıza göre özelleştirilmiş kapsamlı varlık yönetimi çözümleri."
            renk="amber"
          />
          
          <Hizmet 
            ikon={<Shield size={24} className="text-emerald-600" />}
            baslik="Risk Değerlendirmesi"
            bilgi="Yatırımlarınızın kişisel risk profilinizle uyumlu olmasını sağlayan gelişmiş risk analizi."
            renk="emerald"
          />
          
          <Hizmet 
            ikon={<CreditCard size={24} className="text-violet-600" />}
            baslik="Akıllı Bankacılık"
            bilgi="Verimli finansal yönetim için bankacılık hizmetlerinizle sorunsuz entegrasyon."
            renk="violet"
          />
          
          <Hizmet 
            ikon={<LineChart size={24} className="text-rose-600" />}
            baslik="Performans Takibi"
            bilgi="Sezgisel gösterge panelleri ve detaylı raporlarla yatırımlarınızın performansını izleyin."
            renk="rose"
          />
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Neden Finans?</h3>
              
              <div className="space-y-6">
                <Bilgilendirme 
                  ikon={<DollarSign size={20} />}
                  baslik="Düşük Ücretler & Yüksek Getiriler"
                  bilgi="Sektörün önde gelen ücret yapısı ve tarihsel olarak güçlü getiriler."
                />
                <Bilgilendirme 
                  ikon={<Package size={20} />}
                  baslik="Hepsi Bir Arada Platform"
                  bilgi="Tüm yatırımlarınızı, bankacılık ve planlamalarınızı tek bir yerden yönetin."
                />
                <Bilgilendirme 
                  ikon={<Clock size={20} />}
                  baslik="7/24 Uzman Desteği"
                  bilgi="İhtiyaç duyduğunuz her an finansal danışmanlara erişim."
                />
                <Bilgilendirme 
                  ikon={<UserPlus size={20} />}
                  baslik="Kişiselleştirilmiş Strateji"
                  bilgi="Değişen ihtiyaçlarınıza uyum sağlayan özel finansal planlar."
                />
              </div>
            </div>
            
            <div className="w-full h-full relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl"></div>
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <Wallet className="w-40 h-40 text-gray-900/100" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const Hizmet = ({ ikon, baslik, bilgi, renk }) => {
  const arkaPlanRengi = {
    blue: 'bg-blue-50',
    teal: 'bg-teal-50',
    amber: 'bg-amber-50',
    emerald: 'bg-emerald-50',
    violet: 'bg-violet-50',
    rose: 'bg-rose-50',
  };
  
  const kenarRengi = {
    blue: 'border-blue-100',
    teal: 'border-teal-100',
    amber: 'border-amber-100',
    emerald: 'border-emerald-100',
    violet: 'border-violet-100',
    rose: 'border-rose-100',
  };
  
  return (
    <div className={`p-6 rounded-xl border ${kenarRengi[renk]} ${arkaPlanRengi[renk]} hover:shadow-md transition-shadow duration-300`}>
      <div className="mb-4">{ikon}</div>
      <h3 className="text-xl font-semibold text-blue-950 mb-3">{baslik}</h3>
      <p className="text-gray-600">{bilgi}</p>
    </div>
  );
};

const Bilgilendirme = ({ ikon, baslik, bilgi }) => (
  <div className="flex items-start">
    <div className="bg-teal-500/20 p-2 rounded-md mr-4 mt-1">
      <div className="text-teal-300">{ikon}</div>
    </div>
    <div>
      <h4 className="text-lg font-medium text-white mb-1">{baslik}</h4>
      <p className="text-gray-300 text-sm">{bilgi}</p>
    </div>
  </div>
);

export default FeaturesSection;