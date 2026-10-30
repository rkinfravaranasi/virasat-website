"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Compass, ArrowRight, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenEnquiry?: (projectName?: string) => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Location", href: "/location" },
    { name: "Gallery", href: "/gallery" },
    { name: "Downloads", href: "/downloads" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const isDarkNav = isScrolled || pathname !== "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkNav
          ? "bg-virasat-green-dark/95 backdrop-blur-md py-3 shadow-xl border-b border-virasat-gold/20"
          : "bg-gradient-to-b from-virasat-charcoal-dark/80 via-virasat-charcoal-dark/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded border border-virasat-gold/60 flex items-center justify-center bg-virasat-green/40 group-hover:border-virasat-gold transition-colors">
              <span className="font-serif text-2xl font-bold text-virasat-gold tracking-wider">
                V
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-virasat-gold-light transition-colors">
                VIRASAT
              </span>
              <span className="text-[9px] tracking-[0.35em] text-virasat-gold uppercase font-medium">
                Varanasi • Legacies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-virasat-gold font-semibold"
                      : "text-white/80 hover:text-virasat-gold-light"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-virasat-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-1.5 text-xs text-virasat-gold hover:text-virasat-gold-light transition-colors px-2.5 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-virasat-gold" />
              <span className="tracking-wider font-medium">+91 98765 43210</span>
            </a>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center space-x-1.5"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-gold-metallic text-virasat-green-dark text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-virasat-gold hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-virasat-green-dark/98 border-t border-virasat-gold/20 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                  pathname === link.href
                    ? "text-virasat-gold font-bold"
                    : "text-white/80 hover:text-virasat-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-sm text-virasat-gold justify-center py-2 bg-virasat-green/30 rounded border border-virasat-gold/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 98765 43210</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3 rounded text-center"
            >
              Schedule VIP Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
