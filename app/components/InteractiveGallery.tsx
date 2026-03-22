"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/liquid-glass";

export default function InteractiveGallery() {
  return (
    <section className="bg-transparent py-24 text-slate-900 border-y border-white/20">
      <div className="text-center pointer-events-none mb-20 w-full hidden md:block relative z-10">
        <h2 className="text-5xl lg:text-7xl font-light tracking-widest mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,1)]">MOMENTS</h2>
        <div className="w-24 h-[1px] bg-yellow-600/50 mx-auto"></div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .ig-external {
          overflow: hidden;
          height: 90vh;
          position: relative;
        }

        .ig-horizontal-scroll-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90vh;
          transform: rotate(-90deg) translate3d(0,-90vh,0);
          transform-origin: right top;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0;
          height: 100vw;
          perspective: 1px;
          transform-style: preserve-3d;
          padding-bottom: 20rem;
        }

        /* hide scrollbar */
        .ig-horizontal-scroll-wrapper::-webkit-scrollbar {
          width: 1px;
          height: 1px;
          display: none;
        }
        .ig-horizontal-scroll-wrapper::-webkit-scrollbar-button {
          width: 1px;
          height: 1px;
        }

        .ig-img-wrapper {
          transform: rotate(90deg);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40vh;
          transform-origin: 50% 50%;
          transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
          transition: 1s;
        }

        .ig-img-wrapper:hover {
          min-height: 65vh;
        }

        .ig-slower { transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh); }
        .ig-slower1 { transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh); }
        .ig-slower2 { transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh); }
        .ig-slower-down { transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh); }
        .ig-faster { transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh); }
        .ig-faster1 { transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh); }
        .ig-fastest { transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh); }
        .ig-vertical { transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%); }
        .ig-last { transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh); }

        .ig-scroll-info, .ig-header {
          position: absolute;
          left: 2rem;
          z-index: 50;
        }

        .ig-header {
          bottom: 2rem;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 1.5rem 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .ig-scroll-info {
          top: 2rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 10px 20px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
        }

        .ig-img-wrapper a {
          overflow: hidden;
          display: block;
          padding: 1.5vh;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .ig-img-wrapper a:hover {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border-color: rgba(255,255,255,1);
        }

        .ig-img-wrapper img {
          max-width: 45vh;
          max-height: 50vh;
          transition: .5s;
          vertical-align: top;
          border-radius: 8px;
          object-fit: cover;
        }

        .ig-img-wrapper a:hover img {
          transform: scale(1.02);
        }

        /* Map styling fixes */
        .ig-icon svg {
          width: 32px;
          fill: currentColor;
          margin-right: 12px;
        }

        /* Mobile specific fixes to use native horizontal scrolling */
        @media (max-width: 768px) {
          .ig-external {
            height: 75vh !important;
            min-height: 500px;
          }
          .ig-horizontal-scroll-wrapper {
            transform: none !important;
            width: 100% !important;
            height: 100% !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            perspective: none !important;
            padding: 0 1rem !important;
            display: flex !important;
            align-items: center !important;
            -webkit-overflow-scrolling: touch;
            margin: 0 !important;
          }
          .ig-horizontal-scroll-wrapper::-webkit-scrollbar {
             display: none;
          }
          .ig-img-wrapper {
            transform: none !important;
            width: 75vw !important;
            min-height: auto !important;
            flex-shrink: 0 !important;
            margin-right: 1.5rem !important;
          }
          .ig-img-wrapper:hover {
            min-height: auto !important;
          }
          .ig-img-wrapper a {
            width: 100%;
          }
          .ig-img-wrapper img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            max-height: 45vh !important;
          }
          .ig-scroll-info {
            top: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
            justify-content: center;
          }
          .ig-header {
            bottom: 1rem !important;
            left: 1rem !important;
            right: 1rem !important;
            padding: 1rem !important;
          }
        }
      `}} />

      <div className="px-4 md:px-8 w-full max-w-[1400px] mx-auto">
        <LiquidGlassCard
          draggable={false}
          expandable={false}
          blurIntensity="md"
          shadowIntensity="sm"
          glowIntensity="sm"
          borderRadius="40px"
          className="ig-external w-full bg-white/10 border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-white/30 transition-transform duration-700 hover:bg-white/20"
        >
          {/* Subtle glowing orb inside the liquid glass */}
          <div
            className="absolute inset-0 opacity-70 pointer-events-none -z-10"
            style={{ background: 'radial-gradient(circle at center, rgba(234,179,8,0.1) 0%, rgba(255,255,255,0) 70%)' }}
          />

          <div className="ig-horizontal-scroll-wrapper scrollbar-hide relative z-10">
            {items.map((item, idx) => (
              <div key={idx} className={`ig-img-wrapper ${item.speedClass}`} suppressHydrationWarning>
                <a href="https://drive.google.com/drive/u/0/my-drive" target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
                  <img src={item.src} alt="Gallery item" loading="lazy" />
                </a>
              </div>
            ))}
          </div>

          <div className="ig-scroll-info text-slate-800 relative z-20 transition-all duration-300 hover:shadow-lg">
            <span className="ig-icon text-yellow-600 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4 c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1 C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5 c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3 c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z" />
              </svg>
            </span>
            <span className="font-semibold tracking-widest text-xs uppercase pt-1">Try scrolling inside</span>
          </div>
          <header className="ig-header relative z-20 transition-all duration-300 hover:shadow-xl hover:bg-white/80">
            <p className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase mb-2">Moments</p>
            <h1 className="text-2xl lg:text-3xl font-light text-slate-900 mb-1">Interactive Gallery</h1>
            <p className="text-slate-600 text-sm">Click any photo to browse the full album on Google Drive.</p>
          </header>
        </LiquidGlassCard>
      </div>
    </section>
  );
}

const items = [
  { src: "https://imgs.search.brave.com/K5H8j6vsvR1GRcaHkvvIeplG-pA5lqWMrGfPgC_rX-c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFycmlvdHRpbmRp/YXdlZGRpbmdzLmNv/bS9yZXNvdXJjZWZp/bGVzL2hvbWVpbWFn/ZXMvc2hhYWRpLWJ5/LW1hcnJpb3R0LWhv/bWU1LXVwZGF0ZWQu/anBn", speedClass: "ig-slower" },
  { src: "https://imgs.search.brave.com/8wSMJTf4Ub18TNQ_IXjtJ2r8wn9UBi1Qpj6tWlsW5Uk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC1pbmRpYW4t/Y291cGxlcy1oYW5k/cy13ZWRkaW5nLWNs/b3NlLXVwLWluZGlh/bi1jb3VwbGVzLWhh/bmRzLXdlZGRpbmct/c2hhYWRpLTE4MTQy/Njk5MC5qcGc", speedClass: "ig-faster" },
  { src: "https://imgs.search.brave.com/knV30QbzElIalh_VTTB_XPRSwQ8zN5pg4gGQYRZETU0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MyL2M2/L2M3L2MyYzZjN2Iy/Zjg5Yjg5YTU0ZGY2/MTQ2NDNhNTNkZTc0/LmpwZw", speedClass: "ig-slower ig-vertical" },
  { src: "https://imgs.search.brave.com/AVZHt4XcQbSXOyR2NjNVsKsSO0V1r8mlcB1tbSbt_Io/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc2hhYWRp/Y2FwdHVyZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvSW5kaWFuLVdl/ZGRpbmctUGhvdG9n/cmFwaHktQnJpc2Jh/bmUtNDYuanBnP3Jl/c2l6ZT03MDAsNDY2/JnNzbD0x", speedClass: "ig-slower ig-slower-down" },
  { src: "https://imgs.search.brave.com/TjMwsHTDkMDsQ1sWev3txl2u3OzlY4yQLB7tgn3WJ3E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI2LzQ3LzAz/LzM2MF9GXzUyNjQ3/MDMxNF9yZk4yUkZr/OUdORkZjcmsxY21N/VjdmNmdyaEw3U2dr/TC5qcGc", speedClass: "" },
  { src: "https://imgs.search.brave.com/MlYW2sAJbfaGrleCpiIC3S_aKeBqx9uVPa8OEKVPJT8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzI0/MjgzNDAvcGV4ZWxz/LXBob3RvLTMyNDI4/MzQwL2ZyZWUtcGhv/dG8tb2YtaW5kaWFu/LXdlZGRpbmctaGFs/ZGktY2VyZW1vbnkt/d2l0aC1mYW1pbHku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw", speedClass: "ig-slower" },
  { src: "https://imgs.search.brave.com/7h_8AK52ssyFfnywljyH_9j_8GELCYIm-lrqwTlDZ5s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfbG9z/c3kscmV0X2ltZy9o/dHRwczovL3d3dy5w/dGF1ZmlxcGhvdG9n/cmFwaHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAy/L3B0YXVmaXEtaW5k/aWFuLXdlZGRpbmct/Z2VuZXJhdGlvbnMt/cml2aWVyYS1tYXlh/LWNhbmN1bi1tZXhp/Y28tZGVzdGluYXRp/b24tbWVoZW5kaTEu/anBn", speedClass: "ig-faster1" },
  { src: "https://imgs.search.brave.com/RpXUVbEsOmMs1RD4LUBLdIhzWBaNcgCQHBw2F4qzwts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfbG9z/c3kscmV0X2ltZy9o/dHRwczovL3d3dy5w/dGF1ZmlxcGhvdG9n/cmFwaHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L3B0YXVmaXEtaW5k/aWFuLXdlZGRpbmct/dGhlLXJpdHotY2Fy/bHRvbi1hYmFtYS1z/cGFpbi1zYW5nZWV0/LmpwZw", speedClass: "ig-slower ig-slower2" },
  { src: "https://imgs.search.brave.com/II36fsG3rRHw8_JzeXiE5HcQhJaVbJArsDSRw2wdNeE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nZXRl/dGhuaWMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA1/LzE1NzM3Ni1ITF8w/MjI4LW9yaWcuanBl/Zw", speedClass: "" },
  { src: "https://imgs.search.brave.com/WYy-J7PDZ8JdCrLeCjXGdMvJMfSkTwX17gdz7Mj4GDw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzE1LzM3LzM1/LzM2MF9GXzE4MTUz/NzM1MTFfR2pQMVFG/UXppRm5jekF6ZnNn/QWZXV0ZiN3diVHdX/ZlEuanBn", speedClass: "ig-slower" },
  { src: "https://imgs.search.brave.com/eH0l0ehZpYl7o8GCmAno_Anui5SKamAJ0Ra3xqCD7zs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfbG9z/c3kscmV0X2ltZy9o/dHRwczovL3d3dy5w/dGF1ZmlxcGhvdG9n/cmFwaHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L3B0YXVmaXEtaW5k/aWFuLXdlZGRpbmct/amFpcHVyLWluZGlh/LXNhbmdlZXQxLmpw/Zw", speedClass: "ig-slower ig-last" }
];
