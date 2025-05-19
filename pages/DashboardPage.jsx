import React from 'react';
import { LineChart, BarChart, PieChart, Wallet, ArrowRight, DollarSign, TrendingUp, TrendingDown, BarChart2, History, Bell } from 'lucide-react';

const DashboardPage = () => {
  

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">Finansal Panel</h1>
            <p className="text-gray-600">Finansal portföyünüz ve aktivitelerinize genel bakış</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="bg-blue-950 text-white px-3 py-1 rounded-md text-sm font-medium mr-4">
              Son güncelleme: Bugün, 10:45
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              <Bell size={16} className="mr-1" /> Bildirimler
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <BalanceCard 
            metin="Toplam Bakiye"
            deger="₺24.562,80"
            oran="+%2,4"
            trend="up"
            icon={<Wallet size={20} />}
            renk="blue"
          />
          <BalanceCard 
            metin="Yatırımlar"
            deger="₺18.245,30"
            oran="+%3,8"
            trend="up"
            icon={<TrendingUp size={20} />}
            renk="teal"
          />
          <BalanceCard 
            metin="Harcamalar"
            deger="₺3.286,50"
            oran="-%1,2"
            trend="down"
            icon={<TrendingDown size={20} />}
            renk="amber"
          />
          <BalanceCard 
            metin="Birikimler"
            deger="₺6.317,50"
            oran="+%0,8"
            trend="up"
            icon={<DollarSign size={20} />}
            renk="emerald"
          />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-blue-950">Portföy Performansı</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs rounded-md bg-blue-50 text-blue-600 font-medium">1H</button>
                <button className="px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-600 font-medium cursor-pointer">1A</button>
                <button className="px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-600 font-medium cursor-pointer">3A</button>
                <button className="px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-600 font-medium cursor-pointer">1Y</button>
                <button className="px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-600 font-medium cursor-pointer">Tümü</button>
              </div>
            </div>

            <div className="h-64 w-full flex items-center justify-center">
              <LineChart size={280} className="text-gray-300" />
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">

              <div>
                <p className="text-sm text-gray-500">Başlangıç Değeri</p>
                <p className="font-medium text-blue-950">₺21.458,30</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Mevcut Değer</p>
                <p className="font-medium text-blue-950">₺24.562,80</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Toplam Getiri</p>
                <p className="font-medium text-green-600">+₺3.104,50 (%14,5)</p>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-blue-950">Varlık Dağılımı</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Detaylar</button>
            </div>
            <div className="h-48 w-full flex items-center justify-center mb-6">
              <PieChart size={180} className="text-gray-300" />
              <p className="absolute text-gray-500 text-sm">Varlık dağılımı grafiği burada görüntülenecek</p>
            </div>
            <div className="space-y-3">
              <AllocationItem yazi="Hisse Senetleri" oran={42} deger="₺10.316,38" renk="blue" />
              <AllocationItem yazi="BYF'ler" oran={28} deger="₺6.877,58" renk="teal" />
              <AllocationItem yazi="Tahviller" oran={15} deger="₺3.684,42" renk="amber" />
              <AllocationItem yazi="Kripto" oran={10} deger="₺2.456,28" renk="purple" />
              <AllocationItem yazi="Nakit" oran={5} deger="₺1.228,14" renk="gray" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-blue-950">Son İşlemler</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Tümünü Gör <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              <TransactionItem 
                type="Alış"
                asset="AAPL"
                tarih="Bugün, 09:24"
                deger="₺1.450,00"
                durum="Tamamlandı"
              />
              <TransactionItem 
                type="Satış"
                asset="TSLA"
                tarih="Dün, 14:38"
                deger="₺2.780,50"
                durum="Tamamlandı"
              />
              <TransactionItem 
                type="Alış"
                asset="VTI"
                tarih="15 Haz, 11:20"
                deger="₺3.200,00"
                durum="Tamamlandı"
              />
              <TransactionItem 
                type="Yatırma"
                asset="Banka Transferi"
                tarih="12 Haz, 10:05"
                deger="₺5.000,00"
                durum="Tamamlandı"
              />
              <TransactionItem 
                type="Alış"
                asset="BTC"
                tarih="10 Haz, 15:45"
                deger="₺1.000,00"
                durum="Tamamlandı"
              />
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-blue-950">Piyasa Haberleri</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Daha Fazla Haber <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              <NewsItem 
                metin="Merkez Bankası faiz kararını açıkladı"
                kaynak="Financial zamans"
                zaman="2 saat önce"
                etki="Yüksek"
              />
              <NewsItem 
                metin="Teknoloji hisseleri olumlu bilanço sonrası yükselişte"
                kaynak="Bloomberg"
                zaman="4 saat önce"
                etki="Orta"
              />
              <NewsItem 
                metin="Küresel piyasalar ekonomik verilere tepki verdi"
                kaynak="Reuters"
                zaman="6 saat önce"
                etki="Orta"
              />
              <NewsItem 
                metin="Kripto para piyasaları için yeni düzenlemeler önerildi"
                kaynak="CNBC"
                zaman="Dün"
                etki="Yüksek"
              />
              <NewsItem 
                metin="Çeyrek dönem bilançoları: Neler bekleniyor?"
                kaynak="Wall Street Journal"
                zaman="Dün"
                etki="Düşük"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BalanceCard = ({ 
  metin, 
  deger, 
  oran, 
  trend, 
  icon, 
  renk 
}) => {
  const bgColors = {
    blue: 'bg-blue-500',
    teal: 'bg-teal-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <p className="text-gray-500 text-sm">{metin}</p>
        <div className={`${bgColors[renk]} p-2 rounded-md text-white`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-blue-950 mb-2">{deger}</p>
      <div className={`inline-flex items-center ${
        trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
      } rounded-full px-2 py-1 text-xs font-medium`}>
        {trend === 'up' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
        {oran}
      </div>
    </div>
  );
};

const AllocationItem = ({ 
  yazi, 
  oran, 
  deger, 
  color 
}) => {
  const bgColors = {
    blue: 'bg-blue-500',
    teal: 'bg-teal-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    gray: 'bg-gray-500',
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700">{yazi}</span>
        <span className="text-sm font-medium text-blue-950">{deger} (%{oran})</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${bgColors[color]} h-2 rounded-full`} 
          style={{ width: `${oran}%` }}
        ></div>
      </div>
    </div>
  );
};

const TransactionItem = ({ 
  type, 
  asset, 
  tarih, 
  deger, 
  durum 
}) => {
  const isPositive = type === 'Alış' || type === 'Yatırma';
  
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <div className={`p-2 rounded-md mr-4 ${
          type === 'Alış' ? 'bg-green-100 text-green-600' :
          type === 'Satış' ? 'bg-red-100 text-red-600' :
          type === 'Yatırma' ? 'bg-blue-100 text-blue-600' :
          'bg-gray-100 text-gray-600'
        }`}>
          {type === 'Alış' && <TrendingUp size={16} />}
          {type === 'Satış' && <TrendingDown size={16} />}
          {type === 'Yatırma' && <DollarSign size={16} />}
          {type === 'Çekme' && <Wallet size={16} />}
        </div>
        <div>
          <p className="font-medium text-blue-950">{type} {asset}</p>
          <p className="text-xs text-gray-500">{tarih}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{deger}</p>
        <p className="text-xs text-gray-500">{durum}</p>
      </div>
    </div>
  );
};

const NewsItem = ({ 
  metin, 
  kaynak, 
  zaman, 
  etki 
}) => {
  const ekleRenk = 
    etki === 'Yüksek' ? 'bg-red-100 text-red-600' : 
    etki === 'Orta' ? 'bg-amber-100 text-amber-600' : 
    'bg-green-100 text-green-600';
    
  return (
    <div className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
      <p className="font-medium text-blue-950 mb-1">{metin}</p>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">{kaynak} · {zaman}</p>
        <span className={`text-xs px-2 py-0.5 rounded-full ${ekleRenk}`}>{etki}</span>
      </div>
    </div>
  );
};

export default DashboardPage;