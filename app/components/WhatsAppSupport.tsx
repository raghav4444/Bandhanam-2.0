"use client";

import { MessageCircle } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function WhatsAppSupport() {
  const whatsappNumber = "9956641800";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 md:py-20 w-full overflow-hidden">
      <LiquidGlassCard
        draggable={false}
        blurIntensity="sm"
        shadowIntensity="lg"
        glowIntensity="md"
        borderRadius="32px"
        className="w-full max-w-4xl p-0.5 bg-gradient-to-br from-emerald-500/20 via-white/40 to-emerald-500/10 border border-white/60 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        <div className="bg-white/40 backdrop-blur-xl p-8 md:p-12 w-full rounded-[31px] flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left relative overflow-hidden group">

          {/* Decorative background glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full group-hover:bg-emerald-400/30 transition-colors duration-700"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full group-hover:bg-emerald-400/30 transition-colors duration-700"></div>

          <div className="relative shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
              <div className="absolute inset-0 animate-ping bg-emerald-500/5 rounded-3xl"></div>
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 drop-shadow-sm" />
            </div>
          </div>

          <div className="flex-1 space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif text-emerald-950 font-bold tracking-tight drop-shadow-sm">
              Questions <span className="text-emerald-600/60">&</span> Support?
            </h3>
            <p className="text-base md:text-lg font-medium text-slate-700 leading-relaxed max-w-md">
              We are here to help! Reach out to us directly on WhatsApp for any inquiries about the wedding or venue.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold transition-all shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] active:scale-95 flex items-center justify-center gap-3 relative z-10 group-hover:translate-x-1 duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <MessageCircle className="w-6 h-6 relative z-10" />
            <span className="text-lg relative z-10">Chat with us</span>
          </a>
        </div>
      </LiquidGlassCard>

      <div className="mt-8 text-center animate-pulse">
        <p className="text-sm font-sans text-emerald-800/60 uppercase tracking-widest font-semibold">
          Real-time Response Guaranteed
        </p>
      </div>
    </div>
  );
}
