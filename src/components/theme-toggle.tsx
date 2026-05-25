'use client';

import { useTheme } from './theme-provider';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the icon after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        aria-label="Toggle theme"
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-card transition-colors text-foreground/50">
        <span className="w-5 h-5" />
      </button>
    );
  }

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-card transition-colors text-foreground/70 hover:text-foreground border border-transparent hover:border-border"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
