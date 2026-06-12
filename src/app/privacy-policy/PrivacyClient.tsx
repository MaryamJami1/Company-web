"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerspectiveSection from "@/components/PerspectiveSection";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] as const },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-white bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-arc-blue)]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-white/10 mb-6">
              <Shield className="w-4 h-4 text-[var(--color-arc-blue)]" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Legal Department</span>
            </div>
            <h1 
              className="font-[var(--font-orbitron)] text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 glitch"
              data-text="PRIVACY POLICY"
            >
              Privacy <span className="text-[var(--color-arc-blue)]">Policy</span>
            </h1>
            <p className="font-[var(--font-montserrat)] text-gray-400 text-sm md:text-base uppercase tracking-widest max-w-2xl mx-auto">
              Last Updated: April 22, 2026 Ã¢â‚¬Â¢ Version 1.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <PerspectiveSection>
            <div className="bg-black rounded-[2rem] border border-white/10 shadow-2xl p-8 md:p-16 space-y-12">
              
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 text-[var(--color-arc-blue)]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-white uppercase tracking-wide">
                    1. Introduction
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  At Topstier, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-red-50 text-[var(--color-hot-red)]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-white uppercase tracking-wide">
                    2. Data Collection
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed mb-4">
                  We collect information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside space-y-3 font-[var(--font-montserrat)] text-gray-600 ml-4">
                  <li>Fill out our contact or project brief forms.</li>
                  <li>Subscribe to our newsletter or updates.</li>
                  <li>Inquire about our design and branding services.</li>
                  <li>Communicate with us via email or WhatsApp.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-green-50 text-green-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-white uppercase tracking-wide">
                    3. Information Usage
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed mb-4">
                  The information we collect is used to:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 font-[var(--font-montserrat)] text-gray-600">
                  <li className="p-4 bg-black rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-arc-blue)]" />
                    Process your project requests
                  </li>
                  <li className="p-4 bg-black rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-arc-blue)]" />
                    Communicate project updates
                  </li>
                  <li className="p-4 bg-black rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-arc-blue)]" />
                    Improve our service delivery
                  </li>
                  <li className="p-4 bg-black rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-arc-blue)]" />
                    Send periodic design insights
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-white uppercase tracking-wide">
                    4. Data Security
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.
                </p>
              </motion.div>

              <div className="pt-12 border-t border-white/10 text-center">
                <p className="font-[var(--font-montserrat)] text-sm text-gray-400">
                  If you have any questions regarding this privacy policy, you may contact our legal team at <span className="text-white font-bold">support@topstier.co</span>
                </p>
              </div>

            </div>
          </PerspectiveSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
