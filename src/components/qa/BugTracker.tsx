import React from 'react';
import { AlertCircle, ChevronRight, Image as ImageIcon } from 'lucide-react';

const bugs = [
  {
    id: 'BUG-142',
    name: 'Search Deals API Timeout',
    error: 'Error: Request to /api/deals timed out after 5000ms. Expected status 200, received 504.',
    thumbnail: true,
  },
  {
    id: 'BUG-143',
    name: 'Mobile Nav Overlay Z-Index',
    error: 'Visual mismatch: Mobile menu background does not cover the main hero section completely on Safari.',
    thumbnail: true,
  },
  {
    id: 'BUG-144',
    name: 'Hydration Error on Product Page',
    error: 'Warning: Text content did not match. Server: "12 reviews" Client: "0 reviews".',
    thumbnail: false,
  },
];

export function BugTracker() {
  return (
    <div id="bugs" className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden shadow-md mb-8">
      <div className="p-6 border-b border-[#1F2937] flex justify-between items-center bg-red-500/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Active Bugs & Failed Tests</h2>
        </div>
        <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-sm font-semibold">
          3 Issues
        </span>
      </div>

      <div className="divide-y divide-[#1F2937]">
        {bugs.map((bug) => (
          <div key={bug.id} className="p-6 hover:bg-[#1F2937]/30 transition-colors group">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-gray-500">{bug.id}</span>
                  <h3 className="text-lg font-semibold text-gray-200">{bug.name}</h3>
                </div>
                <p className="text-sm text-gray-400 font-mono bg-[#0B0F1A] p-3 rounded-lg border border-[#1F2937] break-all">
                  {bug.error}
                </p>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                {bug.thumbnail ? (
                  <div className="flex items-center justify-center w-20 h-14 bg-[#0B0F1A] border border-[#1F2937] rounded-md cursor-pointer hover:border-gray-500 transition-colors relative group/img">
                    <ImageIcon className="w-5 h-5 text-gray-600 group-hover/img:text-gray-400" />
                  </div>
                ) : (
                  <div className="w-20 h-14" /> /* spacer */
                )}
                
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1F2937] hover:bg-[#374151] text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
