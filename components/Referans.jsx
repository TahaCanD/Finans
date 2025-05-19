import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import kullanici1 from '../assets/kullanici1.webp';
import kullanici2 from '../assets/kullanici2.webp';
import kullanici3 from '../assets/kullanici3.webp';

const puanlar = [
  {
    id: 1,
    ad: 'Elif Yılmaz',
    rutbe: 'KOBİ Sahibi',
    metin: 'FinEdge, işletme finanslarımı yönetme şeklimi tamamen değiştirdi. Onların öngörüleri sayesinde yatırım getirilerimi sadece bir yılda %26 artırdım.',
    avatar: kullanici1,
    puan: 5
  },
  {
    id: 2,
    ad: 'Ahmet Kaya',
    rutbe: 'Proje Müdürü',
    metin: 'Aldığım kişiselleştirilmiş hizmet ve finansal tavsiyeler tüm beklentilerimi aştı. Artık emeklilik planlamam konusunda kendimi güvende hissediyorum.',
    avatar: kullanici2,
    puan: 5
  },
  {
    id: 3,
    ad: 'Zeynep Demir',
    rutbe: 'Pazarlama Direktörü',
    metin: 'Portföy yönetim araçları sezgisel ve güçlü. Tüm yatırımlarımı gerçek zamanlı olarak takip edebiliyor ve hızlıca bilinçli kararlar alabiliyorum.',
    avatar: kullanici3,
    puan: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const sagPanel = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % puanlar.length);
  };
  
  const solPanel = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + puanlar.length) % puanlar.length);
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-gray-600 text-lg">
            Binlerce müşterimizin finansal hedeflerine nasıl ulaştığını keşfedin.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {puanlar.map((puan) => (
                <div key={puan.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={20} 
                          className={i < puan.puan ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8">
                      "{puan.metin}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={puan.avatar} 
                        alt={puan.ad} 
                        className="w-14 h-14 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <p className="font-semibold text-blue-950">{puan.ad}</p>
                        <p className="text-gray-500 text-sm">{puan.rutbe}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {puanlar.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${index + 1}. görüşe git`}
              />
            ))}
          </div>
          
          <button 
            onClick={solPanel}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-blue-950 hover:bg-gray-100 transition-colors duration-300 hidden md:block"
            aria-label="Önceki görüş"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={sagPanel}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-blue-950 hover:bg-gray-100 transition-colors duration-300 hidden md:block"
            aria-label="Sonraki görüş"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;