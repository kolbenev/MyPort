import React from "react";

export default function Chip({ children, className = "" }) {
  return (
    <span
      className={[
        "px-3 py-1 text-sm rounded-full",
        "text-[#F3C48E]/90 bg-black/20",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
