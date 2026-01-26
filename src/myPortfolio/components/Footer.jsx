import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../media/logo.svg";
import github from "../media/icons/github.svg";
import kwork from "../media/icons/kwork.svg";
import telegram from "../media/icons/telegram.svg";

export default function Footer() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 8,
      duration: Math.random() * 14 + 8,
      fromLeft: Math.random() < 0.5,
    }));
    setParticles(generated);
  }, []);

  return (
    <footer
      className="relative overflow-hidden bg-[#0A0A0F]
    text-[#F3C48E] py-10 md:py-14 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-[#F3C48E]/50 blur-[1.5px]"
            style={{
              top: `${p.top}%`,
              left: p.fromLeft ? "-5%" : "auto",
              right: p.fromLeft ? "auto" : "-5%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 4}px rgba(243,196,142,0.8)`,
            }}
            animate={{
              x: p.fromLeft ? ["0vw", "110vw"] : ["0vw", "-110vw"],
              opacity: [p.opacity, 0.1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: p.delay,
              duration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center px-6">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="Логотип Дмитрия Колбенева"
            className="invert w-32 md:w-40 drop-shadow-[0_0_20px_rgba(243,196,142,0.5)]"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 md:gap-12 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://github.com/kolbenev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center
                       w-14 h-14 md:w-16 md:h-16 rounded-xl
                       bg-[#F3C48E]/15 border border-[#F3C48E]/30
                       hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                       transition-all duration-300"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              draggable="false"
            />
          </a>

          <a
            href="https://kwork.ru/user/kolbenev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center
                       w-14 h-14 md:w-16 md:h-16 rounded-xl
                       bg-[#F3C48E]/15 border border-[#F3C48E]/30
                       hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                       transition-all duration-300"
          >
            <img
              src={kwork}
              alt="Kwork"
              className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              draggable="false"
            />
          </a>

          <a
            href="https://t.me/kolbenevds"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center
                       w-14 h-14 md:w-16 md:h-16 rounded-xl
                       bg-[#F3C48E]/15 border border-[#F3C48E]/30
                       hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                       transition-all duration-300"
          >
            <img
              src={telegram}
              alt="Telegram"
              className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              draggable="false"
            />
          </a>
        </motion.div>

        {/* Копирайт */}
        <motion.p
          className="text-[#D4B07A]/80 text-sm md:text-base tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          © {new Date().getFullYear()} Дмитрий Колбенев.
        </motion.p>
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F3C48E]/40 to-transparent"></div>
    </footer>
  );
}
