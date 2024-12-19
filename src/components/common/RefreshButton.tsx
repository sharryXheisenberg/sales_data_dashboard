import React from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
  onRefresh: () => void;
  loading?: boolean;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh, loading = false }) => {
  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 ease-in-out"
    >
      <RefreshCw 
        className={`h-4 w-4 text-gray-600 ${loading ? 'animate-spin' : ''}`} 
      />
    </button>
  );
};

export default RefreshButton;