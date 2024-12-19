import React, { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import RefreshButton from '../../common/RefreshButton';

const YearlySales = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    { name: '2023', value: 5478 },
    { name: '2024', value: 4478 },
  ]);

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData(data.map(item => ({
        ...item,
        value: Math.floor(Math.random() * 6000) + 3000
      })));
    } finally {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Yearly Sales</h2>
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlySales;