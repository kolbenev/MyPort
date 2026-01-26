import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../media/avatar.jpg";
import github from "../media/icons/github.svg";
import kwork from "../media/icons/kwork.svg";
import telegram from "../media/icons/telegram.svg";

export default function About() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      size: Math.random() * 10 + 3,
      opacity: Math.random() * 0.6,
      delay: Math.random() * 2,
      duration: Math.random() * 12 + 10,
      fromLeft: Math.random() < 0.5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center items-center
    min-h-screen bg-[#0A0A0F] overflow-hidden text-center px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-[#F3C48E]/60 blur-[2px]"
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
              opacity: [p.opacity, 0.05],
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
      <div className="relative z-10 flex flex-col items-center max-w-2xl text-[#F3C48E]">
        <div className="relative mb-8">
          <motion.img
            src={avatar}
            alt="Дмитрий Колбенев"
            className="w-40 h-40 rounded-full object-cover border-4
            border-[#D4A35F] shadow-[0_0_30px_rgba(212,163,95,0.4)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 rounded-full bg-[#D4A35F]/20 blur-2xl"></div>
        </div>
        <motion.h2
          className="font-sans font-semibold text-4xl md:text-5xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Обо мне
        </motion.h2>
        <motion.p
          className="text-[#D4B07A] text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Я программист из Москвы, пишу код, чтобы создавать понятные и полезные
          вещи для бизнеса. Люблю, когда всё работает чётко: от архитектуры
          проекта до мелочей в интерфейсе.
        </motion.p>
        <motion.div
          className="relative w-full max-w-xl mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div
            className="relative z-10 rounded-3xl border border-[#F3C48E]/30
                          bg-[#F3C48E]/10 backdrop-blur-sm
                          shadow-[0_0_40px_rgba(243,196,142,0.15)]
                          px-8 py-5 md:px-10 md:py-6"
          >
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <a
                href="https://github.com/kolbenev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center justify-center
                           w-16 h-16 md:w-20 md:h-20 rounded-xl
                           bg-[#F3C48E]/15 border border-[#F3C48E]/30
                           hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                           transition-all duration-300 outline-none
                           focus:ring-2 focus:ring-[#F3C48E]/60"
              >
                <img
                  src={github}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform
                  duration-300 group-hover:scale-110"
                  draggable="false"
                />
              </a>
              <a
                href="https://kwork.ru/user/kolbenev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kwork"
                className="group inline-flex items-center justify-center
                           w-16 h-16 md:w-20 md:h-20 rounded-xl
                           bg-[#F3C48E]/15 border border-[#F3C48E]/30
                           hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                           transition-all duration-300 outline-none focus:ring-2 focus:ring-[#F3C48E]/60"
              >
                <img
                  src={kwork}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                  draggable="false"
                />
              </a>
              <a
                href="https://t.me/kolbenevds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="group inline-flex items-center justify-center
                           w-16 h-16 md:w-20 md:h-20 rounded-xl
                           bg-[#F3C48E]/15 border border-[#F3C48E]/30
                           hover:bg-[#F3C48E]/25 hover:border-[#F3C48E]/60
                           transition-all duration-300 outline-none focus:ring-2 focus:ring-[#F3C48E]/60"
              >
                <img
                  src={telegram}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
