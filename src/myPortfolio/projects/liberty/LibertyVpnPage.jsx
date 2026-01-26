import React from "react";

import ProjectLayout from "../shared/ProjectLayout";
import GlassCard from "../shared/GlassCard";
import SectionTitle from "../shared/SectionTitle";
import Chip from "../shared/Chip";
import StatPill from "../shared/StatPill";
import ProjectBanner from "../shared/ProjectBanner";

import logo from "./media/logo.png";
import banner from "./media/banner.png";

export default function LibertyVpnPage() {
  return (
    <ProjectLayout backTo="/">
      <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Liberty VPN"
              className="w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full object-cover bg-black/20 shadow-[0_0_24px_rgba(243,196,142,0.12)]"
              draggable="false"
            />
            <div className="leading-tight">
              <div className="text-sm text-[#CBB892]">VPN Platform</div>
              <div className="text-xs text-[#CBB892]/70">
                Масштабируемая инфраструктура и управление подписками
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-[#F3C48E]">
            Liberty VPN
          </h1>

          <p className="mt-4 text-[#E9D9BE] text-lg leading-relaxed">
            Сервис управления VPN-инфраструктурой и пользователями: массовое
            подключение/продление, централизованный контроль статусов и
            мониторинг. Проект начинался на базе панели{" "}
            <span className="text-[#F3C48E] font-semibold">3xui</span>, затем
            был выполнен переход на{" "}
            <span className="text-[#F3C48E] font-semibold">Remnawave</span> для
            более гибкого управления нодами и масштабирования.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>FastAPI</Chip>
            <Chip>Redis</Chip>
            <Chip>Docker</Chip>
            <Chip>Nginx</Chip>
            <Chip>Remnawave</Chip>
            <Chip>3xui</Chip>
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
              Обсудить похожий проект →
            </a>
          </div>
        </div>

        <GlassCard className="p-6 md:p-7">
          <div className="text-lg font-semibold text-[#F3C48E]">
            Коротко о проекте
          </div>

          <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
            <div>
              <span className="text-[#E9D9BE] font-semibold">Задача:</span>{" "}
              держать инфраструктуру в порядке при большом количестве серверов и
              пользователей.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Эволюция:</span>{" "}
              старт на 3xui → переход на Remnawave (централизация и масштаб).
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Фокус:</span>{" "}
              стабильность, скорость операций, управляемость и автоматизация.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatPill label="Серверов" value="50+ (в управлении)" />
            <StatPill label="Пользователей" value="100 000+" />
            <StatPill label="API" value="FastAPI" />
            <StatPill label="Кэш/очереди" value="Redis" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/25 p-4">
            <div className="text-sm text-[#F3C48E] font-semibold">Моя роль</div>
            <div className="mt-1 text-sm text-[#CBB892] leading-relaxed">
              Архитектура и реализация: API, автоматизация управления
              пользователями/нодами, интеграции, деплой и эксплуатация.
            </div>
          </div>
        </GlassCard>
      </div>
      <div id="details" className="mt-14 md:mt-16">
        <SectionTitle title="Что внутри" subtitle="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Центральное API</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Единая точка управления: пользователи, подписки, статусы, ноды,
              операции продления/блокировки.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Мульти-ноды</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Управление большим числом серверов: синхронизация конфигураций и
              единые правила обслуживания.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">
              Автоматизация подписок
            </div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Продления/истечения, статусы, ограничение доступа и массовые
              операции — без ручной рутины.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Кэш и ускорение</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Redis для быстрых операций, снижения нагрузки и стабилизации API
              при пиковых запросах.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Безопасность</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Контроль доступа, ограничения, аккуратная обработка вебхуков и
              критичных операций.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Продакшн-деплой</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Docker-контейнеры, Nginx как reverse-proxy, аккуратная
              эксплуатация и обновления.
            </div>
          </GlassCard>
        </div>
      </div>
      <div className="mt-14 md:mt-16">
        <SectionTitle title="" subtitle={null} />
        <ProjectBanner
          src={banner}
          alt="Liberty VPN — баннер проекта"
          title={null}
          subtitle={null}
        />
      </div>
      <div className="mt-14 md:mt-16">
        <SectionTitle title="Технические детали" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Инфраструктура
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• Docker: повторяемые деплои и обновления.</div>
              <div>• Nginx: маршрутизация, TLS, проксирование сервисов.</div>
              <div>• Redis: быстрые операции и разгрузка API.</div>
              <div>• FastAPI: контрольный слой, автоматика и интеграции.</div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Масштабирование
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• 50+ серверов: единая модель управления нодами.</div>
              <div>
                • 100 000+ пользователей: операции должны быть быстрыми и
                безопасными.
              </div>
              <div>
                • Переход 3xui → Remnawave: гибкость и удобство поддержки.
              </div>
              <div>
                • Логирование критичных операций для поддержки и аудита.
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      <div className="mt-14 md:mt-16">
        <GlassCard className="p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-xl font-semibold text-[#F3C48E]">
                Нужен масштабируемый сервис?
              </div>
              <div className="mt-2 text-[#CBB892]">
                API, деплой, управление инфраструктурой, автоматизация и
                эксплуатация — сделаю под задачу.
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
