import axios from 'axios';


export const API_BASE_URL = 'https://api.example.com/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});