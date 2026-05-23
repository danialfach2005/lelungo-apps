import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'rare' | 'hot' | 'good';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border transition-colors';
  
  const variants = {
    default: 'bg-primary/10 text-primary border-primary/20',
    outline: 'bg-transparent text-foreground border-border',
    rare: 'bg-red-500/10 text-red-500 dark:text-red-400 border-red-500/20 shadow-sm',
    hot: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    good: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)} {...props} />
  );
}
