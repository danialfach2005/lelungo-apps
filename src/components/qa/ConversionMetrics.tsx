"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarCheck, TrendingDown } from 'lucide-react';

const metrics = [
  {
    name: 'View Deal CTR',
    value: '18%',
    target: '20%',
    progress: 90, // 18 / 20 * 100
    color: 'bg-blue-500',
    icon: MousePointerClick,
  },
  {
    name: 'Book Now Clicks',
    value: '8.4%',
    target: '10%',
    progress: 84, // 8.4 / 10 * 100
    color: 'bg-emerald-500',
    icon: CalendarCheck,
  },
  {
    name: 'Drop-off Rate',
    value: '32%',
    target: '< 30%',
    progress: 100 - ((32 - 30) * 5), // Rough visual representation
    color: 'bg-orange-500',
    icon: TrendingDown,
    isWarning: true,
  },
];

export function ConversionMetrics() {
  return (
    <div id="conversion" className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden shadow-md mb-8">
      <div className="p-6 border-b border-[#1F2937]">
        <h2 className="text-xl font-bold text-white mb-2">Conversion Metrics</h2>
        <p className="text-sm text-gray-400">Key user flow conversion tracking from tests</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={metric.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-[#1F2937]`}>
                  <Icon className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">{metric.name}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                    <span className="text-xs text-gray-500">Target: {metric.target}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-2 w-full bg-[#1F2937] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full rounded-full ${metric.color}`}
                />
              </div>
              
              {metric.isWarning && (
                <p className="text-xs text-orange-400 mt-2">Needs attention: slightly above target.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
