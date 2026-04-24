"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import Image from "next/image";
import {
  Fingerprint,
  Clock,
  Briefcase,
  HeartHandshake,
  Users,
  Store,
  Target,
  Eye,
  Rocket,
  ChevronRight,
} from "lucide-react";
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

const whyUsCards = [
  { icon: <Fingerprint className="w-8 h-8" />, title: "Unique & Exclusive Designs", desc: "We create timeless identities that establish your brand as an industry leader. Our detail-oriented designers project your brand smartly to the target audience." },
  { icon: <Clock className="w-8 h-8" />, title: "Professionalism with Timeliness", desc: "With over 15+ years in the creative design industry, we deliver exceptional services worldwide with strict professionalism and rapid turnaround." },
  { icon: <Briefcase className="w-8 h-8" />, title: "Highly Diversified Portfolio", desc: "We take pride in working with businesses ranging from high-tech startups to multinational corporations, creating multifaceted designs that outshine competitors." },
  { icon: <HeartHandshake className="w-8 h-8" />, title: "Guaranteed Satisfaction", desc: "We strive for a 100% satisfaction rate. Our support specialists are available around the clock to handle technical queries with utmost determination." },
  { icon: <Users className="w-8 h-8" />, title: "In-house Creative Team", desc: "Our well-versed designers work tirelessly on each project to ensure your brand gets noticed with real-time results while elevating your customer base." },
  { icon: <Store className="w-8 h-8" />, title: "One Stop Shop for Your Brand", desc: "From logo assembly to web architecture and social media campaigns, we provide end-to-end digital solutions under one roof." },
];

const timeline = [
  { year: "2008", title: "Foundation", desc: "Ideas Assemble was founded with a vision to transform the digital design landscape and empower brands worldwide." },
  { year: "2012", title: "Global Expansion", desc: "Expanded our services internationally, partnering with multinational ventures across North America and Europe." },
  { year: "2016", title: "E-commerce Scaling Launch", desc: "Introduced our dedicated e-commerce scaling services, helping global brands dominate multi-platform marketplaces." },
  { year: "2020", title: "500+ Projects Milestone", desc: "Crossed the 500+ project milestone, serving startups to Fortune 500 companies with our in-house creative team." },
  { year: "2024", title: "Innovation Hub", desc: "Launched our Innovation Hub, combining AI-powered design tools with creative expertise for next-gen brand solutions." },
];

// const team = [
//   { name: "Muhammad Ali", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=face" },
//   { name: "Sarah Khan", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&crop=face" },
//   { name: "Ahmed Raza", role: "Lead Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&crop=face" },
//   { name: "Fatima Noor", role: "Brand Strategist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=face" },
//   { name: "Usman Tariq", role: "Amazon Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=face" },
//   { name: "Ayesha Malik", role: "Animation Lead", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop&crop=face" },
// ];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="About Us"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] as const }}
          >
            <h1
              className="font-[var(--font-orbitron)] text-4xl md:text-6xl lg:text-8xl font-black mb-4 uppercase glitch tracking-tighter"
              data-text="ABOUT US"
            >
              ABOUT <span className="text-[var(--color-arc-blue)]">US</span>
            </h1>
            <p className="font-[var(--font-montserrat)] text-lg md:text-xl text-gray-300 max-w-xl mx-auto uppercase tracking-widest">
              The story behind the innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <PerspectiveSection>
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 text-black">
                  Who We <span className="text-[var(--color-arc-blue)]">Are</span>
                </h2>
                <div className="w-24 h-1 bg-[var(--color-arc-blue)] mb-8" />
                <p className="font-[var(--font-montserrat)] text-gray-700 leading-relaxed mb-6">
                  We bring an interactive approach to our custom designs. Our design specialists strive to create professional solutions for your brand. With over 15+ years of working experience with genius entrepreneurs and multinational ventures.
                </p>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed mb-8">
                  Tell us your need and book a free design consultation now to get personalized services for your logo in real time.
                </p>
                <MagneticButton 
                  href="/build"
                  className="bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2"
                >
                  Book Free Consultation <ChevronRight className="w-4 h-4" />
                </MagneticButton>
              </motion.div>
              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Target className="w-6 h-6" />, title: "Our Mission", text: "To empower businesses worldwide with cutting-edge digital solutions that drive growth, build trust, and create lasting impressions." },
                  { icon: <Eye className="w-6 h-6" />, title: "Our Vision", text: "To be the world's most trusted digital branding agency, where every idea is assembled into reality." },
                  { icon: <Rocket className="w-6 h-6" />, title: "Our Values", text: "Innovation, integrity, and client satisfaction are the pillars of everything we do. We deliver excellence, every time." },
                ].map((item, i) => (
                  <ThreeDCard key={i}>
                    <div className="glass-pill p-6 rounded-2xl border border-gray-100 flex gap-4 h-full">
                      <div className="text-[var(--color-arc-blue)] mt-1 shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-[var(--font-orbitron)] text-sm font-bold uppercase tracking-wider text-black mb-2">{item.title}</h3>
                        <p className="font-[var(--font-montserrat)] text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </ThreeDCard>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* Timeline */}
      <PerspectiveSection>
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
                Our <span className="text-[var(--color-brand-green)]">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-[var(--color-brand-green)] mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-10 rounded-full bg-[var(--color-arc-blue)]/10 border border-[var(--color-arc-blue)]/30 flex items-center justify-center font-[var(--font-orbitron)] text-xs font-bold text-[var(--color-arc-blue)]">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full bg-[var(--color-arc-blue)]/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-[var(--font-orbitron)] text-lg font-bold uppercase tracking-wide text-black mb-2">{item.title}</h3>
                    <p className="font-[var(--font-montserrat)] text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* Why Us */}
      <PerspectiveSection>
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
                Why <span className="text-[var(--color-brand-green)]">Choose Us</span>
              </h2>
              <div className="w-24 h-1 bg-[var(--color-brand-green)] mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {whyUsCards.map((card, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <ThreeDCard className="h-full">
                    <div className="glass-pill p-8 rounded-2xl border border-gray-100 hover:border-[var(--color-brand-green)]/30 transition-colors duration-500 group h-full">
                      <div className="mb-5 text-[var(--color-brand-green)] group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                      <h3 className="font-[var(--font-orbitron)] text-base font-bold mb-3 uppercase tracking-wide text-black">
                        {card.title}
                      </h3>
                      <p className="font-[var(--font-montserrat)] text-gray-600 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </ThreeDCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* Team */}
      {/* <section className="py-24 relative z-10 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
              Our <span className="text-[var(--color-arc-blue)]">Team</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--color-arc-blue)]/50 transition-colors duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-[var(--font-orbitron)] text-xs font-bold uppercase tracking-wider text-black">{member.name}</h3>
                <p className="font-[var(--font-montserrat)] text-xs text-[var(--color-arc-blue)] mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 text-black">
              Ready to <span className="text-[var(--color-hot-red)]">Build Together</span>?
            </h2>
            <p className="font-[var(--font-montserrat)] text-gray-600 mb-8 max-w-lg mx-auto">
              Book a free consultation and let our expert team craft the perfect digital solution for your brand.
            </p>
            <MagneticButton 
              href="/build"
              className="bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
