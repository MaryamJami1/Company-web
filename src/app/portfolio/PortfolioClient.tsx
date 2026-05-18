"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  // LOGOS
  { category: "Logo", image: "/assets/logo/AKNIFY Logo.png" },
  { category: "Logo", image: "/assets/logo/ASPIRE-ICON-HHS-PNG.png" },
  { category: "Logo", image: "/assets/logo/CMI-CollegePrep-Color-BG-JPG.jpg" },
  { category: "Logo", image: "/assets/logo/Ecorap Logo 1.jpg" },
  { category: "Logo", image: "/assets/logo/Ecorap Logo 2.png" },
  { category: "Logo", image: "/assets/logo/Logo.png" },
  { category: "Logo", image: "/assets/logo/London Global Preschool Logo.jpg" },
  { category: "Logo", image: "/assets/logo/New Modern Decorators Logo.png" },
  { category: "Logo", image: "/assets/logo/PMS-PAW-ONE-COLORLARGE-PNG.png" },
  { category: "Logo", image: "/assets/logo/PUHSD-BizSrv-Color-Large-PNG.png" },
  { category: "Logo", image: "/assets/logo/PUHSD-EmblemLogo-Color-jpg.jpg" },
  { category: "Logo", image: "/assets/logo/PUHSD-FACE-ICON-COLOR-PNG.png" },
  { category: "Logo", image: "/assets/logo/PVHS-30th-2-PNG.png" },
  { category: "Logo", image: "/assets/logo/Pathways-Square-Icon-Rainbow-600px-PNG.png" },
  { category: "Logo", image: "/assets/logo/THE PROSPECT Logo.png" },
  { category: "Logo", image: "/assets/logo/TRANQUIL CARE LTD LOGO.jpg" },
  { category: "Logo", image: "/assets/logo/TerraBitesCafe-Icon-Color-600px-PNG.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-01.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-02.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-03.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-04.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-05.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-06.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-07.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-08.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-09.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-10.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-11.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-12.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-13.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-14.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-15.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-16.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-17.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-18.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-19.png" },
  { category: "Logo", image: "/assets/logo/brand-identity-20.png" },
  // WEBSITES
  { category: "Website", image: "/assets/website/website1.png" },
  { category: "Website", image: "/assets/website/website2.png" },
  { category: "Website", image: "/assets/website/website3.png" },
  { category: "Website", image: "/assets/website/website4.png" },
  { category: "Website", image: "/assets/website/website5.png" },
  { category: "Website", image: "/assets/website/website6.png" },
  { category: "Website", image: "/assets/website/website7.png" },
  { category: "Website", image: "/assets/website/website8.png" },
  { category: "Website", image: "/assets/website/website09.png" },
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
  const [filter, setFilter] = useState("Logo");
  const [mounted, setMounted] = useState(false);
  const [shuffledItems, setShuffledItems] = useState(portfolioItems);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    // Shuffle items on mount
    const shuffle = (array: typeof portfolioItems) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    setShuffledItems(shuffle(portfolioItems));
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

  const filteredItems = shuffledItems.filter(
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
      <section className="relative h-[42vh] sm:h-[48vh] md:h-[55vh] lg:h-[60vh] flex items-center justify-center overflow-hidden pt-16 md:pt-24">
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

        <div className="container mx-auto px-4 sm:px-6 relative z-20">
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
              className="font-[var(--font-orbitron)] text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-3 sm:mb-4 md:mb-8 glitch text-white mx-auto w-fit"
              data-text="PORTFOLIO"
            >
              PORT<span className="text-[var(--color-hot-red)]">FOLIO</span>
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-8">
              <div className="h-px w-8 sm:w-10 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-hot-red)]" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-hot-red)]" />
              <div className="h-px w-8 sm:w-10 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-hot-red)]" />
            </div>
            <p className="text-gray-400 max-w-xs sm:max-w-sm md:max-w-lg mx-auto text-[11px] sm:text-xs md:text-sm leading-relaxed px-4 md:px-0">
              Curated projects showcasing our expertise in design and digital innovation.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade to content */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10" />
      </section>

      {/* ═══════════ FILTER TABS ═══════════ */}
      <section className="sticky top-14 sm:top-16 md:top-20 z-30 py-1.5 sm:py-2 md:py-4">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="navbar-glass rounded-xl md:rounded-2xl px-2 sm:px-3 md:px-6 py-2.5 sm:py-3 md:py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-4">
            {/* Left Spacer for desktop centering */}
            <div className="hidden md:block" />
            {/* Category tabs */}
            <div className="flex items-center gap-1 md:gap-2 w-full justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="relative flex-1 md:flex-none px-2 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-[var(--font-orbitron)] text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] transition-all duration-300"
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
                className="text-gray-500 text-[10px] font-medium hidden md:block text-right"
              >
                {categoryDescriptions[filter]}
              </motion.p>
            </AnimatePresence>


          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO GRID ═══════════ */}
      <section className="py-6 sm:py-10 md:py-16 relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={`${filter}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => openLightbox(i)}
                  className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${item.category === "Logo"
                      ? "aspect-square bg-white p-3 sm:p-5 md:p-8 lg:p-10"
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
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all z-50"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-1 sm:left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--color-arc-blue)] transition-all z-50"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-1 sm:right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--color-arc-blue)] transition-all z-50"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-[88vw] sm:w-[92vw] md:w-[85vw] lg:w-[80vw] ${filteredItems[lightboxIndex]?.category === "Logo"
                  ? "max-h-[55vh] sm:max-h-[60vh] md:max-h-[70vh] aspect-square bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12"
                  : "max-h-[55vh] sm:max-h-[65vh] md:max-h-[80vh] aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
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


          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
