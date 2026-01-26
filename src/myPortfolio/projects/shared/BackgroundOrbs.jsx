import React, { useMemo } from "react";

export default function BackgroundOrbs() {
  const orbs = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        size: 140 + Math.random() * 170,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        dur: 14 + Math.random() * 10,
        opacity: 0.06 + Math.random() * 0.12,
      })),
    [],
  );

  return (
    <>
      <style>{`
        @keyframes orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(14px, -12px) scale(1.03); }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {orbs.map((o) => (
          <span
            key={o.id}
            className="absolute rounded-full blur-3xl"
            style={{
              width: o.size,
              height: o.size,
              left: `${o.left}%`,
              top: `${o.top}%`,
              opacity: o.opacity,
              background:
                "radial-gradient(circle, rgba(243,196,142,0.22) 0%, rgba(243,196,142,0) 60%)",
              animation: `orb ${o.dur}s ease-in-out ${o.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
