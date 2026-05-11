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
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes = 120 seconds

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

  // Timer logic when wizard is open
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && step > 0 && step < 6 && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, step, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `00:0${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleStart = (e: FormEvent) => {
    e.preventDefault();
    if (formData.businessName.trim()) {
      setIsOpen(true);
      setStep(1);
    }
  };

  const handleNext = () => setStep((p) => p + 1);
  const handlePrev = () => setStep((p) => p - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageBody = `
Business Name: ${formData.businessName}
Industry: ${formData.industry}
Logo Style: ${formData.logoStyle}
Colors: ${formData.colors}
Additional Info: ${formData.additionalInfo}
    `;

    const SERVICE_ID = "service_pc7iapo";
    const TEMPLATE_ID = "template_0jn4ccf";
    const PUBLIC_KEY = "X_E0vJghlawo1saFC";

    const templateParams = {
      from_name: formData.fullName,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: messageBody,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setSubmitted(true);
        setLoading(false);
        setStep(6);
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Submission failed. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <>
      {/* Inline Banner above heading */}
      <div className="w-full max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl mb-12 shadow-[0_0_40px_rgba(0,210,255,0.1)] relative z-20 text-center mx-4 md:mx-auto">
        <h2 className="text-xl md:text-4xl font-[var(--font-orbitron)] font-bold text-white mb-2 uppercase tracking-wide">
          Online Logo Maker & Custom Design Services
        </h2>
        <p className="text-gray-300 font-[var(--font-montserrat)] mb-6 text-xs md:text-base flex items-center justify-center gap-1.5 md:gap-2">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-arc-blue)]" />
          Get a Custom Logo Made in 02:00 minutes. Try Now
        </p>

        <form onSubmit={handleStart} className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Enter Your Business Name"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              required
              className="w-full bg-white text-black px-5 py-3.5 md:px-6 md:py-4 rounded-xl font-[var(--font-montserrat)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-arc-blue)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[var(--color-arc-blue)] hover:bg-[#00b8e6] text-black font-[var(--font-orbitron)] font-bold uppercase tracking-wider px-8 py-3.5 md:py-4 rounded-xl transition-colors whitespace-nowrap text-sm md:text-base w-full md:w-auto"
          >
            Design
          </button>
        </form>
      </div>

      {/* Full Screen Wizard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-y-auto overflow-x-hidden min-h-[100dvh]"
          >
            {/* Cinematic Background Glows */}
            <div className="fixed -top-40 -right-40 w-96 h-96 bg-[var(--color-arc-blue)]/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-[var(--color-hot-red)]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="absolute top-6 md:top-8 left-0 w-full px-6 md:px-10 flex items-center justify-between z-50">
              {step < 6 ? (
                <div className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-lg md:text-2xl font-bold tracking-widest flex items-center gap-2">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" /> {formatTime(timeLeft)}
                </div>
              ) : <div />}

              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[var(--color-hot-red)] transition-colors p-2 -mr-2"
              >
                <X className="w-7 h-7 md:w-10 md:h-10" />
              </button>
            </div>

            <div className="w-full max-w-3xl px-4 md:px-6 py-16 md:py-8 text-center relative z-10 flex flex-col items-center justify-center min-h-full">
              {step === 1 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Step 1</p>
                  <h3 className="text-2xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-8 md:mb-12 uppercase break-words px-2">
                    {formData.businessName}
                  </h3>
                  <div className="mb-10 md:mb-12 w-full">
                    <label className="block text-gray-300 text-lg md:text-xl mb-4 font-[var(--font-montserrat)]">What is your industry or niche?</label>
                    <input
                      type="text"
                      placeholder="e.g. Technology, Real Estate, Fashion..."
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full max-w-md mx-auto block bg-transparent border-b-2 border-white/20 text-white px-4 py-3 text-center text-lg md:text-xl focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!formData.industry.trim()}
                    className="bg-[var(--color-arc-blue)] text-black px-8 py-3.5 md:px-10 md:py-4 rounded-full font-[var(--font-orbitron)] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white disabled:opacity-50 transition-all flex items-center gap-2 mx-auto"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Step 2</p>
                  <h3 className="text-2xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-8 md:mb-12 uppercase">
                    Design Preferences
                  </h3>
                  <div className="mb-10 md:mb-12 w-full">
                    <label className="block text-gray-300 text-lg md:text-xl mb-6 md:mb-8 font-[var(--font-montserrat)]">Select your preferred logo style:</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto px-2">
                      {["Minimalist", "3D / Mascot", "Vintage", "Corporate", "Abstract", "Others"].map((style) => (
                        <div
                          key={style}
                          onClick={() => setFormData({ ...formData, logoStyle: style })}
                          className={`cursor-pointer border-2 rounded-xl p-4 md:p-6 transition-all font-[var(--font-montserrat)] ${formData.logoStyle === style ? 'border-[var(--color-arc-blue)] bg-[var(--color-arc-blue)]/10 text-[var(--color-arc-blue)] shadow-[0_0_15px_rgba(0,210,255,0.2)]' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
                        >
                          <div className="font-bold text-xs md:text-sm uppercase tracking-wider">{style}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 w-full px-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-3 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-xs md:text-sm transition-colors w-full md:w-auto justify-center">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.logoStyle}
                      className="bg-[var(--color-arc-blue)] text-black px-8 py-3.5 md:px-10 md:py-4 rounded-full font-[var(--font-orbitron)] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white disabled:opacity-50 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Step 3</p>
                  <h3 className="text-2xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-8 md:mb-12 uppercase">
                    Color Palette
                  </h3>
                  <div className="mb-10 md:mb-12 w-full">
                    <label className="block text-gray-300 text-lg md:text-xl mb-4 font-[var(--font-montserrat)]">Any specific colors in mind?</label>
                    <input
                      type="text"
                      placeholder="e.g. Blue and Gold, Dark Theme, Vibrant..."
                      value={formData.colors}
                      onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                      className="w-full max-w-md mx-auto block bg-transparent border-b-2 border-white/20 text-white px-4 py-3 text-center text-lg md:text-xl focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 w-full px-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-3 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-xs md:text-sm transition-colors w-full md:w-auto justify-center">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[var(--color-arc-blue)] text-black px-8 py-3.5 md:px-10 md:py-4 rounded-full font-[var(--font-orbitron)] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Step 4</p>
                  <h3 className="text-2xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-8 md:mb-12 uppercase px-2">
                    Additional Details
                  </h3>
                  <div className="mb-10 md:mb-12 w-full px-4">
                    <label className="block text-gray-300 text-lg md:text-xl mb-4 md:mb-6 font-[var(--font-montserrat)]">Anything else we should know?</label>
                    <textarea
                      placeholder="Competitors you like, specific symbols to include..."
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full max-w-xl mx-auto block bg-white/5 border border-white/10 rounded-xl text-white px-4 md:px-6 py-4 text-sm md:text-lg focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600 resize-none font-[var(--font-montserrat)]"
                    />
                  </div>
                  <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 w-full px-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-3 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-xs md:text-sm transition-colors w-full md:w-auto justify-center">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[var(--color-arc-blue)] text-black px-8 py-3.5 md:px-10 md:py-4 rounded-full font-[var(--font-orbitron)] text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                      Final Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-hot-red)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Final Step</p>
                  <h3 className="text-2xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-8 md:mb-12 uppercase px-2">
                    Where should we send your design?
                  </h3>
                  <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3 md:space-y-4 px-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 text-white px-5 py-3.5 md:px-6 md:py-4 rounded-xl font-[var(--font-montserrat)] text-sm md:text-base focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 text-white px-5 py-3.5 md:px-6 md:py-4 rounded-xl font-[var(--font-montserrat)] text-sm md:text-base focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                    />
                    <div className="phone-dark text-sm md:text-base">
                      <PhoneInput
                        international
                        defaultCountry="US"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                        className="w-full font-[var(--font-montserrat)]"
                      />
                    </div>
                    
                    <div className="pt-6 md:pt-8 flex flex-col-reverse md:flex-row justify-center items-center gap-4 w-full">
                      <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-3 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-xs md:text-sm transition-colors w-full md:w-auto justify-center">
                        <ChevronLeft className="w-5 h-5" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className={`bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest text-sm md:text-base transition-all flex items-center gap-2 w-full md:w-auto justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? "Processing..." : <>Finish & Send <Send className="w-4 h-4" /></>}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center w-full max-w-2xl mx-auto bg-black/40 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--color-arc-blue)]/20 border-2 border-[var(--color-arc-blue)] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-arc-blue)]" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-[var(--font-orbitron)] font-black text-white mb-1 uppercase tracking-wider">
                    Thankyou ☺ 
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 font-[var(--font-montserrat)] mb-3 md:mb-4">
                    Checkout our Portfolio or view our Pricing and Packages
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-left mb-4 md:mb-5">
                    <h4 className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-base md:text-lg font-bold uppercase mb-1">
                      Custom Logo Design
                    </h4>
                    <p className="text-white font-[var(--font-montserrat)] text-xs md:text-base font-semibold mb-1">
                      For Professional Businesses
                    </p>
                    <p className="text-gray-400 font-[var(--font-montserrat)] text-[10px] md:text-xs mb-3 md:mb-4 leading-tight">
                      Let our In-house design team design a custom Logo from scratch as per your requirements
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 text-gray-300 font-[var(--font-montserrat)] text-[10px] md:text-xs mb-3 md:mb-4">
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> Unique & Custom Designs</li>
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> 100% Logo Copyrights</li>
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> Print Ready Vector Files</li>
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> High Resolution Files</li>
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> All Master File Formats</li>
                      <li className="flex items-center gap-1.5 md:gap-2"><CheckCircle2 className="w-3 h-3 text-[var(--color-hot-red)] shrink-0" /> 100% Money Back Guarantee</li>
                    </ul>

                    <p className="text-lg md:text-xl font-[var(--font-orbitron)] text-white font-bold mb-1 md:mb-2">
                      Starting from <span className="text-[var(--color-hot-red)]">$49</span>
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <Link
                      href="/portfolio"
                      onClick={() => setIsOpen(false)}
                      className="w-full md:w-auto bg-transparent border-2 border-white text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-[var(--font-orbitron)] text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
                    >
                      Visit Portfolio
                    </Link>
                    <Link
                      href="/logo-design#pricing"
                      onClick={() => setIsOpen(false)}
                      className="w-full md:w-auto bg-[var(--color-arc-blue)] hover:bg-[#00b8e6] text-black px-6 py-2.5 md:px-8 md:py-3 rounded-full font-[var(--font-orbitron)] text-xs md:text-sm font-bold uppercase tracking-widest transition-all text-center"
                    >
                      View Packages
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
