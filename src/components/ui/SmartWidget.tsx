"use client";

import React, { useState, useEffect } from "react";
import { useDraggable } from "@/lib/widget/useDraggable";

// --- PRESENTATION (VIEW) ---

export function SmartWidget() {
  const { ref, position, isDragging, isIdle, onPointerDown } = useDraggable(
    "ai-suggestion", 
    { x: 0, y: 0 }, 
    true 
  );
  
  // Prevent hydration mismatch by mounting client-side
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        touchAction: 'none'
      }}
      className={`
        fixed top-0 left-0 z-[100]
        bg-card/60 backdrop-blur-xl border border-border shadow-glow-sm rounded-2xl p-4
        flex items-center gap-3
        select-none
        transition-[opacity,box-shadow,transform] duration-300
        ${isDragging ? 'cursor-grabbing scale-105 shadow-2xl !transition-none' : 'cursor-grab'}
        ${!isDragging && isIdle ? 'opacity-40 hover:opacity-100' : 'opacity-100'}
        hover:shadow-lg hover:scale-[1.02] active:scale-95
      `}
    >
      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 text-lg shadow-inner pointer-events-none">
        🔥
      </div>
      <div className="text-left pointer-events-none">
        <p className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-0.5">
          AI Suggestion
        </p>
        <p className="text-sm font-semibold text-foreground">
          Flights to Tokyo dropped 32% today
        </p>
      </div>
    </div>
  );
}
