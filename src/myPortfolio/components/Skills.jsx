import React, { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [tab, setTab] = useState("backend");
  const [lines, setLines] = useState([]);
  const typingTimerRef = useRef(null);
  const blinkTimerRef = useRef(null);

  const SNIPPETS = {
    backend: [
      "# Backend stack",
      'languages = ["Python", "SQL"]',
      'frameworks = ["FastAPI", "Django", "DRF", "Flask"]',
      'telegram_bot_frameworks = ["Aiogram", "PyTelegramBotAPI", "Pyrogram"]',
      'databases = ["PostgreSQL", "SQLite", "MySQL", "MariaDB"]',
      'orm_tools = ["SQLAlchemy", "Django ORM", "Alembic"]',
      'auth = ["JWT", "OAuth2", "Session Auth"]',
      'testing = ["Pytest", "unittest"]',
      "parsing_tools = [Playwright, BeautifulSoup, Requests]",
    ],

    frontend: [
      "// Frontend stack",
      "const MySkills = {",
      '  languages: ["JavaScript (ES6+)", "HTML", "CSS"],',
      '  frameworks: ["React", "TailwindCSS"],',
      '  tools: ["Vite", "NPM", "React Router"],',
      '  layout: ["Flexbox", "Grid"],',
      "};",
    ],

    other: [
      "$ bash my_environment",
      "───────────────────────────────",
      "DevOps: Docker, Docker Compose, Nginx (reverse proxy, SSL)",
      "Monitoring: Grafana + Prometheus",
      "OS: Linux",
      "Tools: Git, Postman",
      "Concepts: OOP, REST, Async IO, Design Patterns",
      "───────────────────────────────",
      "✔ Ready — production environment configured",
    ],
  };

  const THEME = {
    backend: {
      bg: "#1E1E1E",
      key: "#4EC9B0",
      val: "#DCDCAA",
      comment: "#6A9955",
      plain: "#C8C8C8",
    },
    frontend: {
      bg: "#1E1E1E",
      key: "#569CD6",
      val: "#CE9178",
      comment: "#6A9955",
      plain: "#C8C8C8",
    },
    other: {
      bg: "#000000",
      key: "#00FF88",
      val: "#00CC66",
      comment: "#00FF88",
      plain: "#C8C8C8",
    },
  };

  const HEADER = {
    backend: "skills.py",
    frontend: "Skills.jsx",
    other: "my_skills.sh",
  };

  useEffect(() => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);

    const target = SNIPPETS[tab];
    let lineIdx = 0;
    let charIdx = 0;

    setLines([""]);

    const TYPE_SPEED = 14;
    const LINE_DELAY = 220;

    const typeStep = () => {
      const fullLine = target[lineIdx];
      const isLineDone = charIdx >= fullLine.length;

      if (!isLineDone) {
        const nextPartial = fullLine.slice(0, charIdx + 1);
        setLines((prev) => {
          const copy = prev.slice();
          copy[lineIdx] = nextPartial;
          return copy;
        });
        charIdx += 1;
        typingTimerRef.current = setTimeout(typeStep, TYPE_SPEED);
      } else {
        setLines((prev) => {
          const copy = prev.slice();
          if (lineIdx < target.length - 1) copy.push("");
          return copy;
        });
        lineIdx += 1;
        charIdx = 0;
        if (lineIdx < target.length) {
          typingTimerRef.current = setTimeout(typeStep, LINE_DELAY);
        }
      }
    };

    typingTimerRef.current = setTimeout(typeStep, 250);

    if (blinkTimerRef.current) clearInterval(blinkTimerRef.current);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (blinkTimerRef.current) clearInterval(blinkTimerRef.current);
    };
  }, [tab]);

  const scheme = THEME[tab];
  const renderPython = (line, done) => {
    if (!done) return <span style={{ color: scheme.plain }}>{line}</span>;
    if (line.trim().startsWith("#")) {
      return <span style={{ color: scheme.comment }}>{line}</span>;
    }
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1)
      return <span style={{ color: scheme.plain }}>{line}</span>;
    const before = line.slice(0, eqIndex);
    const after = line.slice(eqIndex + 1);
    return (
      <>
        <span style={{ color: scheme.key }}>{before}</span>
        <span className="text-gray-400">=</span>
        <span style={{ color: scheme.val }}>{after}</span>
      </>
    );
  };

  const renderJS = (line, done) => {
    if (!done) return <span style={{ color: scheme.plain }}>{line}</span>;
    const trimmed = line.trim();
    if (trimmed.startsWith("//")) {
      return <span style={{ color: scheme.comment }}>{line}</span>;
    }
    if (trimmed.startsWith("const ")) {
      const m = line.match(/^(const\s+)([A-Za-z_$][\w$]*)(\s*=\s*)(\{?)/);
      if (!m) return <span style={{ color: scheme.plain }}>{line}</span>;
      const [, kw, name, eq, brace] = m;
      const rest = line.slice(m[0].length);
      return (
        <>
          <span style={{ color: scheme.key }}>{kw}</span>
          <span style={{ color: "#9CDCFE" }}>{name}</span>
          <span className="text-gray-400">{eq}</span>
          <span style={{ color: scheme.plain }}>
            {brace}
            {rest}
          </span>
        </>
      );
    }
    if (trimmed === "};" || trimmed === "}") {
      return <span style={{ color: scheme.plain }}>{line}</span>;
    }
    const mProp = line.match(/^(\s*)([A-Za-z_$][\w$]*)(\s*:\s*)(.+?)(,?)\s*$/);
    if (mProp) {
      const [, indent, key, colon, values, comma] = mProp;
      return (
        <>
          <span style={{ color: scheme.plain }}>{indent}</span>
          <span style={{ color: "#9CDCFE" }}>{key}</span>
          <span className="text-gray-400">{colon}</span>
          <span style={{ color: scheme.val }}>{values}</span>
          <span style={{ color: scheme.plain }}>{comma}</span>
        </>
      );
    }
    return <span style={{ color: scheme.plain }}>{line}</span>;
  };
  const renderBash = (line) => {
    const isCmd = line.trim().startsWith("$");
    return (
      <span style={{ color: isCmd ? scheme.key : scheme.val }}>{line}</span>
    );
  };
  const renderLine = (line, idx) => {
    const done = lines[idx] === (SNIPPETS[tab][idx] || "");
    if (tab === "backend") return renderPython(line, done);
    if (tab === "frontend") return renderJS(line, done);
    return renderBash(line, done);
  };
  return (
    <section
      className="relative flex flex-col justify-center
      items-center min-h-screen bg-[#0A0A0F] font-mono overflow-hidden"
    >
      <h2
        className="relative z-10 mb-6 md:mb-8 text-2xl
      md:text-4xl font-semibold text-[#F3C48E]"
      >
        Мои навыки
      </h2>
      <div
        className="relative w-[95%] md:w-[82%] max-w-5xl
        rounded-2xl overflow-hidden border border-[#2B2B2B]
        shadow-[0_0_40px_rgba(212,163,95,0.25)] z-10"
        style={{ backgroundColor: scheme.bg }}
      >
        <div
          className="flex items-center justify-between
        px-4 py-2 bg-[#2D2D2D] border-b border-[#3a3a3a]"
        >
          <div className="flex gap-2">
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]"
              title="Close"
            />
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"
              title="Minimize"
            />
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"
              title="Maximize"
            />
          </div>
          <div className="text-[#D4B07A]/70 text-sm">{HEADER[tab]}</div>
          <div />
        </div>
        <div className="flex bg-[#252526] px-4 pt-3 pb-1 gap-2">
          {[
            { id: "backend", label: "Backend" },
            { id: "frontend", label: "Frontend" },
            { id: "other", label: "Other" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-5 py-2 rounded-t-lg text-sm transition-all duration-200 ${
                tab === id
                  ? "bg-[#1E1E1E] text-[#F3C48E] border " +
                    "border-[#3a3a3a] border-b-transparent shadow-inner"
                  : "bg-[#2D2D2D] text-[#D4B07A]/70 hover:text-[#F3C48E]"
              }`}
              aria-pressed={tab === id}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          className="p-6 text-sm md:text-base min-h-[360px] whitespace-pre-wrap
          md:whitespace-pre break-words [overflow-wrap:anywhere] leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={`${tab}-${i}`} style={{ color: THEME[tab].plain }}>
              {renderLine(line, i)}
            </div>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute w-[420px] h-[420px]
      rounded-full bg-[#D4A35F]/15 blur-3xl top-1/3"
      />
    </section>
  );
}
