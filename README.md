# YourDashboard

A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. Features real-time data updates, interactive charts, and a clean, professional design.

## 🚀 Features

- **Real-time Data Updates**: Automatic refresh of dashboard metrics
- **Interactive Charts**: Visual representation of sales and revenue data
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Type Safety**: Built with TypeScript for better development experience

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Recharts
- Axios
- Lucide Icons
- React Loading Skeleton

## 🚀 Live Project
Check out the live version of the app here: [YourDashboard](https://dash-board-smoky.vercel.app/)  
Explore the features and experience the seamless interface directly in your browser!


## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sharryXheisenberg/sales_data_dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd modern-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### API Configuration
To configure the API endpoints, update the `src/services/api/config.ts` file:

```typescript
export const API_BASE_URL = 'your-api-url';
```

## 📁 Project Structure

```
modern-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── StatsCards.tsx
│   │   │   └── SalesOverview.tsx
│   │   └── Layout/
│   │       ├── DashboardLayout.tsx
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── hooks/
│   │   ├── useSalesData.ts
│   │   └── useStats.ts
│   ├── providers/
│   │   └── SkeletonProvider.tsx
│   ├── services/
│   │   └── api/
│   │       ├── config.ts
│   │       ├── endpoints.ts
│   │       ├── sales.service.ts
│   │       └── stats.service.ts
│   ├── App.tsx
│   └── main.tsx
└── README.md
```

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The build files will be in the `dist` directory

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any queries or suggestions, feel free to reach out via [GitHub Issues](https://github.com/sharryXheisenberg/sales_data_dashboard/issues)

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
