import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";
import {
  Users,
  Building,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const totalLeads = await prisma.enquiry.count();
  const newLeads = await prisma.enquiry.count({ where: { status: "NEW" } });
  const siteVisits = await prisma.enquiry.count({
    where: { enquiryType: "SITE_VISIT_BOOKING" },
  });
  const totalProjects = await prisma.project.count();

  const recentLeads = await prisma.enquiry.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
    include: { project: { select: { title: true } } },
  });

  return (
    <div className="flex min-h-screen bg-virasat-charcoal-dark text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-virasat-gold/20 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-white">Executive Dashboard</h1>
            <p className="text-xs text-white/60 mt-1">
              Real-time real estate pipeline and content overview for Virasat Developments
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/admin/leads"
              className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded hover:brightness-110 transition-all"
            >
              Manage Leads CRM
            </Link>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-virasat-green-dark border border-virasat-gold/30 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
                Total Enquiries
              </span>
              <Users className="w-5 h-5 text-virasat-gold" />
            </div>
            <span className="font-serif text-3xl font-bold text-virasat-gold-light">
              {totalLeads}
            </span>
            <span className="text-[11px] text-emerald-400 block mt-1 font-medium">
              Registered on portal
            </span>
          </div>

          <div className="bg-virasat-green-dark border border-virasat-gold/30 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
                New Uncontacted
              </span>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-serif text-3xl font-bold text-amber-300">{newLeads}</span>
            <span className="text-[11px] text-amber-300/80 block mt-1 font-medium">
              Awaiting relationship callback
            </span>
          </div>

          <div className="bg-virasat-green-dark border border-virasat-gold/30 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
                Site Visits Booked
              </span>
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <span className="font-serif text-3xl font-bold text-blue-300">{siteVisits}</span>
            <span className="text-[11px] text-blue-300/80 block mt-1 font-medium">
              VIP inspections scheduled
            </span>
          </div>

          <div className="bg-virasat-green-dark border border-virasat-gold/30 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-white/60 uppercase tracking-wider font-medium">
                Active Projects
              </span>
              <Building className="w-5 h-5 text-teal-400" />
            </div>
            <span className="font-serif text-3xl font-bold text-teal-300">{totalProjects}</span>
            <span className="text-[11px] text-teal-300/80 block mt-1 font-medium">
              Published across Varanasi
            </span>
          </div>
        </div>

        {/* Recent Inquiries Section */}
        <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl overflow-hidden shadow-xl space-y-4 p-6">
          <div className="flex items-center justify-between pb-3 border-b border-virasat-gold/20">
            <div>
              <h2 className="font-serif text-xl font-bold text-white">Recent Customer Leads</h2>
              <p className="text-xs text-white/60 mt-0.5">
                Latest expressions of interest received from website visitors
              </p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs text-virasat-gold hover:underline flex items-center space-x-1"
            >
              <span>View All Leads</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-virasat-charcoal-dark/70 text-virasat-gold uppercase tracking-wider font-bold border-b border-virasat-gold/20">
                <tr>
                  <th className="p-3">Client Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Project / Intent</th>
                  <th className="p-3">Budget</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-virasat-green/30 transition-colors">
                    <td className="p-3 font-semibold text-white">{lead.fullName}</td>
                    <td className="p-3 font-mono text-white/80">{lead.phone}</td>
                    <td className="p-3 text-virasat-gold-light">
                      {lead.interestedProjectName || lead.project?.title || "General Portfolio"}
                    </td>
                    <td className="p-3 text-white/70">{lead.budgetRange || "Flexible"}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          lead.status === "NEW"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : lead.status === "SITE_VISIT_SCHEDULED"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-3 text-white/50">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
