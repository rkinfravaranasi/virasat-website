"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-virasat-green-dark text-white border-t border-virasat-gold/30">
      {/* Top Value Banner */}
      <div className="border-b border-virasat-gold/15 bg-virasat-charcoal-dark/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-10 h-10 rounded-full border border-virasat-gold/40 flex items-center justify-center text-virasat-gold bg-virasat-green/40">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-virasat-gold-light">
                  Varanasi Prime Corridors
                </h4>
                <p className="text-xs text-white/60">
                  Ring Road, Cantt & Airport Growth Hubs
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-10 h-10 rounded-full border border-virasat-gold/40 flex items-center justify-center text-virasat-gold bg-virasat-green/40">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-virasat-gold-light">
                  RERA Compliance First
                </h4>
                <p className="text-xs text-white/60">
                  Transparent titles, clear sanctions & approvals
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-10 h-10 rounded-full border border-virasat-gold/40 flex items-center justify-center text-virasat-gold bg-virasat-green/40">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-virasat-gold-light">
                  Dedicated Concierge
                </h4>
                <p className="text-xs text-white/60">
                  Tailored property advisory: +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Story Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded border border-virasat-gold/60 flex items-center justify-center bg-virasat-green/40">
                <span className="font-serif text-2xl font-bold text-virasat-gold">V</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                VIRASAT
              </span>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed font-light pr-4">
              VIRASAT is a premier real estate development house committed to crafting generational
              plotted townships, architectural masterpieces, and modern commercial landmarks in
              Varanasi, Uttar Pradesh. Built on timeless values, structural transparency, and
              forward-looking infrastructure.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-virasat-green border border-virasat-gold/40 text-xs px-3.5 py-2 rounded text-virasat-gold hover:bg-virasat-gold hover:text-virasat-green-dark transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h5 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-virasat-gold">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/" className="hover:text-virasat-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-virasat-gold transition-colors">
                  About Virasat
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-virasat-gold transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="hover:text-virasat-gold transition-colors">
                  Lifestyle & Amenities
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-virasat-gold transition-colors">
                  Location & Growth Corridors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-virasat-gold transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-virasat-gold transition-colors">
                  Brochures & Downloads
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-virasat-gold transition-colors">
                  Market Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-virasat-gold transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h5 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-virasat-gold">
              Key Projects
            </h5>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link
                  href="/projects/virasat-ganga-enclave"
                  className="hover:text-virasat-gold transition-colors block"
                >
                  <span className="font-medium text-white/90">Virasat Ganga Enclave</span>
                  <span className="block text-[11px] text-virasat-gold/80">
                    Plotted Development • Ring Road
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/the-kashi-grandeur"
                  className="hover:text-virasat-gold transition-colors block"
                >
                  <span className="font-medium text-white/90">The Kashi Grandeur</span>
                  <span className="block text-[11px] text-virasat-gold/80">
                    Luxury 3 & 4 BHK • Cantt
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/virasat-prime-pavilion"
                  className="hover:text-virasat-gold transition-colors block"
                >
                  <span className="font-medium text-white/90">Virasat Prime Pavilion</span>
                  <span className="block text-[11px] text-virasat-gold/80">
                    Retail & Suites • Babatpur
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office & Contact */}
          <div className="space-y-4">
            <h5 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-virasat-gold">
              Corporate Office
            </h5>
            <div className="space-y-3 text-xs text-white/70 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-virasat-gold shrink-0 mt-0.5" />
                <span>
                  Virasat Corporate Tower, Ring Road Corridor, Shivpur, Varanasi, Uttar Pradesh -
                  221002, India
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-virasat-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-virasat-gold">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-virasat-gold shrink-0" />
                <a href="mailto:enquiry@virasatdevelopments.com" className="hover:text-virasat-gold">
                  enquiry@virasatdevelopments.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & RERA Disclaimer Box */}
        <div className="mt-14 pt-8 border-t border-virasat-gold/20">
          <div className="bg-virasat-charcoal-dark/70 border border-virasat-gold/20 p-5 rounded text-[11px] text-white/60 leading-relaxed font-light">
            <div className="flex items-center space-x-2 text-virasat-gold font-semibold uppercase tracking-wider text-[11px] mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Statutory Compliance & Legal Disclaimer</span>
            </div>
            <p>
              Disclaimer: All architectural renders, floor plans, layout drawings, elevations,
              amenities, land boundaries, and specifications depicted on this website are conceptual
              and illustrative in nature. Projects are being developed in accordance with applicable
              sanctions from Varanasi municipal authorities and UP-RERA regulations. Registered
              sales documents and mutual agreements for sale supersede any marketing representation.
              Specific UP-RERA registration numbers and dates are disclosed on each project’s
              detail page. Prospective purchasers are requested to verify project details at the
              official UP-RERA portal (
              <a
                href="https://up-rera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-virasat-gold underline hover:text-white"
              >
                up-rera.in
              </a>
              ).
            </p>
          </div>
        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 border-t border-white/5 pt-6 gap-4">
          <p>© {currentYear} VIRASAT DEVELOPMENTS. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center space-x-5 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-virasat-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-virasat-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-virasat-gold transition-colors">
              Disclaimer
            </Link>
            <Link
              href="/admin/login"
              className="text-virasat-gold/70 hover:text-virasat-gold flex items-center space-x-1 pl-2 border-l border-white/10"
            >
              <Lock className="w-3 h-3" />
              <span>Admin CMS</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
