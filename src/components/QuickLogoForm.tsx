"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { X, ChevronRight, ChevronLeft, Send, CheckCircle2, Clock } from "lucide-react";

export default function LogoEngineWizard() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes = 180 seconds

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
      <div className="w-full max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl mb-12 shadow-[0_0_40px_rgba(0,210,255,0.1)] relative z-20 text-center">
        <h2 className="text-2xl md:text-4xl font-[var(--font-orbitron)] font-bold text-white mb-2 uppercase tracking-wide">
          Online Logo Maker & Custom Design Services
        </h2>
        <p className="text-gray-300 font-[var(--font-montserrat)] mb-6 text-sm md:text-base flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-[var(--color-arc-blue)]" />
          Get a Custom Logo Made in 03:00 minutes. Try Now
        </p>

        <form onSubmit={handleStart} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Enter Your Business Name"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              required
              className="w-full bg-white text-black px-6 py-4 rounded-xl font-[var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-[var(--color-arc-blue)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[var(--color-arc-blue)] hover:bg-[#00b8e6] text-black font-[var(--font-orbitron)] font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-y-auto"
          >
            {/* Cinematic Background Glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-arc-blue)]/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-hot-red)]/20 blur-[100px] rounded-full pointer-events-none" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-28 right-6 md:right-10 text-white hover:text-[var(--color-hot-red)] z-50 transition-colors"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {step < 6 && (
              <div className="absolute top-28 left-6 md:left-10 text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-xl md:text-2xl font-bold tracking-widest flex items-center gap-2">
                <Clock className="w-5 h-5 md:w-6 md:h-6" /> {formatTime(timeLeft)}
              </div>
            )}

            <div className="w-full max-w-3xl px-6 py-12 text-center">
              {step === 1 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                >
                  <p className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] uppercase tracking-[0.3em] mb-4 text-sm font-bold">Step 1</p>
                  <h3 className="text-3xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-12 uppercase">
                    {formData.businessName}
                  </h3>
                  <div className="mb-12">
                    <label className="block text-gray-300 text-xl mb-4 font-[var(--font-montserrat)]">What is your industry or niche?</label>
                    <input
                      type="text"
                      placeholder="e.g. Technology, Real Estate, Fashion..."
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full max-w-md mx-auto block bg-transparent border-b-2 border-white/20 text-white px-4 py-3 text-center text-xl focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!formData.industry.trim()}
                    className="bg-[var(--color-arc-blue)] text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest hover:bg-white disabled:opacity-50 transition-all flex items-center gap-2 mx-auto"
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
                  <h3 className="text-3xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-12 uppercase">
                    Design Preferences
                  </h3>
                  <div className="mb-12">
                    <label className="block text-gray-300 text-xl mb-8 font-[var(--font-montserrat)]">Select your preferred logo style:</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      {["Minimalist", "3D / Mascot", "Vintage", "Corporate", "Abstract", "Others"].map((style) => (
                        <div
                          key={style}
                          onClick={() => setFormData({ ...formData, logoStyle: style })}
                          className={`cursor-pointer border-2 rounded-xl p-6 transition-all font-[var(--font-montserrat)] ${formData.logoStyle === style ? 'border-[var(--color-arc-blue)] bg-[var(--color-arc-blue)]/10 text-[var(--color-arc-blue)] shadow-[0_0_15px_rgba(0,210,255,0.2)]' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
                        >
                          <div className="font-bold text-sm uppercase tracking-wider">{style}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-4 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-sm transition-colors">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.logoStyle}
                      className="bg-[var(--color-arc-blue)] text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest hover:bg-white disabled:opacity-50 transition-all flex items-center gap-2"
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
                  <h3 className="text-3xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-12 uppercase">
                    Color Palette
                  </h3>
                  <div className="mb-12">
                    <label className="block text-gray-300 text-xl mb-4 font-[var(--font-montserrat)]">Any specific colors in mind?</label>
                    <input
                      type="text"
                      placeholder="e.g. Blue and Gold, Dark Theme, Vibrant..."
                      value={formData.colors}
                      onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                      className="w-full max-w-md mx-auto block bg-transparent border-b-2 border-white/20 text-white px-4 py-3 text-center text-xl focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-4 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-sm transition-colors">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[var(--color-arc-blue)] text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
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
                  <h3 className="text-3xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-12 uppercase">
                    Additional Details
                  </h3>
                  <div className="mb-12">
                    <label className="block text-gray-300 text-xl mb-6 font-[var(--font-montserrat)]">Anything else we should know?</label>
                    <textarea
                      placeholder="Competitors you like, specific symbols to include..."
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full max-w-xl mx-auto block bg-white/5 border border-white/10 rounded-xl text-white px-6 py-4 text-lg focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-600 resize-none font-[var(--font-montserrat)]"
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <button onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-4 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-sm transition-colors">
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[var(--color-arc-blue)] text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
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
                  <h3 className="text-3xl md:text-5xl font-[var(--font-orbitron)] text-white font-black mb-12 uppercase">
                    Where should we send your design?
                  </h3>
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-[var(--font-montserrat)] focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-[var(--font-montserrat)] focus:outline-none focus:border-[var(--color-arc-blue)] transition-colors placeholder:text-gray-500"
                    />
                    <div className="phone-dark">
                      <PhoneInput
                        international
                        defaultCountry="US"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                        className="w-full font-[var(--font-montserrat)]"
                      />
                    </div>
                    
                    <div className="pt-8 flex justify-center gap-4">
                      <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white px-6 py-4 flex items-center gap-2 font-[var(--font-orbitron)] uppercase tracking-widest text-sm transition-colors">
                        <ChevronLeft className="w-5 h-5" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className={`bg-[var(--color-hot-red)] hover:bg-red-900 text-white px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-[var(--color-arc-blue)]/20 border-2 border-[var(--color-arc-blue)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                    <CheckCircle2 className="w-12 h-12 text-[var(--color-arc-blue)]" />
                  </div>
                  <h3 className="text-4xl font-[var(--font-orbitron)] font-black text-white mb-6 uppercase tracking-wider">
                    Details Received!
                  </h3>
                  <p className="text-lg text-gray-400 font-[var(--font-montserrat)] mb-10 max-w-xl mx-auto leading-relaxed">
                    We've received your logo requirements. Our team is reviewing the details and will contact you shortly with the next steps.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white text-black px-10 py-4 rounded-full font-[var(--font-orbitron)] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
