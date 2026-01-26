import React from "react";
import { motion } from "framer-motion";

export default function ProjectBanner({
  src,
  alt = "",
  title,
  subtitle,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className="rounded-[28px] overflow-hidden bg-[#F3C48E]/5 shadow-[0_0_46px_rgba(243,196,142,0.10)]"
    >
      <div className="relative w-full aspect-[3/2] bg-black/20 overflow-hidden">
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-30"
          draggable="false"
        />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-contain"
          draggable="false"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
      </div>
      {(title || subtitle) && (
        <div className="p-6 md:p-7">
          {title && (
            <div className="text-[#E9D9BE] font-semibold text-xl md:text-2xl">
              {title}
            </div>
          )}
          {subtitle && (
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
