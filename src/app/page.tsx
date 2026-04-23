"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, animate, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import {
  Zap,
  ChevronRight,
  Pen,
  Globe,
  Film,
  Palette,
  ShoppingCart,
  Package,
  Fingerprint,
  Clock,
  Briefcase,
  HeartHandshake,
  Users,
  Store,
  Star,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Play,
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

function Counter({ from, to, suffix = "+" }: { from: number; to: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const controls = animate(from, to, {
      duration: 3,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [from, to, started]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}

const services = [
  { icon: <Pen className="w-7 h-7" />, title: "Logo Design", desc: "Timeless visual identities that establish your brand as an industry leader.", href: "/logo-design" },
  { icon: <Globe className="w-7 h-7" />, title: "Website Design", desc: "Responsive, high-performance websites that convert visitors into customers.", href: "/website-design" },
  { icon: <Film className="w-7 h-7" />, title: "Animation", desc: "Engaging 2D/3D explainer videos and motion graphics that captivate audiences.", href: "/animation" },
  { icon: <Palette className="w-7 h-7" />, title: "Brand Identity", desc: "Cohesive brand identities that build trust, loyalty, and recognition.", href: "/brand" },
  { icon: <ShoppingCart className="w-7 h-7" />, title: "Amazon Private Label", desc: "Data-driven strategies to dominate the world's largest marketplace.", href: "/amazon-private-label" },
  { icon: <Package className="w-7 h-7" />, title: "Amazon Wholesale", desc: "High-volume distribution with product sourcing and logistics management.", href: "/amazon-wholesale" },
];

const whyUsCards = [
  { icon: <Fingerprint className="w-8 h-8" />, title: "Unique & Exclusive Designs", desc: "We create timeless identities that establish your brand as an industry leader. Our detail-oriented designers project your brand smartly to the target audience." },
  { icon: <Clock className="w-8 h-8" />, title: "Professionalism with Timeliness", desc: "With over 15+ years in the creative design industry, we deliver exceptional services worldwide with strict professionalism and rapid turnaround." },
  { icon: <Briefcase className="w-8 h-8" />, title: "Highly Diversified Portfolio", desc: "We take pride in working with businesses ranging from high-tech startups to multinational corporations, creating multifaceted designs that outshine competitors." },
  { icon: <HeartHandshake className="w-8 h-8" />, title: "Guaranteed Satisfaction", desc: "We strive for a 100% satisfaction rate. Our support specialists are available around the clock to handle technical queries with utmost determination." },
  { icon: <Users className="w-8 h-8" />, title: "In-house Creative Team", desc: "Our well-versed designers work tirelessly on each project to ensure your brand gets noticed with real-time results while elevating your customer base." },
  { icon: <Store className="w-8 h-8" />, title: "One Stop Shop for Your Brand", desc: "From logo assembly to web architecture and social media campaigns, we provide end-to-end digital solutions under one roof." },
];

/**
 * VIDEO TESTIMONIALS CONFIGURATION
 * 1. Place your video files in the 'public/testimonials' folder.
 * 2. Name them exactly as shown below (e.g., test1.mp4, test2.mp4, test3.mp4).
 * 3. Any resolution/size will be automatically cropped to fit the cinematic 16:9 frame.
 */
const videoTestimonials = [
  { 
    id: 1,
    videoPath: "/testimonials/test1.mp4",
    title: "Project Transformation",
    client: "Sarah Johnson",
    role: "CEO, TechStart Inc."
  },
  { 
    id: 2,
    videoPath: "/testimonials/test2.mp4",
    title: "Brand Identity Success",
    client: "Michael Chen",
    role: "Founder, DesignHub"
  },
  { 
    id: 3,
    videoPath: "/testimonials/test3.mp4",
    title: "Digital Scaling",
    client: "Emma Rodriguez",
    role: "Marketing Director, GlobalCorp"
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yHeading = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_pc7iapo";
    const TEMPLATE_ID = "template_0jn4ccf";
    const PUBLIC_KEY = "X_E0vJghlawo1saFC";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Submission failed. Please try again or contact us via WhatsApp.");
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity: opacityHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
            alt="Digital Branding"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </motion.div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] as const }}
            style={{ y: yHeading, opacity: opacityHero }}
          >
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-6xl lg:text-8xl font-black mb-6 uppercase tracking-tighter flex justify-center gap-x-[0.2em] relative">
              IDEAS <span className="text-[var(--color-arc-blue)]">ASSEMBLE</span>
            </h1>
            <motion.p 
              style={{ y: yText }}
              className="font-[var(--font-montserrat)] text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Forging high-performance digital identities.
            </motion.p>
            <MagneticButton 
              href="/build"
              className="bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-8 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm flex items-center gap-3"
            >
              Initialize Project <Zap className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <PerspectiveSection>
        <section id="about" className="py-24 relative z-10 bg-white border-y border-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6 text-black">
                  About <span className="text-[var(--color-arc-blue)]">Us</span>
                </h2>
                <div className="w-24 h-1 bg-[var(--color-arc-blue)] mb-8" />
                <p className="font-[var(--font-montserrat)] text-gray-700 leading-relaxed mb-6">
                  We bring an interactive approach to our custom designs. Our design specialists strive to create professional solutions for your brand. With over 15+ years of working experience with genius entrepreneurs and multinational ventures.
                </p>
                <p className="font-[var(--font-montserrat)] text-gray-600 leading-relaxed">
                  Tell us your need and book a free design consultation now to get personalized services for your brand in real time.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <ThreeDCard>
                  <div className="neon-border rounded-2xl overflow-hidden aspect-video">
                    <div className="neon-content w-full h-full">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Our Team"
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* ═══════════ STATS ═══════════ */}
      <section className="py-16 relative z-10 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Projects Delivered", value: 500 },
              { label: "Happy Clients", value: 350 },
              { label: "Satisfaction Rate", value: 100, suffix: "%" },
              { label: "Years Experience", value: 15 },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                <div className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[var(--color-arc-blue)] mb-2">
                  <Counter from={0} to={stat.value} suffix={stat.suffix || "+"} />
                </div>
                <div className="font-[var(--font-montserrat)] text-xs text-gray-600 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
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
                Our <span className="text-[var(--color-arc-blue)]">Services</span>
              </h2>
              <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <ThreeDCard className="h-full">
                    <Link href={service.href} className="block h-full">
                      <div className="neon-border group h-full">
                        <div className="neon-content p-8 h-full flex flex-col">
                          <div className="mb-6 p-4 rounded-xl bg-gray-100 w-fit text-[var(--color-arc-blue)] group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h3 className="font-[var(--font-orbitron)] text-lg font-bold mb-3 uppercase tracking-wide text-black group-hover:text-[var(--color-arc-blue)] transition-colors">
                            {service.title}
                          </h3>
                          <p className="font-[var(--font-montserrat)] text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {service.desc}
                          </p>
                          <div className="self-start text-[var(--color-brand-green)] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ThreeDCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* ═══════════ WHY US ═══════════ */}
      <PerspectiveSection>
        <section id="why-us" className="py-24 relative z-10 bg-gray-50 border-y border-gray-100">
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

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <PerspectiveSection>
        <section id="testimonials" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
                Client <span className="text-[var(--color-arc-blue)]">Testimonials</span>
              </h2>
              <p className="font-[var(--font-montserrat)] text-gray-600 mt-4">
                See what our clients say about their experience working with us
              </p>
              <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto mt-4" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {videoTestimonials.map((v, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <ThreeDCard className="h-full">
                    <div className="glass-pill overflow-hidden rounded-[2rem] border border-gray-100 hover:border-[var(--color-arc-blue)]/20 transition-all duration-500 h-full group bg-white shadow-xl">
                      {/* Video Thumbnail / Player */}
                      <div className="relative aspect-video overflow-hidden bg-gray-900">
                        <video
                          src={v.videoPath}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          onError={(e) => {
                            // Hide the video element if it fails to load
                            e.currentTarget.style.display = 'none';
                            // Show a message or fallback
                            const parent = e.currentTarget.parentElement;
                            if (parent && !parent.querySelector('.video-fallback')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'video-fallback absolute inset-0 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm text-[10px] text-gray-400 uppercase font-bold tracking-widest text-center px-4';
                              fallback.innerHTML = 'Video content pending...<br/>(Upload to /testimonials)';
                              parent.appendChild(fallback);
                            }
                          }}
                          onMouseEnter={(e) => {
                            const playPromise = e.currentTarget.play();
                            if (playPromise !== undefined) {
                              playPromise.catch(() => {
                                // Ignore error
                              });
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:opacity-0 transition-all duration-300">
                            <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
                          </div>
                        </div>
                        {/* Fallback info when video is hovered */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white uppercase tracking-widest font-bold">
                          Hovering: Preview Active
                        </div>
                      </div>

                      {/* Client Info */}
                      <div className="p-8">
                        <h4 className="font-[var(--font-orbitron)] text-sm font-bold uppercase tracking-wider text-[var(--color-arc-blue)] mb-2">
                          {v.title}
                        </h4>
                        <div className="font-[var(--font-orbitron)] text-lg font-black text-black uppercase tracking-tight mb-1">
                          {v.client}
                        </div>
                        <div className="font-[var(--font-montserrat)] text-xs text-gray-500 font-medium">
                          {v.role}
                        </div>
                      </div>
                    </div>
                  </ThreeDCard>
                </motion.div>
              ))}
            </motion.div>

            {/* See More Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <MagneticButton 
                href="/portfolio"
                className="bg-white border-2 border-gray-100 hover:border-[var(--color-arc-blue)] text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-xs flex items-center gap-3 mx-auto transition-all"
              >
                See More Success Stories <ChevronRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="py-24 relative z-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-black">
              Initialize <span className="text-[var(--color-arc-blue)]">Connection</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Full Name"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                      <input
                        type="email"
                        name="reply_to"
                        placeholder="Email Address"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[var(--color-arc-blue)]" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-4 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 resize-none font-[var(--font-montserrat)]"
                    />
                  </div>
                  <div className="text-center">
                    <MagneticButton 
                      type="submit" 
                      disabled={loading}
                      className={`bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {loading ? "Sending..." : <>Send Transmission <Send className="w-4 h-4" /></>}
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-[var(--font-orbitron)] text-2xl font-bold uppercase text-black mb-4">Transmission <span className="text-green-500">Received</span></h3>
                  <p className="font-[var(--font-montserrat)] text-gray-600 max-w-sm mx-auto mb-6">
                    Your connection has been initialized. We will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
