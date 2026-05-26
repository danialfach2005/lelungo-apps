"use client";

import React from 'react';
import { Activity, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Total Tests',
    value: '1,248',
    trend: '+12% from last week',
    trendUp: true,
    icon: Activity,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Pass Rate (%)',
    value: '92.4%',
    trend: '+2.1% from last run',
    trendUp: true,
    icon: CheckCircle2,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    title: 'Failed Tests',
    value: '3',
    trend: '-5 since last deploy',
    trendUp: true,
    icon: XCircle,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    title: 'Last Deploy Status',
    value: 'Success',
    trend: '24 minutes ago',
    trendUp: true,
    icon: Clock,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function OverviewCards() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      id="overview"
    >
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            variants={item}
            className="group relative bg-[#111827] rounded-xl p-6 border border-[#1F2937] hover:border-gray-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">{card.title}</p>
                <h3 className="text-3xl font-bold text-white">{card.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${card.bg}`}>
                <Icon className={`w-6 h-6 ${card.color}`} />
              </div>
            </div>
            
            <div className="relative">
              <span className={`text-sm ${card.trendUp ? 'text-green-400' : 'text-red-400'}`}>
                {card.trend}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
