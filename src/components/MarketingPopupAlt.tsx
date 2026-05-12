'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Alternative Marketing Popup with Scratch Card Game
 * This is an alternative to the spinning wheel popup.
 * To use this instead: 
 * 1. Replace MarketingPopup import in layout.tsx
 * 2. Rename this file to MarketingPopup.tsx
 * 3. Rename current MarketingPopup.tsx to MarketingPopupWheel.tsx
 */

const MarketingPopupAlt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratched, setScratch] = useState(Array(12).fill(false));
  const [showOffer, setShowOffer] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('marketingPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Check if 50% scratched
  useEffect(() => {
    const scratchedCount = scratched.filter(Boolean).length;
    if (scratchedCount >= 6 && !revealed) {
      setRevealed(true);
      setTimeout(() => setShowOffer(true), 500);
    }
  }, [scratched, revealed]);

  const handleScratch = (index: number) => {
    if (!scratched[index]) {
      const newScratched = [...scratched];
      newScratched[index] = true;
      setScratch(newScratched);
    }
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

  const scratchCards = [
    '💎', '🎁', '⭐', '🚀', '💎', '🎯',
    '🎁', '✨', '💎', '🚀', '⭐', '🎯'
  ];

  return (
    <AnimatePresence>
      {isOpen && !isClosed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          {/* Scan lines effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rgba(0, 210, 255, 0.05) pointer-events-none" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: 'rgba(5, 5, 5, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
              boxShadow: '0 0 40px rgba(0, 210, 255, 0.15), 0 0 20px rgba(0, 203, 169, 0.1)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-[var(--color-arc-blue)]"
            >
              <X size={24} />
            </button>

            {/* Content Container */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-[#00D2FF] to-[#00cba9] bg-clip-text text-transparent">
                    Scratch to Reveal
                  </span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base font-[var(--font-montserrat)]">
                  Scratch the cards to reveal your special offer
                </p>
              </div>

              {/* Scratch Card Grid */}
              <div className="mb-8">
                <div className="grid grid-cols-4 gap-3">
                  {scratchCards.map((emoji, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleScratch(idx)}
                      disabled={scratched[idx]}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      whileHover={!scratched[idx] ? { scale: 1.05 } : {}}
                    >
                      {/* Scratched State */}
                      {scratched[idx] ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="w-full h-full bg-gradient-to-br from-[#00D2FF] to-[#00cba9] flex items-center justify-center text-2xl"
                        >
                          {emoji}
                        </motion.div>
                      ) : (
                        /* Unscratched State */
                        <motion.div
                          initial={{ y: 0 }}
                          whileHover={{ y: -2 }}
                          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-lg border border-gray-700 hover:border-[#00D2FF] transition-colors"
                          style={{
                            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          🔒
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Progress Text */}
                {!revealed && (
                  <p className="text-center text-xs md:text-sm text-gray-400 mt-4 font-[var(--font-montserrat)]">
                    {`${Math.round((scratched.filter(Boolean).length / 12) * 100)}% Scratched`}
                  </p>
                )}
              </div>

              {/* Offer Reveal */}
              <AnimatePresence>
                {showOffer && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="rounded-xl p-4 md:p-6 text-white text-center mb-4"
                    style={{
                      background: 'rgba(0, 210, 255, 0.1)',
                      border: '1px solid rgba(0, 210, 255, 0.3)',
                      boxShadow: '0 0 30px rgba(0, 210, 255, 0.2), inset 0 0 20px rgba(0, 210, 255, 0.05)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="mb-3"
                    >
                      <Sparkles className="w-8 h-8 mx-auto text-[#00D2FF]" />
                    </motion.div>
                    <p className="text-sm md:text-base font-semibold mb-2 font-[var(--font-montserrat)]">
                      🎉 Congratulations! 🎉
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-[var(--font-orbitron)] uppercase tracking-wide">
                      1 Year Free Domain
                    </h3>
                    <p className="text-xs md:text-sm opacity-80 mb-3 font-[var(--font-montserrat)]">
                      Get a premium domain absolutely FREE for 1 year with any web design or development package
                    </p>
                    <div className="bg-black/40 border border-[#00D2FF]/40 rounded-lg p-2 mb-3 text-xs md:text-sm font-mono">
                      Use Code: <span className="font-bold text-[#00D2FF]">SPIN2026</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Claim Button */}
              {showOffer && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleClaimOffer}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all text-sm md:text-base uppercase tracking-wider font-[var(--font-orbitron)]"
                >
                  CLAIM MY OFFER →
                </motion.button>
              )}

              {/* Footer Text */}
              <p className="text-center text-xs md:text-sm text-gray-500 mt-4 font-[var(--font-montserrat)]">
                Limited time offer • Valid for new clients
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MarketingPopupAlt;
