import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="text-2xl md:text-3xl font-semibold text-[#F3C48E]">
        {title}
      </div>
      {subtitle ? (
        <div className="mt-2 text-[#CBB892] leading-relaxed">{subtitle}</div>
      ) : null}
    </div>
  );
}
