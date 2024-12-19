import React from 'react';
import SalesOverview from './Cards/SalesOverview';
import RevenueUpdates from './Cards/RevenueUpdates';
import YearlySales from './Cards/YearlySales';
import ActiveUsersMap from './Cards/ActiveUsersMap';
import PaymentGateways from './Cards/PaymentGateways';

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <SalesOverview />
      </div>
      <div className="lg:col-span-1">
        <RevenueUpdates />
      </div>
      <div className="lg:col-span-1">
        <YearlySales />
      </div>
      <div className="lg:col-span-2">
        <ActiveUsersMap />
      </div>
      <div className="lg:col-span-1">
        <PaymentGateways />
      </div>
    </div>
  );
};

export default DashboardGrid;