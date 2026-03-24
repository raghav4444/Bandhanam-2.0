"use client";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function WeddingNames({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center px-4 w-full ${className}`}>
      <LiquidGlassCard
        draggable={false}
        blurIntensity="xl"
        shadowIntensity="lg"
        glowIntensity="md"
        borderRadius="24px"
        className="w-full max-w-sm p-6 text-center bg-white/10 border border-white/40 shadow-2xl backdrop-blur-2xl"
      >
        <div className="space-y-4">

          <div className="space-y-1">
            <h1 className="text-3xl font-serif text-emerald-950 font-bold drop-shadow-sm leading-tight">
              Jeevan Singh
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-red-900"></div>
              <span className="text-2xl font-serif italic">Weds</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-red-900"></div>
            </div>
            <h1 className="text-3xl font-serif text-emerald-950 font-bold drop-shadow-sm leading-tight">
              Aradhya Singh
            </h1>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
