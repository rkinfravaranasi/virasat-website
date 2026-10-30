"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ShieldAlert, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@virasatdevelopments.com");
  const [password, setPassword] = useState("virasat@admin2026");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Authentication failed.");
      } else {
        router.push("/admin");
      }
    } catch (err) {
      setErrorMsg("Network error. Could not connect to authentication service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-virasat-charcoal-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-virasat-gold/30">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded border border-virasat-gold flex items-center justify-center bg-virasat-green">
            <span className="font-serif text-2xl font-bold text-virasat-gold">V</span>
          </div>
          <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white">
            VIRASAT
          </span>
        </Link>
        <h2 className="font-serif text-2xl font-bold text-virasat-gold-light">
          Management CMS Portal
        </h2>
        <p className="mt-1 text-xs text-white/60">
          Authorized executive and property sales access only
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-virasat-green-dark border border-virasat-gold/40 py-8 px-6 shadow-2xl rounded-xl sm:px-10 text-white space-y-6">
          {errorMsg && (
            <div className="bg-red-900/60 border border-red-500/50 p-3 rounded text-xs text-red-200">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-virasat-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-virasat-gold"
                />
              </div>
            </div>

            <div className="bg-virasat-charcoal-dark/50 border border-virasat-gold/20 p-2.5 rounded text-[11px] text-white/70">
              <span className="font-semibold text-virasat-gold block mb-0.5">
                Default Credentials:
              </span>
              <span>admin@virasatdevelopments.com / virasat@admin2026</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3 rounded hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Verifying..." : "Sign In to Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link href="/" className="text-xs text-white/50 hover:text-virasat-gold">
              ← Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
