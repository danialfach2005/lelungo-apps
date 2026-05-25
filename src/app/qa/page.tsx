import React from 'react';
import { Sidebar } from '@/components/qa/Sidebar';
import { TopNavbar } from '@/components/qa/TopNavbar';
import { OverviewCards } from '@/components/qa/OverviewCards';
import { TestResultsTable } from '@/components/qa/TestResultsTable';
import { BugTracker } from '@/components/qa/BugTracker';
import { PerformanceChart } from '@/components/qa/PerformanceChart';
import { ConversionMetrics } from '@/components/qa/ConversionMetrics';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QA Dashboard | Lelungo',
  description: 'Premium QA and Test Results Dashboard',
};

export default function QADashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-blue-500/30">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNavbar />
        
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth" style={{ scrollbarGutter: 'stable' }}>
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-gray-400">Track test results, performance, and conversion metrics across Lelungo.</p>
            </div>

            <OverviewCards />
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <PerformanceChart />
              <ConversionMetrics />
            </div>

            <TestResultsTable />
            
            <BugTracker />

          </div>
        </div>
      </main>
    </div>
  );
}
