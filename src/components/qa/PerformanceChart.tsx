"use client";

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', loadTime: 1.2 },
  { time: '04:00', loadTime: 1.1 },
  { time: '08:00', loadTime: 1.5 },
  { time: '12:00', loadTime: 2.1 },
  { time: '16:00', loadTime: 1.8 },
  { time: '20:00', loadTime: 1.3 },
  { time: '24:00', loadTime: 1.2 },
];

export function PerformanceChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="performance" className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden shadow-md mb-8 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Performance: Load Time</h2>
        <p className="text-sm text-gray-400">Average page load time across core routes (seconds)</p>
      </div>

      <div className="h-72 w-full">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
              <XAxis 
                dataKey="time" 
                stroke="#6B7280" 
                tick={{ fill: '#6B7280', fontSize: 12 }} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6B7280" 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}s`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B0F1A', border: '1px solid #1F2937', borderRadius: '8px' }}
                itemStyle={{ color: '#60A5FA' }}
              />
              <Line 
                type="monotone" 
                dataKey="loadTime" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#0B0F1A' }}
                activeDot={{ r: 6, fill: '#60A5FA' }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
}
