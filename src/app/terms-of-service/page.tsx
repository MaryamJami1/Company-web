"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerspectiveSection from "@/components/PerspectiveSection";
import { Scale, FileCheck, AlertCircle, RefreshCw } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] as const },
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hot-red)]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Scale className="w-4 h-4 text-[var(--color-hot-red)]" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Global Agreement</span>
            </div>
            <h1 
              className="font-[var(--font-orbitron)] text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 glitch"
              data-text="TERMS OF SERVICE"
            >
              Terms Of <span className="text-[var(--color-hot-red)]">Service</span>
            </h1>
            <p className="font-[var(--font-montserrat)] text-gray-400 text-sm md:text-base uppercase tracking-widest max-w-2xl mx-auto">
              Last Updated: April 22, 2026 • Version 1.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <PerspectiveSection>
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-8 md:p-16 space-y-12">
              
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-black uppercase tracking-wide">
                    1. Agreement
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  By accessing and using the services of Ideas Assemble, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-red-50 text-[var(--color-hot-red)]">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-black uppercase tracking-wide">
                    2. Service Delivery
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed mb-4">
                  Ideas Assemble provides high-end design, branding, and digital marketing services. While we strive for perfection in every project:
                </p>
                <ul className="list-disc list-inside space-y-3 font-[var(--font-montserrat)] text-gray-600 ml-4">
                  <li>Delivery timelines are estimates and may vary based on project complexity.</li>
                  <li>Final deliverables will be provided after full project payment.</li>
                  <li>Clients are responsible for providing clear and timely feedback.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 text-[var(--color-arc-blue)]">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-black uppercase tracking-wide">
                    3. Ownership & Copyright
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  Upon completion of the project and receipt of full payment, the client will hold full ownership of the final design deliverables. Ideas Assemble reserves the right to showcase the completed work in our portfolio for promotional purposes unless otherwise agreed in writing.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gray-50 text-gray-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-black uppercase tracking-wide">
                    4. Revisions
                  </h2>
                </div>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  Specific revision counts are outlined in each service tier. Revisions beyond the included count may be subject to additional fees. A revision is defined as a minor adjustment to the chosen design concept.
                </p>
              </motion.div>

              <div className="pt-12 border-t border-gray-100 text-center">
                <p className="font-[var(--font-montserrat)] text-sm text-gray-400">
                  Usage of our services constitutes acceptance of these terms. For enterprise contracts, please contact <span className="text-black font-bold">ideasassemble1@gmail.com</span>
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
