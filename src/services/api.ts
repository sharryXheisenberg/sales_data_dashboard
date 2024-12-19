import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const fetchStats = async () => {
  // Simulate real stats data
  const response = await api.get('/users');
  return {
    totalSales: `$${Math.floor(Math.random() * 100000)}`,
    activeUsers: (2000 + Math.floor(Math.random() * 1000)).toString(),
    newOrders: (300 + Math.floor(Math.random() * 100)).toString(),
    totalRevenue: `$${Math.floor(Math.random() * 150000)}`,
  };
};

export const fetchSalesData = async () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 5000) + 1000,
  }));
};