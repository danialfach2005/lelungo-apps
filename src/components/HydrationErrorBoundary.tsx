'use client';

import { useEffect } from 'react';

/**
 * Listens for React hydration mismatch errors globally.
 * In a production environment, it intercepts errors containing specific keywords
 * and can dispatch them to a logging/monitoring system.
 */
export function HydrationErrorBoundary() {
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      const msg = event.message || '';
      if (
        msg.includes('hydration') ||
        msg.includes('did not match') ||
        msg.includes('Minified React error #418') ||
        msg.includes('Minified React error #423')
      ) {
        // Here you would send it to a tracking API (e.g., Sentry, Datadog)
        console.warn('[HydrationErrorBoundary] Hydration mismatch detected:', event.error);
        
        // Optional: you can attempt safe recovery or send metrics.
      }
    };

    // React's hydration errors often go to console.error, intercepting them:
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (
        msg.includes('hydration') ||
        msg.includes('did not match') ||
        msg.includes('Minified React error #418') ||
        msg.includes('Minified React error #423')
      ) {
        console.warn('[HydrationErrorBoundary] Intercepted via console.error:', ...args);
      }
      originalConsoleError.apply(console, args);
    };

    window.addEventListener('error', handleGlobalError);
    return () => {
      window.removeEventListener('error', handleGlobalError);
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}
