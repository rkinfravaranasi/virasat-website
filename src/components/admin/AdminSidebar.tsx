"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building,
  Settings,
  Image as ImageIcon,
  FileText,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Leads & Enquiries", href: "/admin/leads", icon: Users },
    { name: "Project Management", href: "/admin/projects", icon: Building },
    { name: "Site Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
    }
  };

  return (
    <aside className="w-64 bg-virasat-green-dark border-r border-virasat-gold/30 flex flex-col justify-between shrink-0 min-h-screen text-white">
      {/* Brand Header */}
      <div>
        <div className="p-6 border-b border-virasat-gold/20 flex items-center justify-between">
          <Link href="/admin" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded border border-virasat-gold flex items-center justify-center bg-virasat-green">
              <span className="font-serif text-lg font-bold text-virasat-gold">V</span>
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-widest text-white block">
                VIRASAT
              </span>
              <span className="text-[9px] uppercase tracking-widest text-virasat-gold block">
                Admin Suite
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1.5">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 px-3.5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? "bg-virasat-gold text-virasat-green-dark shadow"
                    : "text-white/70 hover:text-white hover:bg-virasat-green/40"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-virasat-gold/20 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2 rounded text-xs text-virasat-gold hover:text-white hover:bg-virasat-green/40 transition-colors"
        >
          <span>View Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-2 px-3.5 py-2 rounded text-xs text-red-300 hover:text-red-100 hover:bg-red-950/40 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
