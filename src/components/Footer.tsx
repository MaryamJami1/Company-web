"use client";

import Link from "next/link";
import { Phone, Mail, Cpu, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-arc-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-hot-red)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center group">
              <img src="/logo.png" alt="Topstier Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <p className="font-[var(--font-montserrat)] text-sm text-gray-400 leading-relaxed max-w-sm">
              Modern, trending, and high-quality products curated for a premium lifestyle. Fast delivery. Affordable luxury.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/15163090972" aria-label="Contact us on WhatsApp" className="w-10 h-10 rounded-full bg-black/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:support@topstier.co" aria-label="Send us an Email" className="w-10 h-10 rounded-full bg-black/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-arc-blue)] hover:border-[var(--color-arc-blue)]/50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3">
            <h3 className="font-[var(--font-orbitron)] text-xs font-bold uppercase tracking-widest text-white mb-8 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-arc-blue)]" />
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Build Today", href: "/build" },
                { label: "Portfolio", href: "/#testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-gray-500 hover:text-[var(--color-arc-blue)] transition-colors uppercase tracking-widest font-bold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="font-[var(--font-orbitron)] text-xs font-bold uppercase tracking-widest text-white mb-8 relative inline-block">
              Connect
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-hot-red)]" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-black/5 border border-white/10 flex items-center justify-center text-[var(--color-arc-blue)]">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+15163090972" className="text-sm text-gray-400 hover:text-white transition-colors">+1 (516) 309-0972</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-black/5 border border-white/10 flex items-center justify-center text-[var(--color-arc-blue)]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:support@topstier.co" className="text-sm text-gray-400 hover:text-white transition-colors">support@topstier.co</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-black/5 border border-white/10 flex items-center justify-center text-[var(--color-arc-blue)]">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-400">www.topstier.co</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
            Ã‚Â© {new Date().getFullYear()} Topstier / Crafted with Precision
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms-of-service" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
