import React from 'react';
import { MapPin } from 'lucide-react';

const ActiveUsersMap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Users</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">Export</button>
      </div>
      <div className="relative h-64 bg-gray-100 rounded-lg">
        {/* World Map Background - You can use an actual map library like react-simple-maps */}
        <div className="absolute inset-0 opacity-50 bg-contain bg-no-repeat bg-center"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80)' }}>
        </div>
        {/* Sample Active User Points */}
        <div className="absolute top-1/4 left-1/4">
          <MapPin className="h-4 w-4 text-blue-600" />
        </div>
        <div className="absolute top-1/3 right-1/3">
          <MapPin className="h-4 w-4 text-blue-600" />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold">23,214</p>
        <p className="text-gray-600">Total Active Users</p>
      </div>
    </div>
  );
};

export default ActiveUsersMap;