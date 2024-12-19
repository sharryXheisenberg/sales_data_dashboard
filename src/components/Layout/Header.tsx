import React, { useState } from 'react';
import { Bell, Search, Settings, X } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const notifications = [
    { id: 1, text: 'New order received', time: '5 minutes ago' },
    { id: 2, text: 'Server update completed', time: '1 hour ago' },
    { id: 3, text: 'New user registration', time: '2 hours ago' },
  ];

  return (
    <header className="bg-white shadow-sm relative">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <form onSubmit={handleSearch} className="relative w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Settings className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={() => console.log('Profile clicked')}
            />
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="absolute right-20 top-16 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
            <button
              onClick={() => setShowNotifications(false)}
              className="hover:bg-gray-100 rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <p className="text-sm text-gray-800">{notification.text}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute right-12 top-16 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">
              Profile Settings
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">
              App Settings
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">
              Help & Support
            </button>
            <hr className="my-1" />
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;