export function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden">
      {/* Image skeleton */}
      <div className="h-52 skeleton" />

      {/* Body skeleton */}
      <div className="p-5 space-y-3">
        <div className="space-y-2">
          <div className="h-4 w-3/4 skeleton rounded-lg" />
          <div className="h-3 w-1/3 skeleton rounded-lg" />
        </div>
        <div className="h-3 w-1/2 skeleton rounded-lg" />
        <div className="space-y-1">
          <div className="h-3 w-1/4 skeleton rounded-lg" />
          <div className="h-8 w-1/2 skeleton rounded-lg" />
          <div className="h-3 w-1/4 skeleton rounded-lg" />
        </div>
        <div className="h-3 w-2/3 skeleton rounded-lg" />
        <div className="h-11 skeleton rounded-xl" />
      </div>
    </div>
  );
}
