"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { X, ChevronRight, ChevronLeft, Send, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function LogoEngineWizard() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    logoStyle: "",
    colors: "",
    additionalInfo: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && step > 0 && step < 6 && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, step, timeLeft]);

  // iOS-safe scroll lock
  useEffect(() => {
    if (isOpen) {
      const y = window.scrollY;
      document.body.dataset.scrollY = String(y);
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.background = "#000"; // prevent white flash
      if ((window as any).lenis) (window as any).lenis.stop();
    } else {
      const y = parseInt(document.body.dataset.scrollY || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, y);
      document.documentElement.style.background = ""; // restore
      if ((window as any).lenis) (window as any).lenis.start();
    }
    return () => {
      const y = parseInt(document.body.dataset.scrollY || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.background = ""; // restore
      if (y) window.scrollTo(0, y);
      if ((window as any).lenis) (window as any).lenis.start();
    };
  }, [isOpen]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `00:0${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleStart = (e: FormEvent) => {
    e.preventDefault();
    if (formData.businessName.trim()) { setIsOpen(true); setStep(1); }
  };
  const handleNext = () => setStep((p) => p + 1);
  const handlePrev = () => setStep((p) => p - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = `Business Name: ${formData.businessName}\nIndustry: ${formData.industry}\nLogo Style: ${formData.logoStyle}\nColors: ${formData.colors}\nAdditional Info: ${formData.additionalInfo}`;
    emailjs.send("service_pc7iapo", "template_0jn4ccf", {
      from_name: formData.fullName,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: msg,
    }, "X_E0vJghlawo1saFC").then(
      () => { setSubmitted(true); setLoading(false); setStep(6); },
      (err) => { console.error(err); alert("Submission failed. Please try again."); setLoading(false); }
    );
  };

  /* ── Shared classnames ─────────────────────────── */
  const stepLabel = "font-[var(--font-orbitron)] uppercase tracking-[0.2em] text-[11px] font-bold mb-2";
  const stepTitle = "font-[var(--font-orbitron)] text-white font-black uppercase text-lg sm:text-3xl md:text-5xl mb-4";
  const inputBase = "w-full bg-transparent border-b-2 border-white/20 text-white px-3 py-2 text-center text-sm sm:text-base md:text-xl focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600";
  const nextBtn = "bg-[var(--color-arc-blue)] text-black px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-[var(--font-orbitron)] text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white disabled:opacity-50 transition-all flex items-center gap-2";
  const backBtn = "text-gray-400 hover:text-white px-4 py-2.5 flex items-center gap-1.5 font-[var(--font-orbitron)] uppercase tracking-widest text-xs transition-colors";
  const navRow = "flex flex-row justify-center items-center gap-2 sm:gap-3 mt-5 sm:mt-6 w-full";

  return (
    <>
      {/* ── Banner ─── */}
      <div className="w-full max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl mb-12 shadow-[0_0_40px_rgba(0,210,255,0.1)] relative z-20 text-center">
        <h2 className="text-xl md:text-4xl font-[var(--font-orbitron)] font-bold text-white mb-2 uppercase tracking-wide">
          Online Logo Maker &amp; Custom Design Services
        </h2>
        <p className="text-gray-300 font-[var(--font-montserrat)] mb-6 text-xs md:text-base flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-arc-blue)]" />
          Get a Custom Logo Made in 02:00 minutes. Try Now
        </p>
        <form onSubmit={handleStart} className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
          <input
            type="text"
                placeholder="Enter Your Business Name"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            required
            style={{ fontSize: '16px' }}
            className="flex-grow bg-white text-black px-5 py-3.5 md:px-6 md:py-4 rounded-xl font-[var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-[var(--color-arc-blue)]"
          />
          <button type="submit" className="bg-[var(--color-arc-blue)] hover:bg-[#00b8e6] text-black font-[var(--font-orbitron)] font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-colors text-sm md:text-base w-full md:w-auto">
            Design
          </button>
        </form>
      </div>

      {/* ── Wizard Modal ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "column",
              /* iPhone safe-area */
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* bg glows */}
            <div className="fixed -top-40 -right-40 w-96 h-96 bg-[var(--color-arc-blue)]/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-[var(--color-hot-red)]/20 blur-[100px] rounded-full pointer-events-none" />

            {/* ── Top bar ── */}
            <div 
              className="flex-none flex items-center justify-between px-5 md:px-10 z-50"
              style={{ 
                backgroundColor: '#000',
                paddingTop: 'max(env(safe-area-inset-top), 16px)',
                paddingBottom: '12px',
              }}
            >
              {step < 6
                ? <div className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-sm md:text-2xl font-bold tracking-widest flex items-center gap-2">
                    <Clock className="w-4 h-4 md:w-6 md:h-6" />{formatTime(timeLeft)}
                  </div>
                : <div />}
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[var(--color-hot-red)] transition-colors p-2">
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* ── Scrollable body ── */}
            <div
              className="flex-1 relative z-10 px-4 md:px-8"
              style={{ overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {/* inner centering wrapper — min-h keeps short screens centered, tall content just flows */}
              <div className="flex flex-col items-center justify-center text-center min-h-full py-4">

                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <motion.div className="w-full max-w-lg" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <p className={`${stepLabel} text-[var(--color-arc-blue)]`}>Step 1</p>
                    <h3 className={stepTitle}>{formData.businessName}</h3>
                    <p className="text-gray-300 text-xs sm:text-base font-[var(--font-montserrat)] mb-3">
                      What is your industry or niche?
                    </p>
                    <input
                      type="text"
                      placeholder="e.g. Technology, Real Estate, Fashion..."
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      style={{ fontSize: '16px' }}
                      className={inputBase}
                    />
                    <div className={navRow}>
                      <button onClick={handleNext} disabled={!formData.industry.trim()} className={nextBtn}>
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <motion.div className="w-full max-w-lg" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <p className={`${stepLabel} text-[var(--color-arc-blue)]`}>Step 2</p>
                    <h3 className={stepTitle}>Design Preferences</h3>
                    <p className="text-gray-300 text-xs sm:text-base font-[var(--font-montserrat)] mb-3">
                      Select your preferred logo style:
                    </p>
                    <div className="grid grid-cols-3 gap-2 w-full mb-1">
                      {["Minimalist", "3D / Mascot", "Vintage", "Corporate", "Abstract", "Others"].map((s) => (
                        <div
                          key={s}
                          onClick={() => setFormData({ ...formData, logoStyle: s })}
                          className={`cursor-pointer border-2 rounded-xl py-3 px-1 transition-all font-[var(--font-montserrat)] text-center ${formData.logoStyle === s
                            ? "border-[var(--color-arc-blue)] bg-[var(--color-arc-blue)]/10 text-[var(--color-arc-blue)]"
                            : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"}`}
                        >
                          <div className="font-bold text-[10px] sm:text-xs uppercase tracking-wider leading-tight">{s}</div>
                        </div>
                      ))}
                    </div>
                    <div className={navRow}>
                      <button onClick={handlePrev} className={backBtn}><ChevronLeft className="w-4 h-4" /> Back</button>
                      <button onClick={handleNext} disabled={!formData.logoStyle} className={nextBtn}>
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3 ── */}
                {step === 3 && (
                  <motion.div className="w-full max-w-lg" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <p className={`${stepLabel} text-[var(--color-arc-blue)]`}>Step 3</p>
                    <h3 className={stepTitle}>Color Palette</h3>
                    <p className="text-gray-300 text-xs sm:text-base font-[var(--font-montserrat)] mb-3">
                      Any specific colors in mind?
                    </p>
                    <input
                      type="text"
                      placeholder="e.g. Blue and Gold, Dark Theme, Vibrant..."
                      value={formData.colors}
                      onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                      style={{ fontSize: '16px' }}
                      className={inputBase}
                    />
                    <div className={navRow}>
                      <button onClick={handlePrev} className={backBtn}><ChevronLeft className="w-4 h-4" /> Back</button>
                      <button onClick={handleNext} className={nextBtn}>
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 4 ── */}
                {step === 4 && (
                  <motion.div className="w-full max-w-lg" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <p className={`${stepLabel} text-[var(--color-arc-blue)]`}>Step 4</p>
                    <h3 className={stepTitle}>Additional Details</h3>
                    <p className="text-gray-300 text-xs sm:text-base font-[var(--font-montserrat)] mb-3">
                      Anything else we should know?
                    </p>
                    <textarea
                      placeholder="Competitors you like, specific symbols to include..."
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      style={{ fontSize: '16px' }}
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600 resize-none font-[var(--font-montserrat)]"
                    />
                    <div className={navRow}>
                      <button onClick={handlePrev} className={backBtn}><ChevronLeft className="w-4 h-4" /> Back</button>
                      <button onClick={handleNext} className={nextBtn}>
                        Final Step <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 5 ── */}
                {step === 5 && (
                  <motion.div className="w-full max-w-md" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <p className={`${stepLabel} text-[var(--color-hot-red)]`}>Final Step</p>
                    <h3 className={`${stepTitle} text-sm sm:text-2xl md:text-4xl`}>Where should we send your design?</h3>
                    <form onSubmit={handleSubmit} className="w-full space-y-3 mt-2">
                      <input
                        type="text" placeholder="Your Full Name" required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ fontSize: '16px' }}
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-[var(--font-montserrat)] text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                      />
                      <input
                        type="email" placeholder="Email Address" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ fontSize: '16px' }}
                        className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-[var(--font-montserrat)] text-sm focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                      />
                      <div className="phone-dark text-sm">
                        <PhoneInput
                          international defaultCountry="US" placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(v) => setFormData({ ...formData, phone: v || "" })}
                          className="w-full font-[var(--font-montserrat)]"
                        />
                      </div>
                      <div className={`${navRow} pt-2`}>
                        <button type="button" onClick={handlePrev} className={backBtn}><ChevronLeft className="w-4 h-4" /> Back</button>
                        <button
                          type="submit" disabled={loading}
                          className={`bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {loading ? "Processing..." : <>Finish &amp; Send <Send className="w-3.5 h-3.5" /></>}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ── STEP 6 ── */}
                {step === 6 && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="w-full max-w-sm sm:max-w-lg mx-auto bg-black/40 p-4 sm:p-6 rounded-2xl border border-white/10"
                  >
                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[var(--color-arc-blue)]/20 border-2 border-[var(--color-arc-blue)] rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                      <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-arc-blue)]" />
                    </div>
                    <h3 className="text-base sm:text-xl font-[var(--font-orbitron)] font-black text-white mb-1 uppercase tracking-wider">Thankyou ☺</h3>
                    <p className="text-[11px] sm:text-sm text-gray-300 font-[var(--font-montserrat)] mb-3">
                      Checkout our Portfolio or view our Pricing and Packages
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-left mb-4">
                      <h4 className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-xs sm:text-sm font-bold uppercase mb-1">Custom Logo Design</h4>
                      <p className="text-white font-[var(--font-montserrat)] text-[11px] sm:text-xs font-semibold mb-1">For Professional Businesses</p>
                      <p className="text-gray-400 font-[var(--font-montserrat)] text-[10px] mb-2 leading-snug">
                        Let our In-house design team design a custom Logo from scratch as per your requirements
                      </p>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-300 font-[var(--font-montserrat)] text-[10px] sm:text-xs mb-2">
                        {["Unique & Custom Designs", "100% Logo Copyrights", "Print Ready Vector Files", "High Resolution Files", "All Master File Formats", "100% Money Back Guarantee"].map((f) => (
                          <li key={f} className="flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--color-hot-red)] shrink-0" />{f}</li>
                        ))}
                      </ul>
                      <p className="text-sm sm:text-base font-[var(--font-orbitron)] text-white font-bold">
                        Starting from <span className="text-[var(--color-hot-red)]">$49</span>
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 justify-center">
                      <Link
                        href="/portfolio" onClick={() => setIsOpen(false)}
                        className="flex-1 bg-transparent border-2 border-white text-white px-3 py-2 rounded-full font-[var(--font-orbitron)] text-[9px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
                      >Visit Portfolio</Link>
                      <Link
                        href="/logo-design#pricing" onClick={() => setIsOpen(false)}
                        className="flex-1 bg-[var(--color-arc-blue)] hover:bg-[#00b8e6] text-black px-3 py-2 rounded-full font-[var(--font-orbitron)] text-[9px] sm:text-xs font-bold uppercase tracking-widest transition-all text-center"
                      >View Packages</Link>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
