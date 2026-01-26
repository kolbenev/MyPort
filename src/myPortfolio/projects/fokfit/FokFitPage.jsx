import React from "react";

import ProjectLayout from "../shared/ProjectLayout";
import GlassCard from "../shared/GlassCard";
import SectionTitle from "../shared/SectionTitle";
import Chip from "../shared/Chip";
import StatPill from "../shared/StatPill";
import ProjectBanner from "../shared/ProjectBanner";

import logo from "./media/logo.png";
import banner from "./media/banner.png";

export default function FokFitPage() {
  return (
    <ProjectLayout backTo="/">
      <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="FokFit"
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover bg-black/20 shadow-[0_0_24px_rgba(243,196,142,0.12)]"
              draggable="false"
            />
            <div className="leading-tight">
              <div className="text-sm text-[#CBB892]">Telegram Mini App</div>
              <div className="text-xs text-[#CBB892]/70">
                Практики без лишней боли
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-[#F3C48E]">
            FokFit
          </h1>

          <p className="mt-4 text-[#E9D9BE] text-lg leading-relaxed">
            Telegram Mini App + backend-платформа для упражнений и практик:
            каталог, видео-инструкции, отметка результата и аналитика. Упор на
            UX: минимум шагов, всё быстро и понятно.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>React</Chip>
            <Chip>FastAPI</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Redis</Chip>
            <Chip>SQLAdmin</Chip>
            <Chip>Docker</Chip>
            <Chip>Nginx</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://t.me/kolbenevds"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-[#F3C48E]
                         bg-[#F3C48E]/10 hover:bg-[#F3C48E]/15 transition-all
                         outline-none focus:ring-2 focus:ring-[#F3C48E]/40"
            >
              Запросить демо →
            </a>

            <a
              href="/#/fokfit?scroll=details"
              className="px-6 py-3 rounded-full text-[#D4A35F]
                         bg-black/20 hover:bg-[#F3C48E]/10 transition-all
                         outline-none focus:ring-2 focus:ring-[#F3C48E]/40"
            >
              Подробнее ↓
            </a>
          </div>
        </div>

        <GlassCard className="p-6 md:p-7">
          <div className="text-lg font-semibold text-[#F3C48E]">
            Коротко о проекте
          </div>

          <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
            <div>
              <span className="text-[#E9D9BE] font-semibold">Цель:</span>{" "}
              упростить регулярные практики и фиксировать результат.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Формат:</span>{" "}
              мини-приложение в Telegram + панель администрирования.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Польза:</span>{" "}
              «выбрал → сделал → отметил → увидел динамику».
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatPill label="Интерфейс" value="Telegram Mini App" />
            <StatPill label="Админка" value="SQLAdmin" />
            <StatPill label="Хранение" value="PostgreSQL" />
            <StatPill label="Кэш" value="Redis" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/25 p-4">
            <div className="text-sm text-[#F3C48E] font-semibold">Моя роль</div>
            <div className="mt-1 text-sm text-[#CBB892] leading-relaxed">
              Полный цикл: backend + структура данных + UI mini-app + админка и
              аналитика.
            </div>
          </div>
        </GlassCard>
      </div>

      <div id="details" className="mt-14 md:mt-16">
        <SectionTitle
          title="Что внутри"
          subtitle="Функциональные блоки, которые видит пользователь и администратор."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">
              Каталог упражнений
            </div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Упражнения в одном месте: быстрый выбор, удобный список.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Видео-инструкции</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Видео + описание: пользователь понимает что делать без лишнего
              текста.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">
              Фиксация результата
            </div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              После выполнения — быстрая отметка, данные уходят в аналитику.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Графики</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Простая динамика: виден прогресс и эффект от практик.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Админка контента</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Управление упражнениями, превью, ссылками на видео и текстами.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Коммуникации</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Инструменты рассылок и сценариев вовлечения.
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <SectionTitle title="" subtitle={null} />
        <ProjectBanner
          src={banner}
          alt="FokFit — баннер проекта"
          title={null}
          subtitle={null}
        />
      </div>

      <div className="mt-14 md:mt-16">
        <SectionTitle
          title="Технические детали"
          subtitle="Что было важно в реализации с точки зрения инженерии."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Архитектура
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>
                • API на FastAPI: авторизация, профиль, упражнения, статистика.
              </div>
              <div>
                • PostgreSQL: пользователи, упражнения, попытки, метрики.
              </div>
              <div>• Redis: кэширование и быстрые операции.</div>
              <div>• SQLAdmin: админка контента и инструментов.</div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              UX-акценты
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• Минимум кликов до упражнения.</div>
              <div>• Быстрая отметка результата.</div>
              <div>• Понятная динамика без перегруза.</div>
              <div>• Адаптив под телефон как основное устройство.</div>
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <GlassCard className="p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-xl font-semibold text-[#F3C48E]">
                Нужен похожий продукт?
              </div>
              <div className="mt-2 text-[#CBB892]">
                Telegram-бот / mini-app / backend / админка / аналитика — сделаю
                под задачу.
              </div>
            </div>

            <a
              href="https://t.me/kolbenevds"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-[#F3C48E]
                         bg-[#F3C48E]/10 hover:bg-[#F3C48E]/15 transition-all
                         outline-none focus:ring-2 focus:ring-[#F3C48E]/40 text-center"
            >
              Написать в Telegram →
            </a>
          </div>
        </GlassCard>
      </div>
    </ProjectLayout>
  );
}
