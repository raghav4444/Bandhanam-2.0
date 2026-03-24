"use client";

import { useEffect, useRef, useState } from "react";


import WeddingNames from "./WeddingNames";


export default function InvitationCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  // Typing effect state
  const [typedMessage, setTypedMessage] = useState("");
  const fullMessage = "We joyfully invite you to celebrate the beginning of our forever.";
  const [startTyping, setStartTyping] = useState(false);

  // Set video source based on screen size
  useEffect(() => {
    const updateSrc = () => {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
      if (window.innerWidth >= 768) {
        setVideoSrc(`${basePath}/largeScreenInvitation.mp4`);
      } else {
        setVideoSrc(`${basePath}/mobileScreenInvitation.mp4`);
      }
    };

    updateSrc(); // Initial check
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, []);

  // Intersection Observer for playing/pausing based on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              setStartTyping(true); // Start the typing effect when it comes into view
              if (!isVideoFinished) {
                videoRef.current.play().catch(() => { });
              }
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVideoFinished]);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setTypedMessage(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 75); // Speed of typing

    return () => clearInterval(intervalId);
  }, [startTyping]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
        }
      `}} />

      {/* Name Overlay (z-index 1) - Positioned higher to fit message below */}
      <div className="absolute bottom-32 left-0 right-0 z-20 px-4 pointer-events-none animate-fade-in-up">
        <WeddingNames className="pointer-events-auto" />
      </div>

      {/* Video Container (z-index 0) */}
      <div
        className={`w-full h-full relative group transition-all duration-1000 ${isVideoFinished ? "opacity-90" : "opacity-100"
          }`}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes pointRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }
          .animate-point-right {
            animation: pointRight 1s ease-in-out infinite;
          }
        `}} />

        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            playsInline
            muted={isMuted}
            onEnded={() => {
              setIsVideoFinished(true);
              if (containerRef.current && containerRef.current.nextElementSibling) {
                containerRef.current.nextElementSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          />
        )}

        {/* Unmute Button & Arrow */}
        {isMuted && !isVideoFinished && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-50">
            <div className="animate-bounce text-white/90 drop-shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 px-6 py-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all ring-1 ring-white/30 shadow-2xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              <span className="text-base font-semibold tracking-wide">Tap to Unmute</span>
            </button>
          </div>
        )}

        {/* Improved Rewatch UI - Center Focused */}
        {isVideoFinished && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50 transition-all duration-1000 animate-fade-in-up">
            <div className="flex items-center gap-4">
              {/* Pointing Arrow */}
              <div className="animate-point-right text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                <svg className="w-10 h-10 rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoFinished(false);
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.muted = false;
                    setIsMuted(false);
                    videoRef.current.play().catch(() => { });
                  }
                }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-emerald-600/80 hover:bg-emerald-500 backdrop-blur-xl rounded-2xl text-white transition-all ring-2 ring-emerald-400/50 shadow-[0_0_40px_rgba(5,150,105,0.4)] hover:shadow-[0_0_60px_rgba(5,150,105,0.6)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <svg className="w-6 h-6 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-xl font-bold tracking-wider">Play Again</span>
              </button>
            </div>
            <p className="text-white/60 text-sm font-medium tracking-[0.3em] uppercase animate-pulse">Experience the moment again</p>
          </div>
        )}

        {/* Subtle overlay to enhance the glassy look */}
        {!isVideoFinished && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-white/10 pointer-events-none mix-blend-overlay"></div>
        )}

        {/* Bottom Message (Overlay) - Visible on all screens */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center pointer-events-none px-4">
          <p className="text-sm md:text-lg lg:text-xl font-medium text-white/90 tracking-widest uppercase text-center max-w-2xl drop-shadow-lg drop-shadow-black/50">
            {typedMessage}
            <span className="inline-block w-[2px] h-[1em] bg-white/70 ml-2 animate-pulse align-text-bottom"></span>
          </p>
        </div>



      </div>
    </div>
  );
}
