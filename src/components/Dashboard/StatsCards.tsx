import React from 'react';
import { TrendingUp, Users, ShoppingBag, CreditCard, RefreshCw } from 'lucide-react';
import { useStats } from '../../hooks/useStats';
import StatsCard from './StatsCard';

const StatsCards = () => {
  const { stats, loading, error, refreshStats } = useStats();

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">{error}</p>
        <button
          onClick={refreshStats}
          className="mt-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  const statsConfig = [
    {
      title: 'Total Sales',
      value: stats?.totalSales,
      icon: TrendingUp,
      color: 'blue',
    },
    {
      title: 'Active Users',
      value: stats?.activeUsers,
      icon: Users,
      color: 'green',
    },
    {
      title: 'New Orders',
      value: stats?.newOrders,
      icon: ShoppingBag,
      color: 'purple',
    },
    {
      title: 'Total Revenue',
      value: stats?.totalRevenue,
      icon: CreditCard,
      color: 'orange',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard Statistics</h2>
        <button
          onClick={refreshStats}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsConfig.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCards;