'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Something went wrong.</h2>
      <p className="text-foreground/60 max-w-md mb-8">
        We encountered an unexpected error while loading this page. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary" className="shadow-glow-sm">
          Try again
        </Button>
        <Button onClick={() => window.location.href = '/'} variant="secondary">
          Return Home
        </Button>
      </div>
    </div>
  );
}
