'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MarketingPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasSpun, setHasSpun] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showOffer, setShowOffer] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Theme Colors from globals.css
  const ARC_BLUE = '#00D2FF';
  const HOT_RED = '#8B0000'; // Standard theme red
  const VIBRANT_RED = '#FF3131'; // For wheel pop

  useEffect(() => {
    console.log("MARKETING POPUP: Component Mounted");
    setMounted(true);
  }, []);

  const handleSpin = () => {
    if (hasSpun) return;

    // Land on Arc Blue segment
    const spins = 1440 + 45; 
    setRotation(spins);
    setHasSpun(true);

    setTimeout(() => {
      setShowOffer(true);
    }, 2500); 
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsClosed(true);
    localStorage.setItem('marketingPopupSeen', 'true');
  };

  const handleClaimOffer = () => {
    window.location.href = '/build?offer=freeDomain';
    handleClose();
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && !isClosed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-[340px] sm:max-w-md bg-[#0c0c0c] rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-arc-blue)] to-[var(--color-hot-red)]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8 text-center">
              {/* Header */}
              <div className="mb-6 md:mb-8">
                <h2 className="font-[var(--font-orbitron)] text-xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-1 md:mb-2">
                  Ready to <span className="text-[var(--color-arc-blue)]">Begin?</span>
                </h2>
                <p className="text-gray-400 font-[var(--font-montserrat)] text-[10px] md:text-sm">
                  We have a small gift for your new project initialization.
                </p>
              </div>

              {/* Wheel Section */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="relative w-44 h-44 md:w-56 md:h-56">
                  {/* Wheel Glow */}
                  <div className="absolute inset-0 rounded-full bg-[var(--color-arc-blue)]/5 blur-2xl" />
                  
                  {/* Pointer */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-white" />
                  </div>

                  {/* The Wheel */}
                  <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ duration: 3, ease: [0.2, 0, 0, 1] }}
                    className="w-full h-full relative"
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                      {[0, 1, 2, 3].map((i) => (
                        <path
                          key={i}
                          d={`M 100,100 L ${100 + 100 * Math.cos((i * 90 - 90) * Math.PI / 180)},${100 + 100 * Math.sin((i * 90 - 90) * Math.PI / 180)} A 100,100 0 0,1 ${100 + 100 * Math.cos((i * 90 + 90 - 90) * Math.PI / 180)},${100 + 100 * Math.sin((i * 90 + 90 - 90) * Math.PI / 180)} Z`}
                          fill={i % 2 === 0 ? ARC_BLUE : VIBRANT_RED}
                          stroke="#0c0c0c"
                          strokeWidth="2"
                        />
                      ))}
                      {/* Center Hub */}
                      <circle cx="100" cy="100" r="12" fill="#0c0c0c" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Action Area */}
              <div className="relative min-h-[140px]">
                <AnimatePresence mode="wait">
                  {!showOffer ? (
                    <motion.div
                      key="spin-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <button
                        onClick={handleSpin}
                        disabled={hasSpun}
                        className={`w-full py-4 md:py-5 rounded-xl font-[var(--font-orbitron)] font-bold uppercase tracking-widest text-sm md:text-base transition-all duration-300 ${
                          hasSpun 
                          ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                          : 'bg-white text-black hover:bg-[var(--color-arc-blue)] hover:text-white shadow-xl hover:scale-[1.02]'
                        }`}
                      >
                        {hasSpun ? 'One moment...' : 'Check Your Offer'}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="offer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-[var(--color-arc-blue)] font-[var(--font-orbitron)] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Nice Spin!</div>
                        <h3 className="text-xl md:text-2xl font-[var(--font-orbitron)] font-bold text-white uppercase mb-4">1 Year Free Domain</h3>
                        
                        <div className="bg-black/50 border border-white/5 p-3 md:p-4 rounded-xl mb-4 md:mb-6">
                           <span className="text-gray-500 text-[9px] md:text-[10px] uppercase block mb-0.5 md:mb-1">Access Key</span>
                           <span className="text-base md:text-lg font-bold text-white tracking-widest font-mono">SPIN2026</span>
                        </div>

                        <button
                          onClick={handleClaimOffer}
                          className="w-full py-4 bg-[var(--color-hot-red)] hover:bg-red-700 text-white rounded-xl font-[var(--font-orbitron)] font-bold text-sm uppercase tracking-widest transition-all shadow-lg"
                        >
                          Add to Project →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-8 text-[10px] text-gray-600 font-[var(--font-montserrat)] uppercase tracking-widest">
                * Valid for new clients • Valid with web projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MarketingPopup;
