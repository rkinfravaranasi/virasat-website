"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Download,
  Image as ImageIcon,
  Building2,
  Trees,
} from "lucide-react";

interface HeaderProps {
  onOpenEnquiry?: (projectName?: string) => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
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

  const isDarkNav = isScrolled || pathname !== "/";

  const isProjectsActive =
    pathname.startsWith("/projects");
  const isExploreActive =
    pathname === "/lifestyle" ||
    pathname === "/location" ||
    pathname === "/gallery" ||
    pathname === "/downloads";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkNav
          ? "bg-virasat-green-dark/95 backdrop-blur-md py-3 shadow-xl border-b border-virasat-gold/20"
          : "bg-gradient-to-b from-virasat-charcoal-dark/90 via-virasat-charcoal-dark/50 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="group flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 rounded border border-virasat-gold/60 flex items-center justify-center bg-virasat-green/40 group-hover:border-virasat-gold transition-colors">
              <span className="font-serif text-2xl font-bold text-virasat-gold tracking-wider">
                V
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-white group-hover:text-virasat-gold-light transition-colors whitespace-nowrap">
                VIRASAT
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.35em] text-virasat-gold uppercase font-medium whitespace-nowrap">
                Varanasi • Legacies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean Single-Line with Dropdowns */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 shrink-0">
            {/* Home */}
            <Link
              href="/"
              className={`text-xs tracking-widest uppercase transition-all duration-300 relative py-2 whitespace-nowrap ${
                pathname === "/"
                  ? "text-virasat-gold font-semibold"
                  : "text-white/85 hover:text-virasat-gold-light"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-virasat-gold rounded-full" />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`text-xs tracking-widest uppercase transition-all duration-300 relative py-2 whitespace-nowrap ${
                pathname === "/about"
                  ? "text-virasat-gold font-semibold"
                  : "text-white/85 hover:text-virasat-gold-light"
              }`}
            >
              About Us
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-virasat-gold rounded-full" />
              )}
            </Link>

            {/* Projects Submenu */}
            <div className="relative group py-2">
              <button
                className={`flex items-center space-x-1.5 text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  isProjectsActive
                    ? "text-virasat-gold font-semibold"
                    : "text-white/85 group-hover:text-virasat-gold-light"
                }`}
              >
                <span>Projects</span>
                <ChevronDown className="w-3.5 h-3.5 text-virasat-gold/80 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#0B1E19]/98 backdrop-blur-xl border border-virasat-gold/30 rounded-lg shadow-2xl p-2 space-y-1">
                  <Link
                    href="/projects/kashi-lake-city"
                    className="flex items-start space-x-3 p-2.5 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-virasat-gold/10 text-virasat-gold group-hover/item:bg-virasat-gold group-hover/item:text-virasat-green-dark transition-colors shrink-0 mt-0.5">
                      <Trees className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold text-white group-hover/item:text-virasat-gold-light tracking-wider">
                          Kashi Lake City
                        </span>
                        <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-virasat-gold/20 text-virasat-gold font-bold">
                          Flagship
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-tight mt-0.5">
                        41.31-Acre Plotted Township
                      </p>
                    </div>
                  </Link>

                  <div className="h-[1px] bg-white/10 my-1" />

                  <Link
                    href="/projects"
                    className="flex items-center justify-between p-2.5 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Building2 className="w-4 h-4 text-virasat-gold" />
                      <span className="text-xs font-medium text-white/90 group-hover/item:text-virasat-gold-light tracking-wider">
                        All Projects Portfolio
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-virasat-gold/60 group-hover/item:translate-x-1 group-hover/item:text-virasat-gold transition-all" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Explore Submenu (Lifestyle, Location, Gallery, Downloads) */}
            <div className="relative group py-2">
              <button
                className={`flex items-center space-x-1.5 text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  isExploreActive
                    ? "text-virasat-gold font-semibold"
                    : "text-white/85 group-hover:text-virasat-gold-light"
                }`}
              >
                <span>Explore</span>
                <ChevronDown className="w-3.5 h-3.5 text-virasat-gold/80 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#0B1E19]/98 backdrop-blur-xl border border-virasat-gold/30 rounded-lg shadow-2xl p-2 space-y-1">
                  <Link
                    href="/lifestyle"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <Sparkles className="w-4 h-4 text-virasat-gold shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white group-hover/item:text-virasat-gold-light tracking-wider">
                        Lifestyle & Amenities
                      </div>
                      <div className="text-[10px] text-white/50">Clubhouse & Lakefront</div>
                    </div>
                  </Link>

                  <Link
                    href="/location"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <MapPin className="w-4 h-4 text-virasat-gold shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white group-hover/item:text-virasat-gold-light tracking-wider">
                        Location & Access
                      </div>
                      <div className="text-[10px] text-white/50">Varanasi Connectivity</div>
                    </div>
                  </Link>

                  <Link
                    href="/gallery"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <ImageIcon className="w-4 h-4 text-virasat-gold shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white group-hover/item:text-virasat-gold-light tracking-wider">
                        Visual Gallery
                      </div>
                      <div className="text-[10px] text-white/50">Renders & Walkthroughs</div>
                    </div>
                  </Link>

                  <Link
                    href="/downloads"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-virasat-green/40 transition-colors group/item"
                  >
                    <Download className="w-4 h-4 text-virasat-gold shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white group-hover/item:text-virasat-gold-light tracking-wider">
                        Downloads & Dossier
                      </div>
                      <div className="text-[10px] text-white/50">Brochure & Masterplan</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Insights */}
            <Link
              href="/insights"
              className={`text-xs tracking-widest uppercase transition-all duration-300 relative py-2 whitespace-nowrap ${
                pathname === "/insights"
                  ? "text-virasat-gold font-semibold"
                  : "text-white/85 hover:text-virasat-gold-light"
              }`}
            >
              Insights
              {pathname === "/insights" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-virasat-gold rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-xs tracking-widest uppercase transition-all duration-300 relative py-2 whitespace-nowrap ${
                pathname === "/contact"
                  ? "text-virasat-gold font-semibold"
                  : "text-white/85 hover:text-virasat-gold-light"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-virasat-gold rounded-full" />
              )}
            </Link>
          </nav>

          {/* Quick CTA Actions - Guaranteed Single Line with whitespace-nowrap */}
          <div className="hidden sm:flex items-center space-x-3 2xl:space-x-4 shrink-0">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-xs text-virasat-gold hover:text-virasat-gold-light transition-colors px-2 py-1.5 whitespace-nowrap shrink-0"
              title="Call Virasat Sales Desk"
            >
              <Phone className="w-3.5 h-3.5 text-virasat-gold shrink-0" />
              <span className="tracking-wider font-medium whitespace-nowrap">
                +91 98765 43210
              </span>
            </a>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-4 py-2.5 rounded hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center space-x-1.5 whitespace-nowrap shrink-0"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Tablet & Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center space-x-2 sm:space-x-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="sm:hidden bg-gold-metallic text-virasat-green-dark text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded whitespace-nowrap"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-virasat-gold hover:text-white rounded border border-virasat-gold/30 bg-virasat-green/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A1D17]/98 border-t border-virasat-gold/20 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                pathname === "/"
                  ? "text-virasat-gold font-bold"
                  : "text-white/80 hover:text-virasat-gold"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                pathname === "/about"
                  ? "text-virasat-gold font-bold"
                  : "text-white/80 hover:text-virasat-gold"
              }`}
            >
              About Us
            </Link>

            {/* Mobile Projects Dropdown Accordion */}
            <div className="border-b border-white/5 py-2">
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="w-full flex items-center justify-between text-sm tracking-wider uppercase text-white/80 hover:text-virasat-gold"
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 text-virasat-gold transition-transform duration-300 ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProjectsOpen && (
                <div className="pl-4 mt-2 space-y-2 py-2 border-l border-virasat-gold/30 bg-virasat-green/20 rounded-r-md">
                  <Link
                    href="/projects/kashi-lake-city"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-virasat-gold font-semibold py-1 hover:text-white"
                  >
                    ★ Kashi Lake City (Flagship Plotted)
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-white/70 py-1 hover:text-virasat-gold"
                  >
                    View All Projects
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Explore Dropdown Accordion */}
            <div className="border-b border-white/5 py-2">
              <button
                onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                className="w-full flex items-center justify-between text-sm tracking-wider uppercase text-white/80 hover:text-virasat-gold"
              >
                <span>Explore</span>
                <ChevronDown
                  className={`w-4 h-4 text-virasat-gold transition-transform duration-300 ${
                    mobileExploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExploreOpen && (
                <div className="pl-4 mt-2 space-y-2 py-2 border-l border-virasat-gold/30 bg-virasat-green/20 rounded-r-md">
                  <Link
                    href="/lifestyle"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-white/80 py-1 hover:text-virasat-gold"
                  >
                    Lifestyle & Amenities
                  </Link>
                  <Link
                    href="/location"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-white/80 py-1 hover:text-virasat-gold"
                  >
                    Strategic Location
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-white/80 py-1 hover:text-virasat-gold"
                  >
                    Visual Gallery
                  </Link>
                  <Link
                    href="/downloads"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-white/80 py-1 hover:text-virasat-gold"
                  >
                    Downloads & Brochure
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                pathname === "/insights"
                  ? "text-virasat-gold font-bold"
                  : "text-white/80 hover:text-virasat-gold"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                pathname === "/contact"
                  ? "text-virasat-gold font-bold"
                  : "text-white/80 hover:text-virasat-gold"
              }`}
            >
              Contact
            </Link>
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
              className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3 rounded text-center shadow-lg"
            >
              Schedule VIP Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
