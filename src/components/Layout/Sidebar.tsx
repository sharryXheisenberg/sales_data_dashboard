import React, { useState } from 'react';
import { Home, BarChart2, Users, Settings, HelpCircle, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [expanded, setExpanded] = useState<string | null>(null);

  const menuItems = [
    {
      icon: Home,
      label: 'Dashboard',
      subItems: ['Overview', 'Analytics', 'Reports'],
    },
    {
      icon: BarChart2,
      label: 'Analytics',
      subItems: ['Statistics', 'Forecasts', 'Goals'],
    },
    {
      icon: Users,
      label: 'Customers',
      subItems: ['List', 'Segments', 'Reports'],
    },
    {
      icon: Settings,
      label: 'Settings',
      subItems: ['General', 'Security', 'Notifications'],
    },
    {
      icon: HelpCircle,
      label: 'Help',
      subItems: ['Documentation', 'Support', 'FAQ'],
    },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    setExpanded(expanded === label ? null : label);
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => handleItemClick(item.label)}
              className={`w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                activeItem === item.label ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </div>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  expanded === item.label ? 'transform rotate-90' : ''
                }`}
              />
            </button>
            
            {expanded === item.label && (
              <div className="bg-gray-50">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem}
                    onClick={() => console.log(`${item.label} > ${subItem} clicked`)}
                    className="w-full text-left pl-14 pr-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;