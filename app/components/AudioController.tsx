"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In a real app, you would play an actual audio file
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0; // Start at 0 for fade in

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Fade out
      let vol = audioRef.current.volume;
      const fadeInterval = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          if (audioRef.current) audioRef.current.volume = vol;
        } else {
          clearInterval(fadeInterval);
          if (audioRef.current) {
            audioRef.current.volume = 0;
            audioRef.current.pause();
          }
          setIsPlaying(false);
        }
      }, 50);
    } else {
      // Fade in
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      setIsPlaying(true);
      
      let vol = 0;
      const fadeInterval = setInterval(() => {
        if (vol < 0.45) { // Max volume 0.5
          vol += 0.05;
          if (audioRef.current) audioRef.current.volume = vol;
        } else {
          clearInterval(fadeInterval);
        }
      }, 50);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 mix-blend-difference">
      <motion.button 
        onClick={toggleAudio}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-colors group"
      >
        {isPlaying ? (
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
            <Volume2 className="w-5 h-5 text-yellow-300" />
          </motion.div>
        ) : (
          <VolumeX className="w-5 h-5 text-white/50 group-hover:text-white/80" />
        )}
      </motion.button>
    </div>
  );
}
