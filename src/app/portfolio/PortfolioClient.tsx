"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  // LOGOS
  { category: "Logo", image: "/assets/logo/logo1.png" },
  { category: "Logo", image: "/assets/logo/logo2.png" },
  { category: "Logo", image: "/assets/logo/logo3.png" },
  { category: "Logo", image: "/assets/logo/logo4.png" },
  { category: "Logo", image: "/assets/logo/logo5.png" },
  // WEBSITES
  { category: "Website", image: "/assets/website/website1.png" },
  { category: "Website", image: "/assets/website/website2.png" },
  { category: "Website", image: "/assets/website/website3.png" },
  { category: "Website", image: "/assets/website/website4.png" },
  { category: "Website", image: "/assets/website/website5.png" },
  { category: "Website", image: "/assets/website/website6.png" },
  { category: "Website", image: "/assets/website/website7.png" },
  { category: "Website", image: "/assets/website/website8.png" },
  // BRANDING
  { category: "Branding", image: "/assets/branding/branding1.jpg" },
  { category: "Branding", image: "/assets/branding/branding2.jpg" },
  { category: "Branding", image: "/assets/branding/branding3.jpg" },
  { category: "Branding", image: "/assets/branding/branding4.jpg" },
  { category: "Branding", image: "/assets/branding/branding5.jpg" },
];

const categories = ["Logo", "Website", "Branding"];

const categoryDescriptions: Record<string, string> = {
  Logo: "Precision-crafted visual identities that define brands.",
  Website: "High-performance digital platforms built to convert.",
  Branding: "Complete brand ecosystems that command attention.",
};

export default function PortfolioClient() {
  const [filter, setFilter] = useState("Website");
  const [mounted, setMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const filteredItems = portfolioItems.filter(
    (item) => item.category === filter
  );

  // Lightbox navigation
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
    );
  }, [lightboxIndex, filteredItems.length]);
  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prevImage, nextImage]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black bg-[#0c0c0c] font-[var(--font-montserrat)]">
      <Navbar />

      {/* ═══════════ DARK HERO ═══════════ */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,210,255,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,210,255,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Blue accent glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 40% 40% at 20% 70%, rgba(0,210,255,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
            className="text-center"
          >
            {/* <div className="font-[var(--font-orbitron)] text-[8px] md:text-[10px] text-[var(--color-hot-red)] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-8">
              Our Creative Work
            </div> */}
            <h1
              className="font-[var(--font-orbitron)] text-4xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-4 md:mb-8 glitch text-white"
              data-text="PORTFOLIO"
            >
              PORT
              <span className="text-[var(--color-hot-red)]">FOLIO</span>
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-hot-red)]" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-hot-red)]" />
              <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-hot-red)]" />
            </div>
            <p className="text-gray-500 max-w-sm md:max-w-lg mx-auto text-xs md:text-sm leading-relaxed px-4 md:px-0">
              {filteredItems.length} curated projects showcasing our expertise
              in design and digital innovation.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade to content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10" />
      </section>

      {/* ═══════════ FILTER TABS ═══════════ */}
      <section className="sticky top-16 md:top-20 z-30 py-3 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="navbar-glass rounded-xl md:rounded-2xl px-3 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1 md:gap-2 w-full md:w-auto justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="relative px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-[var(--font-orbitron)] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-300"
                >
                  {filter === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--color-hot-red)] rounded-lg md:rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${filter === cat ? "text-white" : "text-gray-500 hover:text-white"
                      }`}
                  >
                    {cat}
                  </span>
                </button>
              ))}
            </div>

            {/* Category description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={filter}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 text-xs font-medium hidden md:block"
              >
                {categoryDescriptions[filter]}
              </motion.p>
            </AnimatePresence>

            {/* Count badge */}
            <div className="hidden md:flex items-center gap-2 text-[10px] font-[var(--font-orbitron)] uppercase tracking-widest text-gray-600">
              <span className="text-[var(--color-hot-red)] text-lg font-black">
                {filteredItems.length}
              </span>
              Projects
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO GRID ═══════════ */}
      <section className="py-10 md:py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={`${filter}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => openLightbox(i)}
                  className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${item.category === "Logo"
                      ? "aspect-square bg-white p-8 md:p-12"
                      : "aspect-[4/3] bg-[#141414]"
                    }`}
                  style={{
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt="Portfolio Project"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`transition-transform duration-700 group-hover:scale-110 ${item.category === "Logo"
                          ? "object-contain"
                          : "object-cover"
                        }`}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-[var(--color-arc-blue)]" />
                        <span className="font-[var(--font-orbitron)] text-[9px] text-[var(--color-arc-blue)] uppercase tracking-[0.3em] font-bold">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-white/60 text-[10px] mt-2 tracking-wider uppercase">
                        Click to expand
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-[1px] h-8 bg-[var(--color-arc-blue)]" />
                    <div className="absolute top-2 right-2 w-8 h-[1px] bg-[var(--color-arc-blue)]" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════ LIGHTBOX ═══════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--color-arc-blue)] transition-all z-50"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--color-arc-blue)] transition-all z-50"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-[92vw] md:w-[90vw] ${filteredItems[lightboxIndex]?.category === "Logo"
                  ? "max-h-[60vh] md:max-h-[70vh] aspect-square bg-white rounded-2xl md:rounded-3xl p-8 md:p-16"
                  : "max-h-[60vh] md:max-h-[80vh] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden"
                }`}
            >
              <Image
                src={filteredItems[lightboxIndex]?.image || ""}
                alt="Portfolio Project"
                fill
                sizes="90vw"
                className={
                  filteredItems[lightboxIndex]?.category === "Logo"
                    ? "object-contain"
                    : "object-cover"
                }
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 font-[var(--font-orbitron)] text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
