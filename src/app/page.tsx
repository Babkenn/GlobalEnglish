"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About us" },
    { href: "#teachers", label: "Our teachers" },
    { href: "#courses", label: "Courses" },
    { href: "#programmes", label: "Programmes" },
    { href: "#jobs", label: "Jobs" },
  ];

  const reveal = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/90 shadow-[0_2px_10px_rgba(6,182,212,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a
            href="#home"
            className="font-rounded inline-flex items-center gap-2 text-xl font-bold text-cyan-600 sm:text-2xl"
          >
            <Image
              src="/parrot-logo.png"
              alt="Global English parrot logo"
              width={30}
              height={30}
              className="rounded-full ring-2 ring-cyan-200"
              priority
            />
            Global English
          </a>
          <button
            type="button"
            className="rounded-md border border-cyan-200 p-2 text-cyan-700 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-bold lg:text-base">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-1.5 text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav
          id="mobile-menu"
          className={`border-t border-cyan-100 bg-white md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-1 px-4 py-3 text-base font-bold">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg p-2 hover:bg-cyan-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-cyan-50">
          <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
            <div className="parrot-fly absolute left-0 top-16">
              <svg viewBox="0 0 80 52" className="h-14 w-14 drop-shadow-sm md:h-16 md:w-16">
                <ellipse cx="40" cy="30" rx="16" ry="11" fill="#e11d72" />
                <circle cx="28" cy="23" r="9" fill="#f472b6" />
                <circle cx="30" cy="22" r="1.7" fill="#111827" />
                <path d="M20 23l-7 3 7 3z" fill="#3f3f46" />
                <path d="M50 30c7-10 15-9 22 0-8-2-15-1-22 0z" fill="#22d3ee" />
                <path d="M38 40l7 9 3-10z" fill="#f59e9e" />
              </svg>
            </div>
            <div className="parrot-fly parrot-fly-delay-1 absolute left-0 top-24">
              <svg viewBox="0 0 80 52" className="h-12 w-12 drop-shadow-sm md:h-14 md:w-14">
                <ellipse cx="40" cy="30" rx="16" ry="11" fill="#db2777" />
                <circle cx="28" cy="23" r="9" fill="#f9a8d4" />
                <circle cx="30" cy="22" r="1.7" fill="#111827" />
                <path d="M20 23l-7 3 7 3z" fill="#52525b" />
                <path d="M50 30c7-10 15-9 22 0-8-2-15-1-22 0z" fill="#06b6d4" />
                <path d="M38 40l7 9 3-10z" fill="#fca5a5" />
              </svg>
            </div>
            <div className="parrot-fly parrot-fly-delay-2 absolute left-0 top-7">
              <svg viewBox="0 0 80 52" className="h-11 w-11 drop-shadow-sm md:h-12 md:w-12">
                <ellipse cx="40" cy="30" rx="16" ry="11" fill="#e11d72" />
                <circle cx="28" cy="23" r="9" fill="#fbcfe8" />
                <circle cx="30" cy="22" r="1.7" fill="#111827" />
                <path d="M20 23l-7 3 7 3z" fill="#3f3f46" />
                <path d="M50 30c7-10 15-9 22 0-8-2-15-1-22 0z" fill="#67e8f9" />
                <path d="M38 40l7 9 3-10z" fill="#fda4af" />
              </svg>
            </div>
          </div>
          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:py-16 md:grid-cols-2 md:gap-10 md:px-6 md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mb-3 inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-bold text-cyan-700">
                Fun. Friendly. Future-ready.
              </p>
              <h1 className="font-rounded text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
                Unlock the World with Global English!
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
                We help children gain confidence in English through playful lessons, caring
                teachers, and inspiring global learning adventures.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                <a
                  href="#courses"
                  className="rounded-full bg-brand px-6 py-3 text-center font-bold text-white shadow-sm transition hover:brightness-95"
                >
                  Explore Courses
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-cyan-200 px-6 py-3 text-center font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hidden items-center justify-center md:flex"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="animate-float rounded-3xl border border-cyan-100 bg-white p-6 shadow-lg">
                <svg
                  viewBox="0 0 480 340"
                  role="img"
                  aria-label="Children learning English"
                  className="h-auto w-full max-w-md"
                >
                  <rect width="480" height="340" rx="24" fill="#e6fdfe" />
                  <circle cx="120" cy="100" r="44" fill="#05d1d4" opacity="0.25" />
                  <circle cx="355" cy="95" r="35" fill="#05d1d4" opacity="0.2" />
                  <rect x="88" y="145" width="300" height="135" rx="16" fill="white" />
                  <rect x="112" y="168" width="170" height="14" rx="7" fill="#b8f3f4" />
                  <rect x="112" y="192" width="245" height="14" rx="7" fill="#d7fbfb" />
                  <rect x="112" y="216" width="210" height="14" rx="7" fill="#d7fbfb" />
                  <text
                    x="112"
                    y="130"
                    fill="#0f766e"
                    fontSize="22"
                    fontFamily="Nunito, sans-serif"
                    fontWeight="700"
                  >
                    Global English
                  </text>
                  <circle cx="325" cy="235" r="30" fill="#05d1d4" opacity="0.9" />
                  <path
                    d="M317 235l6 6 12-14"
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6" {...reveal}>
          <h2 className="font-rounded text-3xl font-extrabold text-slate-800">About Us</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            At Global English, our mission is to make language learning joyful and practical. We
            combine games, stories, and interactive speaking tasks to help children build real
            communication skills and global confidence.
          </p>
        </motion.section>

        <motion.section id="teachers" className="bg-cyan-50/60 py-16" {...reveal}>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="font-rounded text-3xl font-extrabold text-slate-800">Our Teachers</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <div className="mb-3 h-20 w-20 rounded-full bg-cyan-100"></div>
                <h3 className="font-rounded text-xl font-bold">Ms. Emma</h3>
                <p className="text-slate-600">
                  Fun fact: loves teaching with songs and puppets.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <div className="mb-3 h-20 w-20 rounded-full bg-cyan-100"></div>
                <h3 className="font-rounded text-xl font-bold">Mr. Leo</h3>
                <p className="text-slate-600">
                  Fun fact: creates mini speaking adventures each week.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <div className="mb-3 h-20 w-20 rounded-full bg-cyan-100"></div>
                <h3 className="font-rounded text-xl font-bold">Ms. Sara</h3>
                <p className="text-slate-600">
                  Fun fact: turns grammar into playful team challenges.
                </p>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="courses"
          className="mx-auto max-w-6xl px-4 py-16 md:px-6"
          {...reveal}
        >
          <h2 className="font-rounded text-3xl font-extrabold text-slate-800">Courses</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-100 p-5">
              <h3 className="font-rounded text-xl font-bold text-cyan-700">Toddlers</h3>
              <p className="mt-2 text-slate-600">
                Ages 3-5: songs, phonics play, and first speaking confidence.
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-100 p-5">
              <h3 className="font-rounded text-xl font-bold text-cyan-700">Primary</h3>
              <p className="mt-2 text-slate-600">
                Ages 6-11: reading, vocabulary building, and conversation games.
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-100 p-5">
              <h3 className="font-rounded text-xl font-bold text-cyan-700">Teens</h3>
              <p className="mt-2 text-slate-600">
                Ages 12-16: communication fluency, project-based learning, exam prep.
              </p>
            </article>
          </div>
        </motion.section>

        <motion.section id="programmes" className="bg-cyan-50/60 py-16" {...reveal}>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="font-rounded text-3xl font-extrabold text-slate-800">Programmes</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <h3 className="font-rounded text-xl font-bold text-cyan-700">Summer Camp</h3>
                <p className="mt-2 text-slate-600">
                  Creative workshops and outdoor English missions.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <h3 className="font-rounded text-xl font-bold text-cyan-700">
                  Intensive Weekends
                </h3>
                <p className="mt-2 text-slate-600">
                  Focused speaking boosts with project presentations.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cyan-100">
                <h3 className="font-rounded text-xl font-bold text-cyan-700">Online Modules</h3>
                <p className="mt-2 text-slate-600">
                  Flexible remote lessons designed for modern families.
                </p>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section id="jobs" className="mx-auto max-w-6xl px-4 py-16 md:px-6" {...reveal}>
          <h2 className="font-rounded text-3xl font-extrabold text-slate-800">Jobs</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Passionate ESL teachers are welcome! Share your CV and a short introduction to join
            our team.
          </p>
          <form
            className="mt-6 grid max-w-2xl gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              window.alert("Thanks! We will contact you soon.");
            }}
          >
            <input
              className="rounded-xl border border-cyan-200 px-4 py-3 focus:border-cyan-400 focus:outline-none"
              type="text"
              placeholder="Full name"
              required
            />
            <input
              className="rounded-xl border border-cyan-200 px-4 py-3 focus:border-cyan-400 focus:outline-none"
              type="email"
              placeholder="Email address"
              required
            />
            <textarea
              className="min-h-28 rounded-xl border border-cyan-200 px-4 py-3 focus:border-cyan-400 focus:outline-none"
              placeholder="Tell us about your teaching experience"
            ></textarea>
            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-full bg-brand px-6 py-3 font-bold text-white transition hover:brightness-95"
                type="submit"
              >
                Send Application
              </button>
              <a
                className="rounded-full border border-cyan-200 px-6 py-3 font-bold text-cyan-700 transition hover:bg-cyan-50"
                href="mailto:jobs@globalenglish.school"
              >
                Email Instead
              </a>
            </div>
          </form>
        </motion.section>
      </main>

      <footer className="border-t border-cyan-100 bg-cyan-50/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 md:px-6">
          <div>
            <h3 className="font-rounded text-xl font-bold text-cyan-700">Global English</h3>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Helping children grow confident in English with joyful classes, caring teachers, and
              global learning adventures.
            </p>
          </div>

          <div>
            <h4 className="font-rounded text-lg font-bold text-slate-800">Menu</h4>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-600">
              {navItems.map((item) => (
                <li key={`footer-${item.href}`}>
                  <a
                    href={item.href}
                    className="inline-flex rounded px-1 py-0.5 transition hover:bg-cyan-100 hover:text-cyan-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-rounded text-lg font-bold text-slate-800">Share & Follow</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/GlobalEnglishYerevan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-cyan-200 transition hover:bg-cyan-100 hover:text-cyan-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/globalenglisharmenia?igsh=MTduNXRvM3Z3bXkyZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-cyan-200 transition hover:bg-cyan-100 hover:text-cyan-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm9.15 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://wa.me/?text=Check%20out%20Global%20English%20for%20kids%20https%3A%2F%2Fglobalenglish.school"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-cyan-200 transition hover:bg-cyan-100 hover:text-cyan-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.08.54 4.11 1.56 5.9L0 24l6.4-1.68a11.81 11.81 0 0 0 5.66 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.41-8.43zM12.07 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.79 9.79 0 0 1-1.5-5.18c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 0 1 2.88 6.97c0 5.43-4.42 9.84-9.85 9.84zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.31.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Share Global English with parents and friends.
            </p>
          </div>
        </div>
        <div className="border-t border-cyan-100 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Global English. Learning made bright.
        </div>
      </footer>
    </div>
  );
}
