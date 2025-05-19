import React, { useEffect } from 'react';
import { Search, Filter, ArrowUpDown, Plus, TrendingUp, TrendingDown } from 'lucide-react';

const InvestmentsPage = () => {
  useEffect(() => {
    document.title = 'Investments | FinEdge';
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">Your Investments</h1>
            <p className="text-gray-600">Track and manage your investment portfolio</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center transition duration-300">
              <Plus size={18} className="mr-2" /> Add Investment
            </button>
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
                placeholder="Search investments..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                <Filter size={18} className="mr-2 text-gray-500" /> Filters
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                <ArrowUpDown size={18} className="mr-2 text-gray-500" /> Sort
              </button>
            </div>
          </div>
        </div>

        {/* Investment Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <CategoryCard 
            title="Stocks"
            amount="$10,316.38"
            change="+2.6%"
            count={8}
            isPositive={true}
          />
          <CategoryCard 
            title="ETFs"
            amount="$6,877.58"
            change="+3.1%"
            count={6}
            isPositive={true}
          />
          <CategoryCard 
            title="Bonds"
            amount="$3,684.42"
            change="-0.3%"
            count={3}
            isPositive={false}
          />
          <CategoryCard 
            title="Crypto"
            amount="$2,456.28"
            change="+5.2%"
            count={4}
            isPositive={true}
          />
        </div>

        {/* Investment Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-lg text-blue-950">Your Holdings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableHeader text="Name" />
                  <TableHeader text="Type" />
                  <TableHeader text="Shares" />
                  <TableHeader text="Avg. Cost" />
                  <TableHeader text="Current Price" />
                  <TableHeader text="Market Value" />
                  <TableHeader text="Return" />
                  <TableHeader text="Actions" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <InvestmentRow
                  name="Apple Inc."
                  symbol="AAPL"
                  type="Stock"
                  shares={15}
                  avgCost={145.30}
                  currentPrice={182.25}
                  marketValue={2733.75}
                  returnAmount={552.75}
                  returnPercentage={25.4}
                />
                <InvestmentRow
                  name="Tesla, Inc."
                  symbol="TSLA"
                  type="Stock"
                  shares={8}
                  avgCost={215.65}
                  currentPrice={242.10}
                  marketValue={1936.80}
                  returnAmount={211.60}
                  returnPercentage={12.3}
                />
                <InvestmentRow
                  name="Vanguard Total Stock Market ETF"
                  symbol="VTI"
                  type="ETF"
                  shares={20}
                  avgCost={205.30}
                  currentPrice={241.60}
                  marketValue={4832.00}
                  returnAmount={725.00}
                  returnPercentage={17.7}
                />
                <InvestmentRow
                  name="Microsoft Corporation"
                  symbol="MSFT"
                  type="Stock"
                  shares={10}
                  avgCost={310.25}
                  currentPrice={385.80}
                  marketValue={3858.00}
                  returnAmount={755.50}
                  returnPercentage={24.4}
                />
                <InvestmentRow
                  name="Amazon.com, Inc."
                  symbol="AMZN"
                  type="Stock"
                  shares={12}
                  avgCost={145.30}
                  currentPrice={178.75}
                  marketValue={2145.00}
                  returnAmount={401.40}
                  returnPercentage={23.0}
                />
                <InvestmentRow
                  name="Bitcoin"
                  symbol="BTC"
                  type="Crypto"
                  shares={0.05}
                  avgCost={38450.00}
                  currentPrice={45230.00}
                  marketValue={2261.50}
                  returnAmount={339.00}
                  returnPercentage={17.6}
                />
                <InvestmentRow
                  name="iShares Core U.S. Aggregate Bond ETF"
                  symbol="AGG"
                  type="ETF"
                  shares={25}
                  avgCost={108.50}
                  currentPrice={104.30}
                  marketValue={2607.50}
                  returnAmount={-105.00}
                  returnPercentage={-3.9}
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Investments */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-blue-950">Recommended Investments</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
          </div>
          <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <RecommendationCard
              name="Alphabet Inc."
              symbol="GOOGL"
              price={145.82}
              change="+2.4%"
              reason="Tech sector growth potential"
            />
            <RecommendationCard
              name="Vanguard FTSE Developed Markets ETF"
              symbol="VEA"
              price={48.35}
              change="+0.8%"
              reason="International diversification"
            />
            <RecommendationCard
              name="Costco Wholesale Corporation"
              symbol="COST"
              price={735.24}
              change="+1.2%"
              reason="Strong consumer staples"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader = ({ text }) => (
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    {text}
  </th>
);

const CategoryCard = ({ 
  title,
  amount,
  change,
  count,
  isPositive
}) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-semibold text-blue-950">{title}</h3>
      <span className="text-gray-500 text-sm">{count} assets</span>
    </div>
    <p className="text-2xl font-bold text-blue-950 mb-2">{amount}</p>
    <div className={`inline-flex items-center ${
      isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
    } rounded-full px-2 py-1 text-xs font-medium`}>
      {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
      {change}
    </div>
  </div>
);

const InvestmentRow = ({
  name,
  symbol,
  type,
  shares,
  avgCost,
  currentPrice,
  marketValue,
  returnAmount,
  returnPercentage
}) => {
  const isPositive = returnAmount >= 0;
  
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className="font-medium text-blue-950">{name}</div>
          <div className="text-sm text-gray-500">{symbol}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
          {type}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
        {shares.toFixed(type === 'Crypto' ? 4 : 0)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
        ${avgCost.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
        ${currentPrice.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-950">
        ${marketValue.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={isPositive ? 'text-green-600' : 'text-red-600'}>
          <div className="flex items-center">
            {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
            ${Math.abs(returnAmount).toFixed(2)} ({isPositive ? '+' : '-'}{Math.abs(returnPercentage).toFixed(1)}%)
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-blue-600 hover:text-blue-800 mr-4">Buy</button>
        <button className="text-red-600 hover:text-red-800">Sell</button>
      </td>
    </tr>
  );
};

const RecommendationCard = ({
  name,
  symbol,
  price,
  change,
  reason
}) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-medium text-blue-950">{name}</h3>
        <p className="text-sm text-gray-500">{symbol}</p>
      </div>
      <div className="text-green-600 flex items-center text-sm font-medium">
        <TrendingUp size={14} className="mr-1" /> {change}
      </div>
    </div>
    <p className="text-lg font-bold text-blue-950 mb-3">${price.toFixed(2)}</p>
    <div className="flex items-center text-sm text-gray-700">
      <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs">Recommended</div>
      <p className="ml-2">{reason}</p>
    </div>
    <button className="mt-4 w-full bg-blue-950 hover:bg-blue-900 text-white py-2 rounded-lg transition duration-300">
      View Details
    </button>
  </div>
);

export default InvestmentsPage;