'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FreeDomainPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/contact?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&offer=freeDomain`;
  };

  const benefits = [
    { icon: Zap, text: 'Premium .com domain included' },
    { icon: CheckCircle, text: 'Free for 1 full year' },
    { icon: Star, text: 'Unlimited email accounts' },
    { icon: Zap, text: 'Custom domain setup' },
    { icon: CheckCircle, text: 'DNS management included' },
    { icon: Star, text: 'Domain transfer support' },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$599',
      features: ['1 Year Free Domain', 'Basic Website', '5 Pages', 'Mobile Responsive', 'Contact Form'],
    },
    {
      name: 'Professional',
      price: '$999',
      features: ['1 Year Free Domain', 'Advanced Website', 'Up to 15 Pages', 'SEO Optimization', 'Analytics Dashboard', 'CMS Integration'],
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      features: ['1 Year Free Domain', 'Full-Scale Website', 'Unlimited Pages', 'E-commerce Ready', 'API Integration', 'Priority Support'],
    },
  ];

  return (
    <main className="bg-black relative overflow-hidden">
      {/* Scan lines */}
      <div className="fixed inset-0 pointer-events-none opacity-5 mix-blend-multiply" style={{
        backgroundImage: `linear-gradient(to right, transparent 1px, rgba(0, 0, 0, 0.5) 1px), linear-gradient(to bottom, transparent 1px, rgba(0, 0, 0, 0.5) 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00cba9] rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{ animationDelay: '2s' }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white rounded-full text-sm font-bold font-[var(--font-montserrat)] uppercase tracking-wider">
              🎉 LIMITED TIME OFFER 🎉
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-orbitron)] uppercase tracking-wider text-white">
            Get a <span className="bg-gradient-to-r from-[#00D2FF] to-[#00cba9] bg-clip-text text-transparent">Premium Domain</span> FREE
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-[var(--font-montserrat)]">
            Launch your online presence with a professional website AND a premium domain, completely free for one year. Perfect for startups and growing businesses.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-shadow inline-flex items-center gap-2 uppercase tracking-wider font-[var(--font-orbitron)]"
          >
            Claim Your Free Domain <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-orbitron)] uppercase tracking-wider text-white"
          >
            What's Included
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl border transition-all"
                  style={{
                    background: 'rgba(5, 5, 5, 0.8)',
                    borderColor: 'rgba(0, 210, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 210, 255, 0.05)',
                  }}
                >
                  <Icon size={32} className="text-[#00D2FF] mb-4" />
                  <p className="text-gray-200 font-semibold font-[var(--font-montserrat)]">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 font-[var(--font-orbitron)] uppercase tracking-wider text-white"
          >
            Choose Your Package
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-lg font-[var(--font-montserrat)]">
            All packages include 1 year free premium domain
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  idx === 1
                    ? 'border-[#00D2FF] scale-105'
                    : 'border-gray-700 hover:border-[#00D2FF]'
                }`}
                style={{
                  background: idx === 1 
                    ? 'rgba(0, 210, 255, 0.1)'
                    : 'rgba(5, 5, 5, 0.8)',
                  boxShadow: idx === 1
                    ? '0 0 40px rgba(0, 210, 255, 0.2)'
                    : '0 0 20px rgba(0, 210, 255, 0.05)',
                }}
              >
                <h3 className={`text-2xl font-bold mb-2 font-[var(--font-orbitron)] uppercase tracking-wider ${idx === 1 ? 'text-[#00D2FF]' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-4xl font-bold mb-6 font-[var(--font-orbitron)] ${idx === 1 ? 'text-[#00D2FF]' : 'text-[#00cba9]'}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-300 font-[var(--font-montserrat)]">
                      <CheckCircle size={20} className={idx === 1 ? 'text-[#00D2FF]' : 'text-[#00cba9]'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowForm(true)}
                  className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-all font-[var(--font-orbitron)] ${
                    idx === 1
                      ? 'bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]'
                      : 'bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-2xl p-12"
          style={{
            background: 'rgba(0, 210, 255, 0.05)',
            border: '1px solid rgba(0, 210, 255, 0.2)',
            boxShadow: '0 0 40px rgba(0, 210, 255, 0.1)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-orbitron)] uppercase tracking-wider text-white">
            Ready to Launch?
          </h2>
          <p className="text-lg mb-8 text-gray-300 font-[var(--font-montserrat)]">
            Don't miss this exclusive offer. Get your premium domain free for 1 year with any website design package.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-shadow uppercase tracking-wider font-[var(--font-orbitron)]"
          >
            Claim Your Offer Now
          </motion.button>
        </motion.div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-2xl p-8 max-w-md w-full"
            style={{
              background: 'rgba(5, 5, 5, 0.95)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
              boxShadow: '0 0 40px rgba(0, 210, 255, 0.15)',
            }}
          >
            <h3 className="text-2xl font-bold mb-6 font-[var(--font-orbitron)] uppercase tracking-wider text-white">Claim Your Free Domain</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none transition-all font-[var(--font-montserrat)]"
                style={{
                  background: 'rgba(5, 5, 5, 0.8)',
                  borderColor: 'rgba(0, 210, 255, 0.2)',
                  color: '#fff',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none transition-all font-[var(--font-montserrat)]"
                style={{
                  background: 'rgba(5, 5, 5, 0.8)',
                  borderColor: 'rgba(0, 210, 255, 0.2)',
                  color: '#fff',
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none transition-all font-[var(--font-montserrat)]"
                style={{
                  background: 'rgba(5, 5, 5, 0.8)',
                  borderColor: 'rgba(0, 210, 255, 0.2)',
                  color: '#fff',
                }}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00D2FF] to-[#00cba9] text-white py-3 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-shadow uppercase tracking-wider font-[var(--font-orbitron)]"
              >
                Continue to Payment
              </button>
            </form>
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full text-gray-400 hover:text-[#00D2FF] transition-colors font-[var(--font-montserrat)]"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
