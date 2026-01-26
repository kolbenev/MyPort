import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import bgPhone from "../media/bgPhone.png";
import bgPc from "../media/bgPc.png";

function useIsDesktop(breakpointPx = 900) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= breakpointPx : true,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const handler = (e) => setIsDesktop(e.matches);
    handler(mq);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [breakpointPx]);

  return isDesktop;
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop(900);

  const stars = useMemo(() => {
    const count = isDesktop ? 70 : 30;
    return Array.from({ length: count }).map(() => {
      const size = Math.random() * 2 + 1;
      return {
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random()}`,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size,
        opacity: Math.random() * 0.8 + 0.2,
        strength: 10 + size,
      };
    });
  }, [isDesktop]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useTransform(x, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(y, [-0.5, 0.5], ["-10px", "10px"]);

  const rafRef = useRef(0);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    if (rafRef.current) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = 0;
      const { innerWidth, innerHeight } = window;

      const offsetX = (e.clientX - innerWidth / 2) / innerWidth;
      const offsetY = (e.clientY - innerHeight / 2) / innerHeight;

      x.set(offsetX);
      y.set(offsetY);
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="bg-black relative flex flex-col justify-center items-center min-h-screen
      overflow-hidden text-[#F3C48E] px-6 text-center md:text-left
      md:items-start md:px-24"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform md:hidden"
        style={{
          backgroundImage: `url(${bgPhone})`,
          x: prefersReducedMotion ? 0 : translateX,
          y: prefersReducedMotion ? 0 : translateY,
          scale: 1.05,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform hidden md:block"
        style={{
          backgroundImage: `url(${bgPc})`,
          x: prefersReducedMotion ? 0 : translateX,
          y: prefersReducedMotion ? 0 : translateY,
          scale: 1.05,
        }}
      />

      <div
        className="absolute inset-0 md:bg-gradient-to-r
        bg-gradient-to-b from-black/90 via-black/60 to-transparent"
      />

      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => {
            const starX = useTransform(x, (v) => `${v * star.strength}px`);
            const starY = useTransform(y, (v) => `${v * star.strength}px`);

            return (
              <motion.span
                key={star.id}
                className="absolute rounded-full bg-white will-change-transform"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
                  x: starX,
                  y: starY,
                }}
              />
            );
          })}
        </div>
      )}

      <motion.div
        className="relative z-10 max-w-md md:max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="font-sans font-semibold text-4xl leading-snug mb-5 md:text-6xl md:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Привет,
          <br />
          меня зовут Дима,
          <br />и я программист.
        </motion.h1>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent pointer-events-none"
      />
    </section>
  );
}
