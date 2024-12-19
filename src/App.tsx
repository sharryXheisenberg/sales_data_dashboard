import React, { Suspense } from 'react';
import { SkeletonProvider } from './providers/SkeletonProvider';
import DashboardLayout from './components/Layout/DashboardLayout';
import DashboardGrid from './components/Dashboard/DashboardGrid';

function App() {
  return (
    <SkeletonProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardLayout>
          <div className="space-y-6">
            <DashboardGrid />
          </div>
        </DashboardLayout>
      </Suspense>
    </SkeletonProvider>
  );
}

export default App;