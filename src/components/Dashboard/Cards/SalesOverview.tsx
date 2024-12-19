import React, { useState, useCallback } from 'react';
import { Circle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import RefreshButton from '../../common/RefreshButton';

const SalesOverview = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    { name: 'Sales', value: 500 },
    { name: 'Remaining', value: 300 },
  ]);

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData([
        { name: 'Sales', value: Math.floor(Math.random() * 1000) },
        { name: 'Remaining', value: Math.floor(Math.random() * 500) },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  const COLORS = ['#4F46E5', '#E5E7EB'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      {/* Rest of the component remains the same */}
      <div className="flex items-center justify-between">
        <div className="w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={25}
                outerRadius={40}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${data[0].value}.00</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Circle className="h-3 w-3 fill-blue-600 text-blue-600" />
            <span>$23,450 Profit</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Circle className="h-3 w-3 fill-gray-300 text-gray-300" />
            <span>$12,450 Expenses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;