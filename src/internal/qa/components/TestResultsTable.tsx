import React from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const testResults = [
  { id: 1, name: 'User Authentication Flow', status: 'passed', duration: '1.2s', lastRun: '2 mins ago' },
  { id: 2, name: 'Checkout Process', status: 'passed', duration: '3.4s', lastRun: '2 mins ago' },
  { id: 3, name: 'Search Deals API', status: 'failed', duration: '0.8s', lastRun: '5 mins ago' },
  { id: 4, name: 'Homepage Hydration', status: 'passed', duration: '2.1s', lastRun: '12 mins ago' },
  { id: 5, name: 'Payment Gateway Webhook', status: 'running', duration: '...', lastRun: 'Just now' },
];

export function TestResultsTable() {
  return (
    <div id="test-results" className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden shadow-md mb-8">
      <div className="p-6 border-b border-[#1F2937] flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Recent Test Results</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0B0F1A]/50 text-gray-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Test Name</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Duration</th>
              <th className="p-4 font-medium">Last Run</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1F2937]">
            {testResults.map((test) => (
              <tr key={test.id} className="hover:bg-[#1F2937]/50 transition-colors group">
                <td className="p-4">
                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{test.name}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {test.status === 'passed' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                      </span>
                    )}
                    {test.status === 'failed' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                        <XCircle className="w-3.5 h-3.5" /> Failed
                      </span>
                    )}
                    {test.status === 'running' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium border border-yellow-500/20">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Running
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-gray-400 text-sm">{test.duration}</td>
                <td className="p-4 text-gray-400 text-sm">{test.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
