import React from "react";

export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-3xl bg-[#F3C48E]/5 backdrop-blur-sm",
        "shadow-[0_0_40px_rgba(243,196,142,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
