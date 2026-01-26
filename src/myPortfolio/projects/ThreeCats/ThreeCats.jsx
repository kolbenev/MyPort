import React from "react";

import ProjectLayout from "../shared/ProjectLayout";
import GlassCard from "../shared/GlassCard";
import SectionTitle from "../shared/SectionTitle";
import Chip from "../shared/Chip";
import StatPill from "../shared/StatPill";
import ProjectBanner from "../shared/ProjectBanner";

import logo from "./media/logo.png";
import banner from "./media/banner.png";

export default function ThreeCats() {
  return (
    <ProjectLayout backTo="/">
      <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="ThreeCats"
              className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover bg-black/20 shadow-[0_0_24px_rgba(243,196,142,0.12)]"
              draggable="false"
            />
            <div className="leading-tight">
              <div className="text-sm text-[#CBB892]">Telegram Shop</div>
              <div className="text-xs text-[#CBB892]/70">
                Магазин ключей + Mini App
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-[#F3C48E]">
            ThreeCats
          </h1>

          <p className="mt-4 text-[#E9D9BE] text-lg leading-relaxed">
            Магазин цифровых ключей в Telegram с полноценным Mini App: каталог,
            карточка товара, оформление заказа, выдача ключа и поддержка.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Telegram Mini App</Chip>
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
              сделать покупку ключа максимально быстрой и бесшовной прямо в
              Telegram.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Формат:</span> бот
              + Mini App с каталогом и оформлением заказа.
            </div>
            <div>
              <span className="text-[#E9D9BE] font-semibold">Фишка:</span>{" "}
              автоматическая выдача ключа после оплаты + админка для управления
              товарами.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatPill label="Интерфейс" value="Mini App + Bot" />
            <StatPill label="Админка" value="SQLAdmin" />
            <StatPill label="Хранение" value="PostgreSQL" />
            <StatPill label="Кэш" value="Redis" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/25 p-4">
            <div className="text-sm text-[#F3C48E] font-semibold">Моя роль</div>
            <div className="mt-1 text-sm text-[#CBB892] leading-relaxed">
              Полный цикл разработки: UI mini-app, backend, хранение и
              бизнес-логика, админка, интеграции и деплой.
            </div>
          </div>
        </GlassCard>
      </div>

      <div id="details" className="mt-14 md:mt-16">
        <SectionTitle title="Что внутри" subtitle="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Каталог</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Список товаров с быстрым поиском/навигацией и понятными
              карточками.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Карточка товара</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Описание, цена, состав, условия — всё компактно и читабельно.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">
              Оформление заказа
            </div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Минимум шагов до покупки: подтверждение и переход к оплате.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Оплата</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Интеграция платежей и безопасная обработка статуса заказа.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Выдача ключа</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Автоматическая выдача ключа после успешной оплаты + логирование.
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-[#F3C48E] font-semibold">Админка</div>
            <div className="mt-2 text-[#CBB892] leading-relaxed">
              Управление товарами, ценами, наличием ключей и статистикой продаж.
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <SectionTitle title="Визуально" subtitle={null} />
        <ProjectBanner
          src={banner}
          alt="ThreeCats — баннер проекта"
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
              <div>• FastAPI: товары, заказы, платежи, выдача ключей.</div>
              <div>
                • PostgreSQL: товары, остатки ключей, заказы, статусы, логи.
              </div>
              <div>
                • Redis: кэш каталога, временные состояния, ускорение API.
              </div>
              <div>• SQLAdmin: контент и управление продажами.</div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <div className="text-lg font-semibold text-[#F3C48E]">
              Надёжность
            </div>
            <div className="mt-3 text-[#CBB892] leading-relaxed space-y-2">
              <div>• Идемпотентность: повторные вебхуки не ломают выдачу.</div>
              <div>• Логи выдачи ключей и заказов для поддержки.</div>
              <div>• Контроль остатков и защита от “продали то, чего нет”.</div>
              <div>• Быстрый UX: минимум действий до покупки.</div>
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <GlassCard className="p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-xl font-semibold text-[#F3C48E]">
                Нужен магазин в Telegram?
              </div>
              <div className="mt-2 text-[#CBB892]">
                Каталог, оплаты, выдача цифрового товара, админка и деплой —
                соберу под задачу.
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
