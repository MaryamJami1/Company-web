"use client";

import { FormEvent, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Globe,
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

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "1001 S Main ST #12594 Kalispell, MT 59901-1498" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (516) 309-0972" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "support@topstier.co" },
  { icon: <Clock className="w-5 h-5" />, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
  { icon: <Globe className="w-5 h-5" />, label: "Website", value: "www.topstier.co" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasFreeDomainOffer, setHasFreeDomainOffer] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone_number: "",
    project_type: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setHasFreeDomainOffer(params.get("offer") === "freeDomain");
      setFormData({
        from_name: params.get("name") || "",
        reply_to: params.get("email") || "",
        phone_number: params.get("phone") || "",
        project_type: params.get("offer") === "freeDomain" ? "website" : "",
        message: "",
      });
    }
  }, []);

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

  return (
    <main className="min-h-screen relative selection:bg-[var(--color-arc-blue)] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/85 z-10" />
          <Image
            src="/bg.jpeg"
            alt="Contact Us"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
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
              data-text="CONTACT US"
            >
              CONTACT US
            </h1>
            <p className="font-[var(--font-montserrat)] text-lg md:text-xl text-gray-300 max-w-xl mx-auto uppercase tracking-widest">
              Initialize your connection with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-5 gap-16"
          >
            {/* Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {hasFreeDomainOffer && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 bg-gradient-to-r from-[var(--color-arc-blue)] to-[var(--color-brand-green)] text-white p-4 rounded-xl flex items-start gap-3 border border-white/20"
                      >
                        <span className="text-xl">ÃƒÂ°Ã…Â¸Ã…Â½Ã¢â‚¬Â°</span>
                        <div>
                          <p className="font-bold text-sm mb-1">Free Domain Offer Active</p>
                          <p className="text-xs opacity-90">Get 1 year of premium .com domain FREE with your website project.</p>
                        </div>
                      </motion.div>
                    )}
                    <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2 text-white">
                      Send Us A <span className="text-[var(--color-arc-blue)]">Message</span>
                    </h2>
                    <p className="font-[var(--font-montserrat)] text-gray-600 text-sm mb-8">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                          <input
                            type="text"
                            name="from_name"
                            placeholder="Full Name"
                            required
                            value={formData.from_name}
                            onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                            className="w-full bg-black border border-gray-200 rounded-xl px-12 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                          <input
                            type="email"
                            name="reply_to"
                            placeholder="Email Address"
                            required
                            value={formData.reply_to}
                            onChange={(e) => setFormData({ ...formData, reply_to: e.target.value })}
                            className="w-full bg-black border border-gray-200 rounded-xl px-12 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                          <input
                            type="tel"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            className="w-full bg-black border border-gray-200 rounded-xl px-12 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)]"
                          />
                        </div>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-arc-blue)]" />
                          <select 
                            name="project_type"
                            value={formData.project_type}
                            onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                            className="w-full bg-black border border-gray-200 rounded-xl px-12 py-4 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 font-[var(--font-montserrat)] appearance-none"
                          >
                            <option value="">Select Service</option>
                            <option value="logo">Logo Design</option>
                            <option value="website">Website Design</option>
                            <option value="animation">Animation</option>
                            <option value="brand">Brand Identity</option>
                            <option value="ecommerce">E-commerce Solutions</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[var(--color-arc-blue)]" />
                        <textarea
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-black border border-gray-200 rounded-xl px-12 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-arc-blue)] focus:shadow-[0_0_15px_rgba(0,210,255,0.1) transition-all duration-300 resize-none font-[var(--font-montserrat)]"
                        />
                      </div>
                      <MagneticButton 
                        type="submit" 
                        disabled={loading}
                        className={`bg-[var(--color-hot-red)] hover:bg-[#CC5500] text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? "Sending..." : <>Send Transmission <Send className="w-4 h-4" /></>}
                      </MagneticButton>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 bg-black rounded-[2rem] border border-white/10 shadow-inner"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-[var(--font-orbitron)] text-3xl font-bold uppercase text-white mb-4">Transmission <span className="text-green-500">Received</span></h3>
                    <p className="font-[var(--font-montserrat)] text-gray-600 max-w-sm mx-auto mb-8">
                      Your connection has been initialized. Our specialists will reach out shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2 text-white">
                Contact <span className="text-[var(--color-brand-green)]">Info</span>
              </h2>
              <p className="font-[var(--font-montserrat)] text-gray-600 text-sm mb-8">
                Reach us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4 glass-pill p-5 rounded-2xl border border-white/10 hover:border-[var(--color-arc-blue)]/20 transition-colors duration-500">
                    <div className="text-[var(--color-arc-blue)] mt-0.5 shrink-0">{info.icon}</div>
                    <div>
                      <div className="font-[var(--font-orbitron)] text-xs font-bold uppercase tracking-widest text-white mb-1">{info.label}</div>
                      <div className="font-[var(--font-montserrat)] text-sm text-gray-600">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 neon-border rounded-2xl overflow-hidden aspect-video">
                <div className="neon-content w-full h-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.798938577821!2d-114.31231398847845!3d48.18884284747143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650c2d7daf13f%3A0x97439edca6cc90e5!2s1001%20S%20Main%20St%2C%20Kalispell%2C%20MT%2059901%2C%20USA!5e1!3m2!1sen!2s!4v1776890356416!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
