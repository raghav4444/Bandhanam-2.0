"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function RSVPSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("2026-04-07T00:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-transparent text-slate-900 relative flex flex-col items-center overflow-hidden">
      {/* Background flare - replaced expensive blur with optimized radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0) 70%)' }}
      ></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col gap-6">

        {/* COUNTDOWN TIMER */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <LiquidGlassCard
              draggable={false}
              expandable={false}
              blurIntensity="md"
              shadowIntensity="sm"
              glowIntensity="sm"
              borderRadius="30px"
              className="w-full bg-yellow-600/20 border border-yellow-500/30 shadow-[0_10px_40px_rgba(202,138,4,0.15)] ring-1 ring-inset ring-yellow-400/20 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent pointer-events-none"></div>
              <div className="p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <Timer className="w-6 h-6 text-yellow-600 animate-pulse" />
                    <h3 className="text-yellow-600 font-bold tracking-[0.2em] text-sm uppercase">Join Us</h3>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-light text-slate-900 mb-2">Wedding on 7 April</h2>
                  <p className="text-slate-600 tracking-widest text-sm uppercase">The Countdown Begins</p>
                </div>

                <div className="flex gap-4 md:gap-6 justify-center flex-1">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours.toString().padStart(2, '0') },
                    { label: "Mins", value: timeLeft.minutes.toString().padStart(2, '0') },
                    { label: "Secs", value: timeLeft.seconds.toString().padStart(2, '0') },
                  ].map((unit, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="bg-white/40 backdrop-blur-md rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-inner border border-white/50 mb-2">
                        <span className="text-2xl md:text-3xl font-light text-slate-900">{unit.value}</span>
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-600 font-medium tracking-widest uppercase">{unit.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>
        )}


      </div>
    </section>
  );
}
