import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <LiquidGlassCard
        draggable={false}
        expandable={false}
        blurIntensity="xl"
        shadowIntensity="xl"
        glowIntensity="md"
        borderRadius="40px"
        className="rounded-t-[3rem] p-8 md:p-12 lg:p-16 border-b-0 border-r-0 border-l-0 bg-white/20 border-white/40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-white/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-slate-700 relative z-10">

          {/* Logo & About Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-slate-900 leading-none group-hover:text-emerald-600 transition-colors">HextSoftwares</span>
                <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-[0.2em] mt-1">Innovate | Connect | Inspire</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm font-medium text-slate-600">
              Specializing in premium, interactive digital wedding invitations and custom software solutions that wow guests and simplify planning.
            </p>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-6 flex flex-col justify-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Get In Touch</h4>
            <div className="space-y-4 text-sm font-semibold">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700">Ramadevi, Kanpur, India</span>
              </div>
              <a href="tel:+918052432951" className="flex items-center space-x-3 group w-fit hover:text-emerald-600 transition-colors">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span>+91 8052432951</span>
              </a>
              <a href="mailto:info@hexsoftwares.com" className="flex items-center space-x-3 group w-fit hover:text-emerald-600 transition-colors">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@hexsoftwares.com</span>
              </a>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="space-y-6 flex flex-col lg:items-end justify-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Social Media</h4>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:-translate-y-1"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/hexsoftwares/" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/hexsoftwares.in/" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col md:row justify-between items-center text-xs font-bold text-slate-400 relative z-10 gap-4">
          <p className="uppercase tracking-widest">© 2026 Developed by HextSoftwares. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </LiquidGlassCard>
    </footer>
  );
}
