import React from "react";
import { Link } from "react-router-dom";
import BackgroundOrbs from "./BackgroundOrbs";

export default function ProjectLayout({ children }) {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <BackgroundOrbs />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-[#D4A35F] hover:opacity-90
                       outline-none focus:ring-2 focus:ring-[#F3C48E]/40 rounded-full px-2 py-1"
          >
            ← На главную
          </Link>
        </div>

        {children}
      </div>
    </section>
  );
}
