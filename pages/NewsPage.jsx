import React, { useEffect, useState } from 'react';
import { Search, Filter, Clock, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';

const categories = ['Tümü', 'Piyasalar', 'Hisseler', 'Ekonomi', 'Kripto', 'Teknoloji', 'Kişisel Finans'];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  useEffect(() => {
    document.title = 'Piyasa Haberleri | FinEdge';
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">Piyasa Haberleri</h1>
            <p className="text-gray-600">En güncel finansal haberler ve analizler</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <div className="relative w-full sm:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Haberlerde ara..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                <Filter size={18} className="mr-2 text-gray-500" /> Filtreler
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                <Clock size={18} className="mr-2 text-gray-500" /> En Yeni
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category 
                  ? 'bg-blue-950 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-64 bg-[url('https://images.pexels.com/photos/7567482/pexels-photo-7567482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">ÖNE ÇIKAN</span>
                  <span className="ml-2 text-gray-500 text-sm">Piyasalar</span>
                </div>
                <span className="text-gray-500 text-sm">2 saat önce</span>
              </div>
              <h2 className="text-xl font-bold text-blue-950 mb-3">Merkez Bankası Faiz Kararını Açıkladı: Yatırımlarınız İçin Ne Anlama Geliyor?</h2>
              <p className="text-gray-600 mb-4">Merkez Bankası'nın son politika kararı piyasa dinamikleri üzerinde önemli etkilere sahip. Uzmanlar, çeşitli varlık sınıfları üzerindeki potansiyel etkiyi ve yatırımcıların portföy stratejilerinde neleri göz önünde bulundurması gerektiğini analiz ediyor.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Yazar" className="w-8 h-8 rounded-full mr-3" />
                  <span className="text-gray-700">Yazan: Mehmet Yılmaz</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-[url('https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">Hisseler</span>
                  <span className="text-gray-500 text-sm">4 saat önce</span>
                </div>
                <h2 className="text-lg font-bold text-blue-950 mb-2">Teknoloji Hisseleri Olumlu Bilanço Sonrası Yükselişte</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Devamını Oku</button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-[url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">Ekonomi</span>
                  <span className="text-gray-500 text-sm">6 saat önce</span>
                </div>
                <h2 className="text-lg font-bold text-blue-950 mb-2">Küresel Piyasalar Ekonomik Verilere Tepki Verdi</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Devamını Oku</button>
              </div>
            </div>
          </div>
        </div>

        {/* Market Updates */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-950">Piyasa Güncellemeleri</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tümünü Gör</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MarketUpdateCard 
              index="BIST 100"
              value="8.562,30"
              change="+32,45"
              percentage="+%0,72"
              isPositive={true}
            />
            <MarketUpdateCard 
              index="Dolar/TL"
              value="34,78"
              change="+0,15"
              percentage="+%0,45"
              isPositive={true}
            />
            <MarketUpdateCard 
              index="Euro/TL"
              value="37,65"
              change="-0,23"
              percentage="-%0,16"
              isPositive={false}
            />
          </div>
        </div>

        {/* Latest News */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-950">Son Haberler</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Tümünü Gör</button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <NewsCard key={item} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-medium rounded-lg transition duration-300">
              Daha Fazla Haber Yükle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketUpdateCard = ({ 
  index, 
  value, 
  change, 
  percentage, 
  isPositive 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-blue-950">{index}</h3>
        {isPositive ? (
          <TrendingUp size={20} className="text-green-500" />
        ) : (
          <TrendingDown size={20} className="text-red-500" />
        )}
      </div>
      <p className="text-2xl font-bold text-blue-950 mb-2">{value}</p>
      <div className={`inline-flex items-center ${
        isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        <span className="text-sm font-medium">{change}</span>
        <span className="text-sm font-medium ml-1">({percentage})</span>
      </div>
    </div>
  );
};

const NewsCard = () => {
  const randomCategory = ['Piyasalar', 'Ekonomi', 'Hisseler', 'Kripto'][Math.floor(Math.random() * 4)];
  const randomTitle = [
    'Merkez Bankası\'nın Faiz Kararı Piyasaları Nasıl Etkileyecek?',
    'Enflasyon Verileri Açıklandı: Piyasalara Etkisi',
    'Teknoloji Sektöründe Yeni Yatırım Fırsatları',
    'Kripto Para Piyasalarında Son Durum'
  ][Math.floor(Math.random() * 4)];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
          <div className="w-full md:w-40 h-32 bg-gray-200 rounded-lg overflow-hidden">
            <div className="bg-[url('https://images.pexels.com/photos/7567569/pexels-photo-7567569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center h-full"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{randomCategory}</span>
              <span className="ml-2 text-gray-500 text-sm flex items-center">
                <Clock size={14} className="mr-1" /> 3 saat önce
              </span>
            </div>
            <span className="text-sm text-gray-500 flex items-center">
              <BookOpen size={14} className="mr-1" /> 5 dk okuma
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-blue-950 mb-2">{randomTitle}</h3>
          
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Yazar" className="w-8 h-8 rounded-full mr-3" />
              <span className="text-gray-700">Yazan: Ayşe Demir</span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Devamını Oku</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;