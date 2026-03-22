import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Lightbulb } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 text-slate-700 relative z-10">
          
          {/* Logo & Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest text-slate-900 leading-none">HEX SOFTWARES</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-1 line-clamp-1">Innovate | Connect | Inspire</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              Innovating Digital Solutions for a Smarter Future. Trusted IT partner offering cutting-edge solutions in software, web, mobile apps, cloud, and AI.
            </p>
            
            <div className="space-y-4 pt-2 text-sm font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span>Ramadevi, Kanpur, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>+91 8052432951</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>info@hexsoftwares.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 pt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 text-blue-600 hover:text-white transition-all shadow-sm"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 text-blue-600 hover:text-white transition-all shadow-sm"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 text-blue-600 hover:text-white transition-all shadow-sm"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 text-blue-600 hover:text-white transition-all shadow-sm"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-6 text-lg">Services</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Mobile & Web Applications</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Cloud & SaaS Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">AI & Machine Learning</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Digital Marketing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Certification</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-6 text-lg">Industries</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">FinTech</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Retail</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Startups</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-300/50 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-600 relative z-10">
          <p>© 2026 Hexsoftwares. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </LiquidGlassCard>
    </footer>
  );
}
