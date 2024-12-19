import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

interface SkeletonProviderProps {
  children: React.ReactNode;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({ children }) => {
  return (
    <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
      {children}
    </SkeletonTheme>
  );
};