"use client";

import { motion } from "framer-motion";
import { Navigation, MapPin, Mail, Phone } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function LocationSection() {
  return (
    <section className="py-24 bg-transparent text-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <LiquidGlassCard
          draggable={false}
          expandable={false}
          blurIntensity="md"
          shadowIntensity="sm"
          glowIntensity="sm"
          borderRadius="40px"
          className="bg-white/10 border border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-1 ring-inset ring-white/30 relative overflow-hidden p-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 h-full w-full">
            {/* INFO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-transparent p-10 md:p-16 flex flex-col justify-center relative z-10"
            >
              <h2 className="text-3xl lg:text-4xl font-light tracking-widest mb-2">THE VENUE</h2>
              <div className="w-12 h-[1px] bg-yellow-500/50 mb-8"></div>

              <h3 className="text-xl text-yellow-600 tracking-wider mb-4">From the Bride's Side</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Experience the perfect blend of royal heritage and contemporary luxury. The estate offers panoramic views tailored perfectly for an unforgettable celebration.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">Lona ,Konch<br />Jalaun , Uttar Pradesh 285205</p>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-600 mr-4 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">+91 9876543210</p>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-600 mr-4 flex-shrink-0" />x
                  <p className="text-slate-700 text-sm">example@gmail.com</p>
                </div>
              </div>

              <a
                suppressHydrationWarning
                href="https://maps.google.com/?q=Jalaun , Uttar Pradesh 285205"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 self-start px-8 py-3 bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all uppercase tracking-widest text-xs font-medium flex items-center group"
              >
                Get Directions
                <Navigation className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* MAP (Faded Style) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-[400px] lg:h-auto relative bg-white/5 border-l lg:border-t-0 border-t border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.05)] pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay pointer-events-none z-10"></div>
              {/* Real Google Maps embed could go here. For now an image or styled iframe representing dark mode map */}
              <iframe
                src="https://www.google.com/maps?q=Jalaun,+Uttar+Pradesh+285205&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
