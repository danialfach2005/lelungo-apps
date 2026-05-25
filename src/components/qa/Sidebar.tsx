import React from 'react';
import {
  LayoutDashboard,
  CheckCircle2,
  Bug,
  Activity,
  TrendingUp,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '#overview' },
  { name: 'Test Results', icon: CheckCircle2, href: '#test-results' },
  { name: 'Bugs', icon: Bug, href: '#bugs' },
  { name: 'Performance', icon: Activity, href: '#performance' },
  { name: 'Conversion', icon: TrendingUp, href: '#conversion' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#0B0F1A] border-r border-[#1F2937] h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Lelungo QA
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#111827] transition-all duration-200 group"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1F2937]">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white w-full transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
