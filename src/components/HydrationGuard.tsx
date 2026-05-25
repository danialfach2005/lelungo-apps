'use client';

import { useState, useEffect, ReactNode } from 'react';

interface HydrationGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Renders the fallback (or null) during SSR and the children after hydration.
 * Use this wrapper for any components that depend on non-deterministic data
 * like time, random numbers, or heavy client-side-only APIs.
 */
export function HydrationGuard({ children, fallback = null }: HydrationGuardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
