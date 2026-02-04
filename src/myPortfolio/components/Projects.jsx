import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import project1 from "../media/projects/project1.png";
import project2 from "../media/projects/project2.png";
import project3 from "../media/projects/project3.png";
import project4 from "../media/projects/project4.png";

const PROJECTS = [
  {
    id: "fokfit",
    title: "FokFit",
    short:
      "Telegram Mini App: практики, упражнения, фиксация результата, графики и админка.",
    tech: ["React", "FastAPI", "PostgreSQL", "Redis"],
    thumb: project1,
    to: "/fokfit",
  },
  {
    id: "threecats",
    title: "ThreeCats",
    short:
      "Магазин ключей в Telegram: каталог, заказ, оплата и автоматическая выдача.",
    tech: ["React", "FastAPI", "PostgreSQL", "Redis"],
    thumb: project2,
    to: "/threecats",
  },
  {
    id: "liberty",
    title: "LibertyVPN",
    short:
      "Сервис управления VPN-инфраструктурой и пользователями: массовое подключение/продление, централизованный контроль статусов и мониторинг.",
    tech: ["FastAPI", "Docker", "PostgreSQL", "Redis", "3Xui", "Remnawave"],
    thumb: project3,
    to: "/libertyvpn",
  },
  {
    id: "bananabot",
    title: "NanoBananaBot",
    short:
      "AI-бот в Telegram для генерации изображений и видео с детальной административной панелью.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AI"],
    thumb: project4,
    to: "/banana",
  },
];

export default function Projects({ items = PROJECTS }) {
  const projects = useMemo(() => items.slice(0, 8), [items]);

  return (
    <section
      id="projects"
      className="relative bg-[#0A0A0F] py-16 md:py-24 overflow-hidden"
    >
      <BackgroundOrbs />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="mb-10 md:mb-14 text-2xl md:text-4xl font-semibold text-[#F3C48E]">
          Проекты
        </h2>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.to}
              className={[
                "group block rounded-[28px] overflow-hidden",
                "bg-[#F3C48E]/5 backdrop-blur-sm",
                "shadow-[0_0_46px_rgba(243,196,142,0.08)]",
                "transition-all duration-300",
                "hover:bg-[#F3C48E]/7 hover:shadow-[0_0_60px_rgba(243,196,142,0.12)]",
                "outline-none focus:ring-2 focus:ring-[#F3C48E]/35",
              ].join(" ")}
              style={{
                transform: "translateZ(0)",
                animation: `fadeUp 0.55s ease-out ${index * 90}ms both`,
              }}
            >
              <div className="relative w-full aspect-[3/2] bg-black/20 overflow-hidden">
                <img
                  src={project.thumb}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-30"
                  draggable="false"
                />
                <img
                  src={project.thumb}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />

                <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rotate-12 bg-gradient-to-r from-transparent via-[#F3C48E]/10 to-transparent" />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#F3C48E] leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[#CBB892] leading-relaxed">
                      {project.short}
                    </p>
                  </div>

                  <span className="text-[#D4A35F] text-lg opacity-80 translate-x-0 group-hover:translate-x-[3px] transition-transform">
                    →
                  </span>
                </div>

                {!!project.tech?.length && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-black/20 text-[#E9D9BE]/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <a
            href="https://t.me/devkolbenev"
            target="_blank"
            rel="noreferrer"
            className={[
              "group block rounded-[28px] px-6 py-6 md:px-8 md:py-7",
              "bg-[#F3C48E]/5 backdrop-blur-sm",
              "border border-[#F3C48E]/20",
              "shadow-[0_0_46px_rgba(243,196,142,0.08)]",
              "transition-all duration-300",
              "hover:bg-[#F3C48E]/7 hover:border-[#F3C48E]/35 hover:shadow-[0_0_60px_rgba(243,196,142,0.12)]",
              "outline-none focus:ring-2 focus:ring-[#F3C48E]/35",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[#F3C48E] text-lg md:text-xl font-semibold">
                  Хотите посмотреть больше работ?
                </div>
                <div className="mt-1 text-[#CBB892]">
                  Напишите мне в Telegram
                </div>
              </div>

              <span className="text-[#D4A35F] text-2xl opacity-80 translate-x-0 group-hover:translate-x-[3px] transition-transform">
                →
              </span>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(12px, -10px) scale(1.03); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function BackgroundOrbs() {
  const orbs = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        size: 160 + Math.random() * 180,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        dur: 14 + Math.random() * 10,
        opacity: 0.06 + Math.random() * 0.1,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
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
  );
}
