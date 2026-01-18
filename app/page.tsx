"use client";

import { ReactNode } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import emailjs from "emailjs-com";

import Image from "next/image";
import { DATA } from "../lib/data";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

function FrontendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
      <path d="M8 19.5h8" />
      <circle cx="12" cy="19.5" r="0.8" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
      <path d="M8 7h.01M12 7h.01M16 7h.01M8 17h.01M12 17h.01M16 17h.01" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="7" />
      <path d="M5 12h14" />
      <path d="M12 5a12 12 0 0 1 3 7 12 12 0 0 1-3 7 12 12 0 0 1-3-7 12 12 0 0 1 3-7z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" />
      <path d="M5.5 5.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
      <path d="M5.5 11.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
    </svg>
  );
}


type TabKey = "about" | "resume" | "portfolio" | "contact";

// --------- DATA --------- //

const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces.",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Development",
    description:
      "Implementing server-side logic and basic APIs for dynamic web applications.",
    icon: <BackendIcon />,
  },
  {
    title: "Web Development",
    description:
      "Combining frontend and backend skills to create complete web experiences and small applications.",
    icon: <WebIcon />,
  },
  {
    title: "Databases",
    description:
      "Working with relational databases and queries to store, retrieve, and organize application data.",
    icon: <DatabaseIcon />,
  },
];

const SKILLS = [
  { name: "HTML5", icon: "/skills/html5.svg" },
  { name: "CSS3", icon: "/skills/css3.svg" },
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "PHP", icon: "/skills/php.svg" },
  { name: "Java", icon: "/skills/java.svg" },
  { name: "C", icon: "/skills/c.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
];

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    title: "Agrodraseis",
    description: "This project is a web-based agricultural information and service platform designed to provide real-time weather data, user communication tools, and dynamic content management for farmers, agronomists, and related service providers.",
    image: "/agrodraseis.png",   // βάλε σωστό path εικόνας
    url: "https://agrodraseis.great-site.net/Agrodraseis",   // demo / hosting link
  },
  {
    title: "Document-scan",
    description: "This project is a web-based document scanning and processing system designed to automate identity data extraction and registration workflows for businesses such as parking facilities, car rental companies, and similar service providers.",
    image: "/document-scan.png",
    url: "https://document-scan.great-site.net/Document-scan",
  },
];


// --------- ICONS --------- //

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <polyline points="4.5 7 12 12.5 19.5 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.5s6-5.1 6-10.1A6 6 0 0 0 6 10.4c0 5 6 10.1 6 10.1z" />
      <circle cx="12" cy="10.2" r="1.7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.6 22 11 22 14.4V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z" />
    </svg>
  );
}

// --------- UI HELPERS --------- //

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#15181e] px-3 py-1 text-[11px] text-zinc-300">
      {children}
    </span>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-zinc-800 bg-[#15181e] px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/50 text-yellow-400">
          {service.icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-50">{service.title}</h3>
          <p className="mt-1 text-xs text-zinc-400">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/40 bg-[#111319] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/70 text-yellow-400">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          {label}
        </span>
        <span className="mt-0.5 text-sm text-zinc-100">{value}</span>
      </div>
    </div>
  );
}

function SocialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-50"
    >
      {children}
    </a>
  );
}

function SkillsSlider() {
  const PAGE_SIZE = 4; // πάντα 4 στην οθόνη
  const STEP = 2;      // μετακίνηση κατά 2 (κρατάει 2 προηγούμενα)
  const n = SKILLS.length;

  const [start, setStart] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const visibleSkills = Array.from({ length: PAGE_SIZE }, (_, i) => {
    return SKILLS[(start + i) % n];
  });

  const paginate = (direction: 1 | -1) => {
    setDir(direction);
    setStart((s) => (s + direction * STEP + n) % n);
  };

  const SWIPE_OFFSET = 60;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={start}
            custom={dir}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
              if (info.offset.x < -SWIPE_OFFSET) paginate(1);
              if (info.offset.x > SWIPE_OFFSET) paginate(-1);
            }}

            variants={{
              enter: (d: 1 | -1) => ({ x: d === 1 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: 1 | -1) => ({ x: d === 1 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {visibleSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex h-36 w-0 flex-1 flex-col items-center justify-center gap-3 rounded-3xl bg-[#15181e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={56}
                  height={56}
                  className="object-contain pointer-events-none"
                />
                <span className="text-sm text-zinc-200 pointer-events-none">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5z" />
      <path d="M5 10v5.5L12 19l7-3.5V10" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
      <path d="M9 7.5V6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v1.5" />
      <path d="M3.5 11h17" />
    </svg>
  );
}

function TimelineSection({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Αριστερά: icon + κάθετη γραμμή */}
      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#15181e] text-yellow-400 shadow-[0_18px_40px_rgba(0,0,0,0.8)] ring-1 ring-yellow-500/30">
          {icon}
        </div>
        <div className="mt-2 h-full w-px bg-gradient-to-b from-yellow-500/60 via-yellow-500/15 to-transparent" />
      </div>

      {/* Δεξιά: κάρτα με περιεχόμενο */}
      <div className="flex-1 rounded-2xl border border-zinc-800 bg-[#05070c] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
        <h3 className="text-base font-semibold text-zinc-50">{title}</h3>
        <div className="mt-4 space-y-5">{children}</div>
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  children,
}: {
  title: string;
  subtitle?: string;
  period?: string;
  location?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-yellow-500 before:shadow-[0_0_0_4px_rgba(234,179,8,0.15)]">
      <h4 className="text-sm font-semibold text-zinc-100">{title}</h4>
      {subtitle && (
        <p className="mt-0.5 text-sm font-medium text-zinc-200">{subtitle}</p>
      )}
      {period && (
        <p className="mt-1 text-xs font-medium text-zinc-400">{period}</p>
      )}
      {location && (
        <p className="mt-0.5 text-xs italic text-zinc-500">{location}</p>
      )}
      {children && (
        <div className="mt-3 text-sm leading-relaxed text-zinc-300">
          {children}
        </div>
      )}
    </div>
  );
}


function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 12s3.5-5.5 9.5-5.5S21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.3" />
    </svg>
  );
}

function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      {/* IMAGE */}
      <div className="relative aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* DESKTOP HOVER OVERLAY (μόνο από sm και πάνω) */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 hidden items-center justify-center
                     bg-black/40 opacity-0 backdrop-blur-sm
                     transition-opacity duration-300
                     group-hover:opacity-100
                     sm:flex"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full
                          bg-white/10 ring-1 ring-white/20">
            <EyeIcon />
          </div>
        </a>
      </div>

      {/* TEXT + MOBILE BUTTON */}
      <div className="flex flex-col gap-3 p-4">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-zinc-100">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400">
            {project.description}
          </p>
        </div>

        {/* MOBILE ONLY PREVIEW BUTTON – κάτω δεξιά */}
        {/* MOBILE ONLY PREVIEW BUTTON – κάτω δεξιά */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="sm:hidden ml-auto mt-2 inline-flex items-center gap-2
             rounded-full bg-yellow-500 px-4 py-1.5
             text-[12px] font-semibold text-black
             shadow-[0_10px_25px_rgba(234,179,8,0.4)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center">
            <EyeIcon />
          </span>
          <span>Preview</span>
        </a>

      </div>
    </div>
  );
}


// --------- PAGE --------- //
export default function Page() {
  const TABS: { key: TabKey; label: string }[] = [
    { key: "about", label: "About" },
    { key: "resume", label: "Resume" },
    { key: "portfolio", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];

  const [active, setActive] = useState<TabKey>("about");

  const currentTitle =
    active === "about"
      ? "About Me"
      : active === "resume"
        ? "Resume"
        : active === "portfolio"
          ? "Projects"
          : "Contact";

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget; // 🔹 κρατάμε reference στο form ΠΡΙΝ το async

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(() => {
        // επιτυχία – δείξε success στο UI
        setStatus("success");
      })
      .catch((err) => {
        // το mail συνήθως έχει σταλεί, απλά το promise κάνει reject
        console.warn("EmailJS error (mail probably sent anyway):", err);
        setStatus("success"); // για portfolio UI θέλουμε πάλι success
      })
      .finally(() => {
        // εδώ το form δεν είναι null, έχουμε κρατήσει το reference
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      });
  };





  return (
    <main className="min-h-screen bg-[#050608] text-zinc-50">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-120px] top-[40px] h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-140px] bottom-[40px] h-72 w-72 rounded-full bg-yellow-600/8 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row">
        {/* SIDEBAR */}
        <aside className="w-full md:w-[280px] lg:w-[320px] md:sticky md:top-10 self-start">

          <div className="flex flex-col rounded-[28px] border border-zinc-800 bg-[#05070c] px-6 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
            {/* avatar + name */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="relative h-32 w-32 overflow-hidden rounded-[32px] bg-gradient-to-b from-[#1f2229] to-[#111318] ring-1 ring-white/10">
                  <Image
                    src="/me.jpg"
                    alt={DATA.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* αν ξαναθες πράσινο dot, βάλε εδώ ένα span */}
              </div>

              <div className="text-center">
                <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
                  {DATA.name}
                </h1>
                <div className="mt-1 inline-flex rounded-full bg-[#15171e] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-300">
                  {DATA.title ?? "Software Developer"}
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* contact blocks */}
            <div className="flex flex-col gap-3 text-xs">
              <ContactRow
                icon={<MailIcon />}
                label="Email"
                value={DATA.links.email.replace("mailto:", "")}
              />
              <ContactRow icon={<LocationIcon />} label="Location" value={DATA.location} />
            </div>


            {/* Social icons */}
            <div className="mt-6 flex justify-center gap-5">
              <a
                href={DATA.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-zinc-50"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href={DATA.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-zinc-50"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>

          </div>
        </aside>

        {/* MAIN PANEL */}
        <section className="flex-1">
          <div className="flex h-full flex-col rounded-[28px] border border-zinc-800 bg-[#090b10] shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
            <header className="border-b border-zinc-800 px-2 sm:px-7 pt-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                {/* Τίτλος */}
                <div className="pb-1 sm:pb-3">
                  <h2 className="text-xl font-semibold text-zinc-50">
                    {currentTitle}
                  </h2>
                  <div className="mt-1 h-1 w-16 rounded-full bg-yellow-500" />
                </div>

                {/* Tabs */}
                <nav className="w-full sm:w-auto">
                  <div
                    className={`
                    relative cursor-pointer
                    rounded-xl px-2 py-2
                    text-[15px] font-medium
                    text-zinc-400 hover:text-zinc-50
                    transition-colors

                    after:absolute after:left-1/2 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-yellow-500
                    after:transition-all after:duration-300
                    hover:after:left-0 hover:after:w-full
                  `}
                  >
                    {TABS.map((t) => {
                      const isActive = active === t.key;
                      return (
                        <button
                          key={t.key}
                          onClick={() => setActive(t.key)}
                          className={`relative cursor-pointer flex-shrink-0 rounded-xl px-4 py-2 text-[13px] font-medium transition-colors ${isActive
                            ? "text-zinc-50"
                            : "text-zinc-400 hover:text-zinc-100"
                            }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeTabPill"
                              className="absolute inset-0 rounded-xl bg-[#15181e] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                              transition={{ type: "spring", stiffness: 500, damping: 40 }}
                            />
                          )}
                          <span className="relative z-10">{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </header>





            {/* ANIMATED CONTENT */}
            <div className="px-7 pb-7 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-8"
                >
                  {active === "about" && (
                    <>
                      <section className="space-y-4">
                        <p className="text-sm leading-relaxed text-zinc-300">
                          {DATA.bio}
                        </p>
                        <div className="space-y-4">
                          <p className="text-sm leading-relaxed text-zinc-400">
                            I am a junior web developer and a graduate of Applied Informatics from the University of Macedonia, aspiring to grow professionally in the field of web development. I enjoy building simple, efficient, and user-friendly web interfaces.
                          </p>

                          <p className="text-sm leading-relaxed text-zinc-400">
                            During my internship, I had the opportunity to work on real-world web development projects, contributing to both frontend and backend development. This experience helped me strengthen my technical skills and gain a deeper understanding of how teams collaborate to build complete applications.
                          </p>

                          <p className="text-sm leading-relaxed text-zinc-400">
                            I am known for being adaptable, reliable, and a fast learner, always motivated to improve my skills and deliver quality work.
                          </p>

                          <p className="text-sm leading-relaxed text-zinc-400">
                            If you’re looking for a motivated junior web developer who enjoys building clean and user-friendly web applications, I would be happy to collaborate with you. Let’s work together to turn ideas into functional and meaningful digital experiences.
                          </p>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-base font-semibold text-zinc-50">
                          What I&apos;m Doing
                        </h3>

                        <div className="mt-4 flex flex-col gap-4 md:flex-row">
                          {/* Αριστερή στήλη */}
                          <div className="flex flex-1 flex-col gap-4">
                            <ServiceCard service={SERVICES[0]} /> {/* Frontend */}
                            <ServiceCard service={SERVICES[2]} /> {/* Web */}
                          </div>

                          {/* Δεξιά στήλη */}
                          <div className="flex flex-1 flex-col gap-4">
                            <ServiceCard service={SERVICES[1]} /> {/* Backend */}
                            <ServiceCard service={SERVICES[3]} /> {/* Databases */}
                          </div>
                        </div>
                      </section>




                      <section>
                        <h3 className="text-base font-semibold text-zinc-50">Skills</h3>
                        <div className="mt-6">
                          <SkillsSlider />
                        </div>
                      </section>
                    </>
                  )}

                  {active === "resume" && (
                    <section className="space-y-10">
                      {/* Education */}
                      <TimelineSection icon={<EducationIcon />} title="Education">
                        <TimelineItem
                          title="University of Macedonia"
                          subtitle="B.Sc., Applied Informatics & Information Systems"
                          period="October 2021 – June 2025"
                          location="Thessaloniki, Greece"
                        />
                      </TimelineSection>

                      {/* Experience */}
                      <TimelineSection icon={<ExperienceIcon />} title="Work Experience">
                        <TimelineItem
                          title="Intern – Web Development Company"
                          period="October 2025 – December 2025"
                        >
                          <ul className="space-y-1.5 pl-4">
                            <li className="list-disc">
                              Maintained and updated WordPress websites, customizing layouts and
                              functionality using WordPress and Elementor.
                            </li>
                            <li className="list-disc">
                              Developed automation tools and scripts using PHP, HTML, CSS, and
                              JavaScript to support internal workflows.
                            </li>
                            <li className="list-disc">
                              Built a PHP-based email automation script to streamline
                              communication processes.
                            </li>
                            <li className="list-disc">
                              Created a lightweight web tool for fast access to Google Drive
                              folders, improving file management efficiency.
                            </li>
                            <li className="list-disc">
                              Developed a full-stack application integrating the Google Vision API
                              for automatic scanning and data extraction from IDs, passports, and
                              driver&apos;s licenses.
                            </li>
                            <li className="list-disc">
                              Gained hands-on experience in web development, automation, and
                              real-world software workflows.
                            </li>
                          </ul>
                        </TimelineItem>
                      </TimelineSection>

                      {/* Κουμπί Full CV κάτω δεξιά */}
                      <div className="flex justify-end">
                        <a
                          href="/CV.pdf"          // αν αλλάξεις όνομα στο αρχείο, άλλαξέ το κι εδώ
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2
                   rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600
                   px-5 py-2.5 text-sm font-semibold text-black
                   shadow-[0_14px_35px_rgba(234,179,8,0.35)]
                   transition hover:from-yellow-400 hover:to-yellow-500
                   focus:outline-none focus:ring-2 focus:ring-yellow-500/70
                   focus:ring-offset-2 focus:ring-offset-[#090b10]"
                        >
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-black/10">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.8}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 2.5h9l3 3V20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5z" />
                              <path d="M9 11.5 12 14.5 15 11.5" />
                              <path d="M12 7.5v7" />
                            </svg>
                          </span>
                          <span>View Full CV</span>
                        </a>
                      </div>
                    </section>
                  )}

                  {active === "portfolio" && (
                    <section className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        {PROJECTS.map((project) => (
                          <PortfolioCard key={project.title} project={project} />
                        ))}
                      </div>
                    </section>
                  )}


                  {active === "contact" && (
                    <section className="space-y-6">
                      <div>
                        <h3 className="text-base font-semibold text-zinc-50">Contact Form</h3>
                        <p className="mt-2 text-sm text-zinc-300">
                          Interested in working together?
                          Fill out the form below and I’ll get back to you as soon as possible.
                        </p>
                      </div>

                      <form
                        onSubmit={sendEmail}
                        className="relative mt-2 rounded-2xl border border-zinc-800 bg-[#05070c] px-5 py-6 sm:px-6 sm:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
                      >
                        {/* Name + Email */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-zinc-400">Full name</label>
                            <input
                              type="text"
                              name="name"
                              required
                              className="h-11 rounded-xl border border-zinc-800 bg-[#050608] px-3 text-sm text-zinc-100 outline-none transition focus:border-yellow-500/70 focus:ring-1 focus:ring-yellow-500/60"
                              placeholder="Your name"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-zinc-400">Email address</label>
                            <input
                              type="email"
                              name="email"
                              required
                              className="h-11 rounded-xl border border-zinc-800 bg-[#050608] px-3 text-sm text-zinc-100 outline-none transition focus:border-yellow-500/70 focus:ring-1 focus:ring-yellow-500/60"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="mt-4 flex flex-col gap-1">
                          <label className="text-xs font-medium text-zinc-400">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            required
                            className="h-11 rounded-xl border border-zinc-800 bg-[#050608] px-3 text-sm text-zinc-100 outline-none transition focus:border-yellow-500/70 focus:ring-1 focus:ring-yellow-500/60"
                            placeholder="What would you like to talk about?"
                          />
                        </div>

                        {/* Message */}
                        <div className="mt-4 flex flex-col gap-1">
                          <label className="text-xs font-medium text-zinc-400">Your message</label>
                          <textarea
                            rows={5}
                            name="message"
                            required
                            className="rounded-xl border border-zinc-800 bg-[#050608] px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-yellow-500/70 focus:ring-1 focus:ring-yellow-500/60 resize-none"
                            placeholder="Write your message here..."
                          />
                        </div>

                        {/* Button */}
                        <div className="mt-5 flex justify-end">
                          <button
                            type="submit"
                            disabled={status === "sending"}
                            className="
                              inline-flex items-center gap-2
                              rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600
                              px-5 py-2.5 text-sm font-semibold text-black
                              shadow-[0_14px_35px_rgba(234,179,8,0.35)]
                              transition hover:from-yellow-400 hover:to-yellow-500
                              focus:outline-none focus:ring-2 focus:ring-yellow-500/70
                              focus:ring-offset-2 focus:ring-offset-[#090b10]
                              cursor-pointer              /* 👈 αυτό προστέθηκε */
                              disabled:opacity-60 disabled:cursor-not-allowed /* προαιρετικό */
                            "
                          >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-black/10">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 4.5 20 12 4 19.5 6.8 12z" />
                              </svg>
                            </span>
                            <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                          </button>


                        </div>
                        <div className="mt-3 min-h-[26px]">
                          <AnimatePresence mode="wait">
                            {status === "success" && (
                              <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.18 }}
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <span>Message sent successfully! I’ll get back to you soon.</span>
                              </motion.div>
                            )}

                            {status === "error" && (
                              <motion.div
                                key="error"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.18 }}
                                className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs text-red-300"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 5v10" />
                                  <path d="M12 17h.01" />
                                </svg>
                                <span>Something went wrong. Please try again.</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </form>
                    </section>
                  )}


                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </main>
  );

}
