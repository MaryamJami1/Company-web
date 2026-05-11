"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Cpu, ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";

const services = [
  { label: "Logo Design", href: "/logo-design" },
  { label: "Website Design", href: "/website-design" },
  { label: "Animation", href: "/animation" },
  { label: "Brand", href: "/brand" },
  { label: "E-commerce", href: "/ecommerce" },
  { label: "Chatbot Development", href: "/chatbot-development" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  // New button visibility: visible at top, hides after 50px scroll
  const buttonOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const buttonY = useTransform(scrollY, [0, 50], [0, -20]);
  const buttonPointerEvents = useTransform(scrollY, (latest) => latest > 50 ? "none" : "auto") as any;

  return (
    <>
      <div id="main-navbar" className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex items-center gap-4 transition-opacity duration-300">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] as const }}
          className="flex-grow"
        >
          <div className="navbar-glass px-4 md:px-6 py-3 rounded-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Cpu className="text-[var(--color-arc-blue)] transition-transform group-hover:rotate-90 duration-500 w-5 h-5" />
              <span className="font-[var(--font-orbitron)] font-bold text-sm md:text-lg uppercase tracking-wider text-white">
                Ideas Assemble
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="text-xs font-[var(--font-montserrat)] text-gray-200 hover:text-[var(--color-arc-blue)] transition-colors duration-300 uppercase tracking-wide"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-xs font-[var(--font-montserrat)] text-gray-200 hover:text-[var(--color-arc-blue)] transition-colors duration-300 uppercase tracking-wide flex items-center gap-1">
                  Services <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-52 navbar-glass rounded-2xl p-2 border border-white/10"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-xs text-gray-200 hover:text-[var(--color-arc-blue)] hover:bg-white/5 rounded-xl transition-all uppercase tracking-wide"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="text-xs font-[var(--font-montserrat)] text-gray-200 hover:text-[var(--color-arc-blue)] transition-colors duration-300 uppercase tracking-wide"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-xs font-[var(--font-montserrat)] text-gray-200 hover:text-[var(--color-arc-blue)] transition-colors duration-300 uppercase tracking-wide"
              >
                Contact
              </Link>

              <Link
                href="/portfolio"
                className="bg-[var(--color-arc-blue)] hover:bg-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)]"
              >
                Portfolio
              </Link>
            </div>

            <button aria-label="Toggle mobile menu" className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* New separate button */}
        <motion.div
          style={{ opacity: buttonOpacity, y: buttonY, pointerEvents: buttonPointerEvents }}
          className="hidden lg:block shrink-0"
        >
          <Link
            href="/build"
            className="bg-[var(--color-hot-red)] hover:bg-red-700 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(139,0,0,0.3)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] flex items-center gap-2 group border border-red-500/20 hover:scale-105 active:scale-95"
          >
            Let&apos;s Build Today
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse group-hover:scale-150 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg text-white hover:text-[var(--color-arc-blue)] uppercase tracking-wider py-3 border-b border-white/10">Home</Link>

              <div className="py-3 border-b border-white/10">
                <div className="text-lg text-[var(--color-arc-blue)] uppercase tracking-wider mb-2">Services</div>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block text-base text-gray-400 hover:text-white uppercase tracking-wide py-2 pl-4">
                    {s.label}
                  </Link>
                ))}
              </div>

              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-lg text-white hover:text-[var(--color-arc-blue)] uppercase tracking-wider py-3 border-b border-white/10">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-lg text-white hover:text-[var(--color-arc-blue)] uppercase tracking-wider py-3 border-b border-white/10">Contact</Link>

              <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="mt-6 bg-[var(--color-arc-blue)] text-white text-center px-6 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-white/10 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                Portfolio
              </Link>

              <Link href="/build" onClick={() => setMobileOpen(false)} className="mt-4 bg-[var(--color-hot-red)] text-white text-center px-6 py-4 rounded-full text-sm font-bold uppercase tracking-wider">
                Let&apos;s Build Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
