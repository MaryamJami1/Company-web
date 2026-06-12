"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, animate, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
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
  Minus,
  ExternalLink,
} from "lucide-react";
import ThreeDScene from "@/components/ThreeDScene";
import ThreeDCard from "@/components/ThreeDCard";
import PerspectiveSection from "@/components/PerspectiveSection";
import QuickLogoForm from "@/components/QuickLogoForm";

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
  { icon: <Pen className="w-7 h-7" />, title: "Tech & Gadgets", desc: "Cutting-edge electronics and smart gadgets that keep you ahead of the curve.", href: "/products/tech" },
  { icon: <Globe className="w-7 h-7" />, title: "Home Essentials", desc: "Modern, minimalist decor and practical tools to elevate your living space.", href: "/products/home" },
  { icon: <Film className="w-7 h-7" />, title: "Lifestyle & Accessories", desc: "Trending apparel and daily accessories crafted for style and durability.", href: "/products/lifestyle" },
  { icon: <Palette className="w-7 h-7" />, title: "Premium Quality", desc: "Every item is strictly vetted to ensure it meets our top-tier quality standards.", href: "/quality" },
  { icon: <ShoppingCart className="w-7 h-7" />, title: "Fast & Free Shipping", desc: "Get your favorite products delivered quickly and reliably straight to your doorstep.", href: "/shipping" },
  { icon: <Zap className="w-7 h-7" />, title: "24/7 Support", desc: "Our dedicated customer service team is always here to assist you.", href: "/support" },
];

const whyUsCards = [
  { icon: <Fingerprint className="w-8 h-8" />, title: "Curated & Exclusive Trends", desc: "We constantly scour the market to bring you the most unique and trending products before anyone else." },
  { icon: <Clock className="w-8 h-8" />, title: "Lightning-Fast Delivery", desc: "We know you want your items fast. Our optimized logistics ensure your orders arrive securely and on time." },
  { icon: <Briefcase className="w-8 h-8" />, title: "Premium Yet Affordable", desc: "Experience the luxury of high-end lifestyle products without the premium price markup." },
  { icon: <HeartHandshake className="w-8 h-8" />, title: "100% Satisfaction Guarantee", desc: "Your happiness is our priority. Enjoy hassle-free returns and dedicated support on every single order." },
  { icon: <Users className="w-8 h-8" />, title: "Secure & Trusted Checkout", desc: "Shop with confidence. Our platform uses state-of-the-art encryption to keep your data completely safe." },
  { icon: <Store className="w-8 h-8" />, title: "Everything You Need in One Place", desc: "From smart gadgets to elegant home decor, Topstier is your ultimate destination for modern living." },
];

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

const faqs = [
  {
    question: "What kind of products does Topstier sell?",
    answer: "We offer a highly curated selection of modern lifestyle products, including cutting-edge tech gadgets, smart home essentials, and premium daily accessories."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days domestically. We process all orders within 24 hours to ensure your items arrive as quickly as possible."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship globally to most countries. International shipping times range from 7-14 business days depending on your location and local customs."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a hassle-free 30-day return policy. If you are not 100% satisfied with your purchase, simply contact our support team to initiate a return or exchange."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive an email with a tracking number and a link to monitor your package's journey in real-time."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`font-[var(--font-orbitron)] text-sm md:text-base font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-[var(--color-arc-blue)]' : 'text-white group-hover:text-[var(--color-arc-blue)]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[var(--color-arc-blue)] border-[var(--color-arc-blue)] rotate-180' : 'border-gray-200 rotate-0'}`}>
          <ChevronRight className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-gray-400'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 font-[var(--font-montserrat)] text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotDimensions, setChatbotDimensions] = useState<{ width: string | number, height: string | number }>({ width: 400, height: 600 });

  useEffect(() => {
    setMounted(true);
    const updateChatbotDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 640) {
        setChatbotDimensions({ width: 'calc(100vw - 32px)', height: 'min(600px, 80vh)' });
      } else if (width < 1024) {
        setChatbotDimensions({ width: 380, height: 550 });
      } else {
        setChatbotDimensions({ width: 400, height: 650 });
      }
    };
    updateChatbotDimensions();
    window.addEventListener('resize', updateChatbotDimensions);
    return () => window.removeEventListener('resize', updateChatbotDimensions);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const SERVICE_ID = "service_pc7iapo";
    const TEMPLATE_ID = "template_0jn4ccf";
    const PUBLIC_KEY = "X_E0vJghlawo1saFC";
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => { setSubmitted(true); setLoading(false); }, (error) => {
        console.error("FAILED...", error.text);
        alert("Submission failed. Please try again.");
        setLoading(false);
      });
  };

  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-white">
      <Navbar />

      <section id="home" className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-0 md:pb-0">
        <motion.div style={{ y, opacity: opacityHero }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image src="/bg.jpeg" alt="Digital Branding" fill priority className="object-cover object-center opacity-40" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-4 md:mt-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] as const }} className="w-full flex flex-col items-center">
            <QuickLogoForm />
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-6xl lg:text-8xl font-black mb-6 uppercase tracking-tighter glitch mt-8" data-text="TOPSTIER">
              TOPS<span className="text-[var(--color-arc-blue)]">TIER</span>
            </h1>
            <motion.p className="font-[var(--font-montserrat)] text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Modern, trending, and high-quality products curated for a premium lifestyle. Fast delivery. Affordable luxury.
            </motion.p>
            <MagneticButton href="/build" className="bg-[var(--color-hot-red)] hover:bg-[#CC5500] text-white px-8 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm flex items-center gap-3">
              Let&apos;s Build Today <ChevronRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <PerspectiveSection>
        <section id="about" className="py-24 relative z-10 bg-black border-y border-white/10">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6 text-white">
                  The Topstier <span className="text-[var(--color-arc-blue)]">Difference</span>
                </h2>
                <div className="w-24 h-1 bg-[var(--color-arc-blue)] mb-8" />
                <p className="font-[var(--font-montserrat)] text-gray-500 leading-relaxed mb-6">
                  At Topstier, we believe that premium quality shouldn't come with an outrageous price tag. We source the most modern, trending, and high-quality lifestyle products from around the world.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <ThreeDCard>
                  <div className="neon-border rounded-2xl overflow-hidden aspect-video">
                    <div className="neon-content w-full h-full">
                      <Image src="/bg.jpeg" alt="Our Team" fill className="object-cover opacity-70" />
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PerspectiveSection>

      <section className="py-16 relative z-10 border-b border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Products Delivered", value: 500 },
              { label: "Satisfied Customers", value: 350 },
              { label: "Quality Guarantee", value: 100, suffix: "%" },
              { label: "Trending Brands", value: 15 },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                <div className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[var(--color-arc-blue)] mb-2">
                  <Counter from={0} to={stat.value} suffix={stat.suffix || "+"} />
                </div>
                <div className="font-[var(--font-montserrat)] text-xs text-gray-600 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PerspectiveSection>
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-16 text-center">
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-white">
                Our <span className="text-[var(--color-arc-blue)]">Categories</span>
              </h2>
              <div className="w-24 h-1 bg-[var(--color-arc-blue)] mx-auto" />
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <ThreeDCard className="h-full">
                    <Link href={service.href} className="block h-full">
                      <div className="glass-pill p-8 rounded-2xl border border-white/10 hover:border-[var(--color-arc-blue)]/30 transition-colors duration-500 group h-full flex flex-col">
                        <div className="mb-5 text-[var(--color-arc-blue)] group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                        <h3 className="font-[var(--font-orbitron)] text-lg font-bold mb-3 uppercase tracking-wide text-white group-hover:text-[var(--color-arc-blue)] transition-colors">{service.title}</h3>
                        <p className="font-[var(--font-montserrat)] text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                        <div className="self-start text-[var(--color-arc-blue)] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                          View Collection <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      <section id="testimonials" className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-16 text-white">
            Customer <span className="text-[var(--color-arc-blue)]">Reviews</span>
          </h2>
          <MagneticButton href="/portfolio" className="bg-black border border-white/10 hover:bg-[#CC5500] text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-xs flex items-center gap-3 mx-auto transition-all">
            See More Reviews <ChevronRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </section>

      <section id="contact" className="py-24 relative z-10 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-12 text-center text-white">
              Get In <span className="text-[var(--color-arc-blue)]">Touch</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="from_name" placeholder="Full Name" required className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[var(--color-arc-blue)] outline-none transition-all" />
              <input type="email" name="reply_to" placeholder="Email Address" required className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[var(--color-arc-blue)] outline-none transition-all" />
              <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:border-[var(--color-arc-blue)] outline-none transition-all resize-none" />
              <div className="text-center">
                <MagneticButton type="submit" disabled={loading} className="bg-[var(--color-hot-red)] hover:bg-[#CC5500] text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm flex items-center gap-3 mx-auto transition-all">
                  {loading ? "Sending..." : "Send Message"}
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setChatbotOpen(!chatbotOpen)} className="w-14 h-14 rounded-full bg-[var(--color-hot-red)] hover:bg-[#CC5500] text-white shadow-2xl flex items-center justify-center transition-all">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      <Footer />
    </main>
  );
}
