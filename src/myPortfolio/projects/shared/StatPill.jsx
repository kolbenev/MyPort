import React from "react";

export default function StatPill({ label, value, className = "" }) {
  return (
    <div className={["rounded-2xl bg-black/25 px-4 py-3", className].join(" ")}>
      <div className="text-xs text-[#CBB892]">{label}</div>
      <div className="mt-1 text-[#E9D9BE] font-semibold">{value}</div>
    </div>
  );
}
