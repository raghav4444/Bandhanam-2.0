"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Wine, Music } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass";

type EventDetails = {
  id: string;
  title: string;
  time: string;
  location: string;
  icon: React.ReactNode;
  dressCode?: string;
  description: string;
  themeColor: string;
  accentColor: string;
};

const events: EventDetails[] = [
  {
    id: "sangeet",
    title: "Sangeet",
    time: "April 5, 2026 - 4:00 PM",
    location: "The Courtyard",
    icon: <Music className="w-6 h-6 text-[#313E17]" />,
    dressCode: "Smart Casual / Festive",
    description: "Join us for an evening of music, dance, and mingling as we kick off the celebrations.",
    themeColor: "bg-[#313E17]/15",
    accentColor: "text-[#313E17]",
  },
  {
    id: "haldi",
    title: "Haldi",
    time: "April 6, 2026 - 10:00 AM",
    location: "Garden Pavilion",
    icon: <Clock className="w-6 h-6 text-[#B45309]" />,
    dressCode: "Yellow / Floral",
    description: "A vibrant morning filled with turmeric, laughter, and blessings.",
    themeColor: "bg-[#B45309]/15",
    accentColor: "text-[#B45309]",
  },
  {
    id: "mandap",
    title: "Mandap Khana",
    time: "April 7, 2026 - 12:00 PM",
    location: "Heritage Hall",
    icon: <Wine className="w-6 h-6 text-[#5E0006]" />,
    dressCode: "Traditional",
    description: "The ceremonial feast setup and traditional rites before the big day.",
    themeColor: "bg-[#5E0006]/15",
    accentColor: "text-[#5E0006]",
  },
  {
    id: "tika",
    title: "Tika / Wedding Ceremony",
    time: "April 8, 2026 - 5:00 PM",
    location: "Grand Hall",
    icon: <MapPin className="w-6 h-6 text-[#D53E0F]" />,
    dressCode: "Formal Traditional Attire",
    description: "Witness the exchange of vows and the sacred Tika ceremony in our beautiful historic Grand Hall.",
    themeColor: "bg-[#D53E0F]/15",
    accentColor: "text-[#D53E0F]",
  },
  {
    id: "bidaai",
    title: "Bidaai",
    time: "April 9, 2026 - 9:00 AM",
    location: "The Courtyard",
    icon: <Clock className="w-6 h-6 text-[#1A3263]" />,
    dressCode: "Traditional",
    description: "The emotional farewell as the bride departs for her new home.",
    themeColor: "bg-[#1A3263]/15",
    accentColor: "text-[#1A3263]",
  }
];

export default function EventsTimeline() {
  return (
    <section className="pt-32 pb-24 text-slate-900 relative bg-transparent">

      <div className="text-center pointer-events-none mb-20 w-full hidden md:block relative z-10">
        <h2 className="text-5xl lg:text-7xl font-light tracking-widest mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,1)]">EVENTS</h2>
        <div className="w-24 h-[1px] bg-yellow-600/50 mx-auto"></div>
      </div>

      <div className="md:hidden text-center mb-16 relative z-10">
        <h2 className="text-4xl font-light tracking-widest mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,1)]">EVENTS</h2>
        <div className="w-16 h-[1px] bg-yellow-600/50 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative w-full max-w-7xl mx-auto z-10 px-4 lg:px-8">
        {events.map((event, index) => {
          const isLast = index === events.length - 1;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out spring
                delay: (index % 2) * 0.15 // Stagger columns
              }}
              className={`w-full h-full flex ${isLast ? 'lg:col-span-2' : ''}`}
            >
              <EventGridCard
                event={event}
                isLast={isLast}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function EventGridCard({ event, isLast }: { event: EventDetails, isLast: boolean }) {
  return (
    <LiquidGlassCard
      draggable={false}
      expandable={false}
      blurIntensity="md" // Reduced from xl to save massive GPU rendering costs
      shadowIntensity="sm" // Reduced to lower composite costs
      glowIntensity="sm" // Reduced
      borderRadius="32px"
      className={`w-full h-full ${event.themeColor} overflow-hidden flex ${isLast ? 'flex-col lg:flex-row' : 'flex-col'} relative group ring-1 ring-white/40 ring-inset shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-1`}
    >
      {/* Soft glowing orb without massive CSS blurs that kill performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 ease-out -z-10 pointer-events-none" />

      {/* Shine Sweep Effect with hardware acceleration hint */}
      <div className="absolute top-0 -left-[100%] h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none will-change-transform" />

      <div className={`w-full ${isLast ? 'lg:w-1/3' : ''} bg-white/10 p-4 lg:p-10 flex flex-col justify-center items-center text-center border-b ${isLast ? 'lg:border-b-0 lg:border-r' : ''} border-white/20 relative z-10 transition-colors duration-500 group-hover:bg-white/20`}>
        {/* Removed backdrop-blur-md to prevent extremely expensive nested blur stacking inside LiquidGlassCard */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border border-white/80 flex items-center justify-center mb-6 lg:mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
          {event.icon}
        </div>
        <p className={`${event.accentColor} font-bold tracking-[0.2em] text-xs lg:text-sm uppercase mb-2 lg:mb-3`}>{event.time.split(" - ")[0]}</p>
        <p className="text-slate-600 text-sm lg:text-base font-medium tracking-wider">{event.time.split(" - ")[1]}</p>
      </div>

      <div className={`w-full ${isLast ? 'lg:w-2/3' : 'flex-1'} p-8 lg:p-12 flex flex-col justify-center relative z-10`}>
        <h3 className={`text-3xl lg:text-4xl font-light text-slate-900 mb-4 lg:mb-6`}>{event.title}</h3>

        <div className="flex items-center text-slate-600 mb-6 lg:mb-8 font-medium text-base lg:text-lg tracking-wide">
          <span className={`${event.accentColor} mr-3`}><MapPin className="w-5 h-5" /></span>
          {event.location}
        </div>

        <p className="text-slate-700 leading-relaxed text-base lg:text-lg mb-8 lg:mb-10 font-light">
          {event.description}
        </p>

        {event.dressCode && (
          <div className="mt-auto self-start">
            {/* Removed backdrop-blur-md here too */}
            <span className="inline-block px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/50 border border-white/60 text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase text-slate-800 shadow-sm transition-colors duration-500 group-hover:bg-white/80">
              Dress Code: <span className={`${event.accentColor} font-bold ml-1`}>{event.dressCode}</span>
            </span>
          </div>
        )}
      </div>

      {/* Replaced horribly expensive blur-[100px] with a highly optimized radial gradient */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none -translate-x-1/2 translate-y-1/2 z-[-1] opacity-40 group-hover:opacity-80 transition-opacity duration-700"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)' }}>
      </div>
    </LiquidGlassCard>
  );
}
