"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { Check, ChevronRight } from "lucide-react";
import ThreeDScene from "@/components/ThreeDScene";
import ThreeDCard from "@/components/ThreeDCard";
import PerspectiveSection from "@/components/PerspectiveSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  description: string;
  description2: string;
  highlights: string[];
  pricing: PricingTier[];
  process: ProcessStep[];
  heroImage: string;
}

export default function ServicePageLayout({
  heroTitle,
  heroSubtitle,
  ctaLabel,
  description,
  description2,
  highlights,
  pricing,
  process,
  heroImage,
}: ServicePageProps) {
  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img
            src={heroImage}
            alt={heroTitle}
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] as const }}
          >
            <h1 
              className="font-[var(--font-orbitron)] text-4xl md:text-6xl lg:text-8xl font-black mb-4 uppercase tracking-tighter glitch"
              data-text={heroTitle.toUpperCase()}
            >
              {heroTitle.split(' ').slice(0, -1).join(' ')} <span className="text-[var(--color-arc-blue)]">{heroTitle.split(' ').slice(-1)}</span>
            </h1>
            <p className="font-[var(--font-montserrat)] text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8 uppercase tracking-widest">
              {heroSubtitle}
            </p>
            <MagneticButton 
              href="/build"
              className="bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-8 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm"
            >
              {ctaLabel}
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* About Service */}
      <PerspectiveSection>
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.p variants={fadeInUp} className="font-[var(--font-montserrat)] text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {description}
              </motion.p>
              <motion.p variants={fadeInUp} className="font-[var(--font-montserrat)] text-gray-600 text-base leading-relaxed mb-10">
                {description2}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 px-5 py-3 rounded-full text-xs text-[var(--color-arc-blue)] uppercase tracking-widest font-bold border border-[var(--color-arc-blue)]/20"
                  >
                    {h}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* Pricing Section */}
      <section className="py-24 relative z-10 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
              Choose Your <span className="text-[var(--color-arc-blue)]">Plan</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricing.map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`${i === 1 ? "md:-mt-4 md:mb-4" : ""} h-full`}
              >
                <div className="neon-border group h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                  <div className="neon-content p-8 h-full flex flex-col">
                    <h3 className="font-[var(--font-orbitron)] text-xl font-bold mb-2 uppercase tracking-wider text-[var(--color-arc-blue)]">
                      {tier.name}
                    </h3>
                    <div className="mb-6">
                      <span className="font-[var(--font-orbitron)] text-4xl font-black text-black">{tier.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/project</span>
                    </div>
                    <ul className="space-y-3 flex-grow mb-8">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[var(--color-brand-green)] mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/build"
                      className="w-full bg-[var(--color-hot-red)] hover:bg-red-700 text-white py-4 rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-red-500/30"
                    >
                      Get Started <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <PerspectiveSection>
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
                Our <span className="text-[var(--color-brand-green)]">Process</span>
              </h2>
              <div className="w-24 h-1 bg-[var(--color-brand-green)] mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-6 mb-10 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-[var(--font-orbitron)] text-sm font-bold text-[var(--color-arc-blue)]">
                      {i + 1}
                    </div>
                    {i < process.length - 1 && (
                      <div className="w-px h-full bg-[var(--color-arc-blue)]/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-[var(--font-orbitron)] text-lg font-bold uppercase tracking-wide text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="font-[var(--font-montserrat)] text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 text-black">
              Ready to <span className="text-[var(--color-hot-red)]">Get Started</span>?
            </h2>
            <p className="font-[var(--font-montserrat)] text-gray-600 mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation and let us help you take your business to the next level.
            </p>
            <MagneticButton 
              href="/build"
              className="bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm"
            >
              Initialize Connection
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
