import React from 'react';
import { LucideIcon } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';

interface StatsCardProps {
  title: string;
  value?: string;
  icon: LucideIcon;
  color: string;
  loading?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  loading = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          {loading ? (
            <Skeleton className="h-8 w-24 mt-1" />
          ) : (
            <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          )}
        </div>
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;