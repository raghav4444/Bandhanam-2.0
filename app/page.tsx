import EventsTimeline from "./components/EventsTimeline";
import InteractiveGallery from "./components/InteractiveGallery";
import RSVPSection from "./components/RSVPSection";
import LocationSection from "./components/LocationSection";
import AudioController from "./components/AudioController";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import Footer from "./components/Footer";
import InvitationCanvas from "./components/InvitationCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-900 selection:bg-yellow-500/30">
      {/* <ScrollProgressIndicator /> */}
      {/* <AudioController /> */}


      {/* Hyper-optimized background: No mix-blend modes or backdrop-blurs which destroy framerates. Opacity only! */}
      <div
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          willChange: "transform"
        }}
      >
        {/* Simple flat opacity wash gives the exact same visual feel with zero composite/scroll cost */}
        <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none"></div>
      </div>

      <div className="relative z-10 pb-24 min-h-screen">
        {/* Subtle transition gradient */}
        <div className="h-32 bg-gradient-to-b from-transparent to-white/70 -mt-32 pointer-events-none relative z-20"></div>

        <div className="relative z-10">
          <InvitationCanvas />
          <RSVPSection />
          <EventsTimeline />
          <InteractiveGallery />
          <LocationSection />

          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
