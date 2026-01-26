import React from "react";

import ProjectLayout from "../shared/ProjectLayout";
import GlassCard from "../shared/GlassCard";
import SectionTitle from "../shared/SectionTitle";
import Chip from "../shared/Chip";
import StatPill from "../shared/StatPill";
import ProjectBanner from "../shared/ProjectBanner";

import logo from "./media/logo.png";
import banner from "./media/banner.png";

export default function BananaPage() {
  return (
    <ProjectLayout backTo="/">
      <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="BananaBot"
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover bg-black/20 shadow-[0_0_24px_rgba(243,196,142,0.12)]"
              draggable="false"
            />
            <div className="leading-tight">
              <div className="text-sm text-[#CBB892]">Telegram AI Bot</div>
              <div className="text-xs text-[#CBB892]/70">
                Генерация изображений и видео + мощная админ-панель
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-[#F3C48E]">
            BananaBot
          </h1>

          <p className="mt-4 text-[#E9D9BE] text-lg leading-relaxed">
            Telegram-бот с генерацией медиа на разных моделях и детальной
            административной панелью: управление пользователями, задачами,
            лимитами/пакетами и мониторингом результатов.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Telegram Bot</Chip>
            <Chip>FastAPI</Chip>
            <Chip>Redis</Chip>
            <Chip>PostgreSQL</Chip>
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
              href="#details"
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
              сделать удобную генерацию изображений/видео в Telegram с понятным
              биллингом и контролем качества.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Формат:</span> бот
              + API + админ-панель для управления контентом и финансами.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Особенность:</span>{" "}
              детальная админка: задачи, ассеты, расходы по моделям, статусы и
              поддержка пользователей.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatPill label="Интерфейс" value="Telegram Bot" />
            <StatPill label="Админка" value="SQLAdmin" />
            <StatPill label="Очереди/кэш" value="Redis" />
            <StatPill label="Backend" value="FastAPI" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/25 p-4">
            <div className="text-sm text-[#F3C48E] font-semibold">
              Модели генерации
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Chip>NanoBanana</Chip>
              <Chip>NanoBanana PRO</Chip>
              <Chip>Veo3</Chip>
              <Chip>Sora2</Chip>
            </div>
          </div>
        </GlassCard>
      </div>

      <div id="details" className="mt-14 md:mt-16">
        <SectionTitle title="Что внутри" subtitle="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Поток генерации</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Выбор модели → ввод промпта/референса → создание задачи → выдача
              результата пользователю.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Статусы и ретраи</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Отслеживание статуса задач, обработка ошибок, безопасные повторы и
              стабильная доставка результата.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">
              Хранилище ассетов
            </div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Ссылки/файлы результатов, метаданные по генерациям и привязка к
              пользователю и модели.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Админ-панель</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Детальный контроль: пользователи, кошельки/лимиты, задачи, ассеты,
              стоимость по моделям и логи.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Аналитика</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Сводка по генерациям: успешность, задержки, нагрузка, расходы и
              популярность моделей.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Продакшн-деплой</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Docker-контейнеры, Nginx reverse-proxy, кеширование и стабильная
              эксплуатация.
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <SectionTitle title="Визуально" subtitle={null} />
        <ProjectBanner
          src={banner}
          alt="BananaBot — баннер проекта"
          title={null}
          subtitle={null}
        />
      </div>

      <div className="mt-14 md:mt-16">
        <SectionTitle title="Технические детали" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Архитектура
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• FastAPI: задачи, пользователи, биллинг, вебхуки.</div>
              <div>• Redis: очереди/кэш, ускорение горячих операций.</div>
              <div>• PostgreSQL: задачи, ассеты, кошельки, логи, тарифы.</div>
              <div>• SQLAdmin: управление и аналитика в админке.</div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Админ-панель
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• Списки задач по статусам, фильтры и поиск.</div>
              <div>• Просмотр ассетов и метаданных генерации.</div>
              <div>• Контроль лимитов/пакетов и расходов по моделям.</div>
              <div>• Логи и инструменты поддержки пользователей.</div>
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <GlassCard className="p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-xl font-semibold text-[#F3C48E]">
                Нужен AI-бот под бизнес?
              </div>
              <div className="mt-2 text-[#CBB892]">
                Telegram-бот, генерация медиа, админка, биллинг и
                продакшн-деплой — соберу под задачу.
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
