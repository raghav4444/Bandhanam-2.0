"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-50 shadow-[0_0_10px_rgba(234,179,8,0.7)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
