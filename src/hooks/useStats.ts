import { useState, useEffect } from 'react';
import { fetchStats } from '../services/api';

export interface Stats {
  totalSales: string;
  activeUsers: string;
  newOrders: string;
  totalRevenue: string;
}

export const useStats = (refreshInterval = 30000) => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshStats = async () => {
    try {
      const data = await fetchStats();
      setStats(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshStats();
    const interval = setInterval(refreshStats, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { stats, loading, error, refreshStats };
};