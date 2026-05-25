/**
 * SSR Safe Guard Utilities
 * 
 * Utilities to check the client state and render fallbacks to prevent hydration mismatch.
 */
import { useState, useEffect } from 'react';

/**
 * Checks if the code is executing in the browser (client-side).
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Custom hook to manage SSR safe rendering.
 * Returns true if the component has mounted on the client.
 */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

/**
 * Renders a value safely. Returns the fallback during SSR, and the dynamic value on the client.
 * NOTE: This can still cause a blink if used directly in JSX. Prefer `<HydrationGuard>` for components.
 */
export function safeRender<T>(value: T, fallback: T): T {
  return isClient() ? value : fallback;
}
