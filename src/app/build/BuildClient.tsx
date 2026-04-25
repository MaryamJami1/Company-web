"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import ThreeDScene from "@/components/ThreeDScene";
import PerspectiveSection from "@/components/PerspectiveSection";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Zap,
  MessageCircle,
  Mail as MailIcon,
  Phone as PhoneIcon,
  ChevronRight,
  Sparkles,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

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

export default function BuildTodayPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_pc7iapo";
    const TEMPLATE_ID = "template_0jn4ccf";
    const PUBLIC_KEY = "X_E0vJghlawo1saFC";

    const form = e.currentTarget;
    const hiddenPhone = form.elements.namedItem("phone_number") as HTMLInputElement;
    if (hiddenPhone) {
      hiddenPhone.value = phone;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
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

  const contactOptions = [
    {
      icon: <MessageCircle className="w-5 md:w-6 h-5 md:h-6" />,
      label: "WhatsApp",
      value: "+1 (512) 543-0367",
      href: "https://wa.me/15125430367",
      color: "hover:text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: <MailIcon className="w-5 md:w-6 h-5 md:h-6" />,
      label: "Email",
      value: "ideasassemble1@gmail.com",
      href: "mailto:ideasassemble1@gmail.com",
      color: "hover:text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: <PhoneIcon className="w-5 md:w-6 h-5 md:h-6" />,
      label: "Direct Call",
      value: "+1 (512) 543-0367",
      href: "tel:+15125430367",
      color: "hover:text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-black bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
        <ThreeDScene />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-white z-10" />
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            alt="Build Together"
            fill
            priority
            className="object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 md:mb-6">
              <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Innovation Hub</span>
            </div>
            <h1
              className="font-[var(--font-orbitron)] text-4xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 uppercase tracking-tighter text-white leading-tight glitch"
              data-text="LET'S BUILD TODAY"
            >
              Let&apos;s Build <span className="text-[var(--color-hot-red)]">Today</span>
            </h1>
            <p className="font-[var(--font-montserrat)] text-sm md:text-xl text-gray-300 max-w-2xl mx-auto uppercase tracking-[0.1em] md:tracking-[0.2em] leading-relaxed">
              Transforming your vision into a digital masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-20 -mt-10 md:-mt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 items-center lg:items-start justify-center">

            {/* Left Column: Direct Contact & Benefits */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8 max-w-md w-full mx-auto lg:max-w-none">
              <PerspectiveSection>
                <div className="glass-pill p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8 md:space-y-10 bg-white">
                  <div className="text-center lg:text-left">
                    <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold uppercase tracking-wide text-black mb-3 md:mb-4">
                      Direct <span className="text-[var(--color-arc-blue)]">Connect</span>
                    </h2>
                    <p className="font-[var(--font-montserrat)] text-sm md:text-base text-gray-600 leading-relaxed">
                      Reach out to our specialists instantly through any of these platforms for real-time support.
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {contactOptions.map((opt, i) => (
                      <a
                        key={i}
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group ${opt.color}`}
                      >
                        <div className={`p-3 md:p-4 rounded-xl ${opt.bg} transition-transform group-hover:scale-110`}>
                          {opt.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-inherit mb-0.5 md:mb-1">{opt.label}</div>
                          <div className="text-sm md:text-lg font-bold text-black group-hover:text-inherit truncate">{opt.value}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 hidden md:block" />
                      </a>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500">Free Consult</span>
                    </div>
                  </div>
                </div>
              </PerspectiveSection>

              {/* Trust Badges */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-3 gap-3"
              >
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Secure" },
                  { icon: <Zap className="w-5 h-5" />, label: "Fast" },
                  { icon: <Rocket className="w-5 h-5" />, label: "Scalable" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                    <div className="text-[var(--color-arc-blue)] flex justify-center mb-1">{item.icon}</div>
                    <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-7 max-w-md w-full mx-auto lg:max-w-none">
              <PerspectiveSection>
                <div className="neon-border rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl overflow-hidden">
                  <div className="neon-content p-6 md:p-10 bg-white">
                    <AnimatePresence mode="wait">
                      {!submitted ? (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="text-center lg:text-left">
                            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold uppercase tracking-wide text-black mb-2">
                              Project <span className="text-[var(--color-hot-red)]">Brief</span>
                            </h2>
                            <p className="font-[var(--font-montserrat)] text-[10px] md:text-sm text-gray-600 mb-8 md:mb-10 uppercase tracking-widest">
                              Initialize your vision into reality.
                            </p>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-left">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block ml-1">Your Name</label>
                                <div className="relative">
                                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                  <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 md:py-3 text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-all"
                                  />
                                </div>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block ml-1">Email Address</label>
                                <div className="relative">
                                  <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                  <input
                                    type="email"
                                    name="reply_to"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 md:py-3 text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-all"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block ml-1">Phone Number</label>
                              <div className="phone-light">
                                <PhoneInput
                                  international
                                  defaultCountry="US"
                                  placeholder="Enter your phone number"
                                  value={phone}
                                  onChange={(value) => setPhone(value || "")}
                                  className="w-full font-[var(--font-montserrat)]"
                                />
                              </div>
                            </div>
                            <input type="hidden" name="phone_number" value={phone} />

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block ml-1">Project Type</label>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {["Logo", "Web", "Animation", "Branding", "E-commerce", "Other"].map((type) => (
                                  <label key={type} className="relative cursor-pointer">
                                    <input type="radio" name="project_type" value={type} className="peer sr-only" />
                                    <div className="p-2 text-center border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-wider text-gray-500 peer-checked:bg-[var(--color-arc-blue)] peer-checked:text-white peer-checked:border-[var(--color-arc-blue)] transition-all">
                                      {type}
                                    </div>
                                  </label>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block ml-1">Description</label>
                              <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-300" />
                                <textarea
                                  rows={4}
                                  name="message"
                                  required
                                  placeholder="What are your goals?"
                                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-4 text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-all resize-none"
                                />
                              </div>
                            </div>

                            <div className="pt-2">
                              <MagneticButton
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-black hover:bg-[var(--color-hot-red)] text-white py-4 rounded-xl font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-3 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                              >
                                {loading ? "Initializing..." : <>Launch Project <Send className="w-4 h-4" /></>}
                              </MagneticButton>
                            </div>
                          </form>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12 md:py-20 space-y-4 md:space-y-6"
                        >
                          <div className="w-16 md:w-24 h-16 md:h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 md:w-12 h-8 md:h-12 text-green-500" />
                          </div>
                          <h2 className="font-[var(--font-orbitron)] text-2xl md:text-4xl font-black uppercase text-black">Inquiry <span className="text-green-500">Sent</span></h2>
                          <p className="font-[var(--font-montserrat)] text-xs md:text-base text-gray-600 max-w-sm mx-auto leading-relaxed">
                            Transmission successful. Our creative experts will contact you shortly.
                          </p>
                          <button
                            onClick={() => setSubmitted(false)}
                            className="text-[var(--color-arc-blue)] font-bold uppercase tracking-widest text-[10px] hover:underline"
                          >
                            Send Another Request
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </PerspectiveSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
