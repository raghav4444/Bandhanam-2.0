"use client";

import { useEffect, useRef, useState } from "react";


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
    <div ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-transparent flex flex-col items-center justify-center p-2 md:p-6 lg:p-8 gap-4 md:gap-6">
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

      {/* Video Container */}
      <div
        className={`w-full max-w-5xl flex-1 relative group ring-4 ring-emerald-400/30 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl bg-black/50 backdrop-blur-xl transition-all duration-1000 min-h-0 ${isVideoFinished ? "opacity-90" : "opacity-100"
          }`}
      >
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            playsInline
            muted={isMuted} // Controlled by our manual button
            // Controls are removed completely
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
            {/* Animated Arrow pointing down */}
            <div className="animate-bounce text-white/90 drop-shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Glassy Unmute Button */}
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

        {/* Rewatch Button & Arrow */}
        {isVideoFinished && (
          <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 flex items-center gap-3 z-50 transition-opacity duration-1000">
            {/* Glassy Rewatch Button */}
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
              className="flex items-center gap-2 px-5 py-2.5 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-all ring-1 ring-white/40 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium tracking-wide">Rewatch</span>
            </button>

            {/* Animated Arrow pointing left towards the button */}
            <div className="animate-pulse text-white/90 drop-shadow-md">
              <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}

        {/* Subtle overlay to enhance the glassy look */}
        {!isVideoFinished && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-white/10 pointer-events-none mix-blend-overlay"></div>
        )}
      </div>

      {/* Liquid Glass Text Block (Hidden on mobile, visible on desktop) */}
      <div className="hidden lg:flex flex-col items-center text-center space-y-4 w-full max-w-4xl px-10 py-6 rounded-[2.5rem] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/70 animate-fade-in-up shrink-0 relative overflow-hidden">

        {/* Liquid Shine Overlay */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

        <h1 className="text-4xl lg:text-5xl font-serif text-emerald-950 font-bold drop-shadow-md tracking-wide relative z-10">
          Jeevan Singh <span className="text-red-900/70 font-light mx-2">&</span> Aradhya Singh
        </h1>

        <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-red-900/70 to-transparent my-2 relative z-10"></div>

        <p className="text-xl font-medium text-slate-800 tracking-widest uppercase opacity-90 min-h-[30px] relative z-10">
          {typedMessage}
          <span className="inline-block w-[3px] h-[1em] bg-red-900/70 ml-2 animate-pulse align-text-bottom"></span>
        </p>
      </div>

    </div>
  );
}
