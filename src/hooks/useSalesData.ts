import { useState, useEffect } from 'react';
import { fetchSalesData } from '../services/api';

export interface SalesData {
  name: string;
  value: number;
}

export const useSalesData = (refreshInterval = 60000) => {
  const [data, setData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshData = async () => {
    try {
      const newData = await fetchSalesData();
      setData(newData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch sales data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { data, loading, error, refreshData };
};