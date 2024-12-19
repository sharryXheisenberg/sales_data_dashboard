import { api } from './config';
import { API_ENDPOINTS } from './endpoints';

export interface SalesDataPoint {
  name: string;
  value: number;
}

export const fetchSalesData = async (): Promise<SalesDataPoint[]> => {
  try {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(month => ({
      name: month,
      value: Math.floor(Math.random() * 5000) + 1000,
    }));
  } catch (error) {
    console.error('Error fetching sales data:', error);
    throw new Error('Failed to fetch sales data');
  }
};