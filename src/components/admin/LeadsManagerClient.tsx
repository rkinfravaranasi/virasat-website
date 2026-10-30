"use client";

import React, { useState, useMemo } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import {
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

interface LeadsManagerClientProps {
  initialLeads: any[];
  projects: any[];
}

export default function LeadsManagerClient({
  initialLeads,
  projects,
}: LeadsManagerClientProps) {
  const [leads, setLeads] = useState<any[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [projectFilter, setProjectFilter] = useState("ALL");

  const [activeNoteModalLead, setActiveNoteModalLead] = useState<any | null>(null);
  const [newNoteText, setNewNoteText] = useState("");
  const [noteLoading, setNoteLoading] = useState(false);

  const statuses = [
    "ALL",
    "NEW",
    "CONTACTED",
    "QUALIFIED",
    "SITE_VISIT_SCHEDULED",
    "CONVERTED",
    "NOT_INTERESTED",
  ];

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      if (statusFilter !== "ALL" && l.status !== statusFilter) return false;
      if (projectFilter !== "ALL" && l.projectId !== projectFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = l.fullName?.toLowerCase().includes(q);
        const matchesPhone = l.phone?.toLowerCase().includes(q);
        const matchesEmail = l.email?.toLowerCase().includes(q);
        const matchesProject = l.interestedProjectName?.toLowerCase().includes(q);
        if (!matchesName && !matchesPhone && !matchesEmail && !matchesProject) return false;
      }
      return true;
    });
  }, [leads, statusFilter, projectFilter, searchQuery]);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
      }
    } catch (e) {
      console.error("Failed to update status", e);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim() || !activeNoteModalLead) return;

    setNoteLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${activeNoteModalLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: newNoteText.trim(), author: "Admin Sales Desk" }),
      });

      const data = await res.json();
      if (res.ok && data.lead) {
        setLeads((prev) =>
          prev.map((l) => (l.id === activeNoteModalLead.id ? data.lead : l))
        );
        setActiveNoteModalLead(data.lead);
        setNewNoteText("");
      }
    } catch (e) {
      console.error("Failed to append note", e);
    } finally {
      setNoteLoading(false);
    }
  };

  const exportCSV = () => {
    const headers = [
      "ID",
      "Full Name",
      "Phone",
      "Email",
      "Project",
      "Category",
      "Budget",
      "Status",
      "Enquiry Type",
      "Created At",
    ];

    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.interestedProjectName || l.project?.title || "General"}"`,
      `"${l.propertyType || ""}"`,
      `"${l.budgetRange || ""}"`,
      `"${l.status}"`,
      `"${l.enquiryType}"`,
      `"${new Date(l.createdAt).toISOString()}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `virasat_leads_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-virasat-charcoal-dark text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-virasat-gold/20 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-white">Leads Management CRM</h1>
            <p className="text-xs text-white/60 mt-1">
              Track customer inquiries, status pipeline, and relationship notes
            </p>
          </div>

          <button
            onClick={exportCSV}
            className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded hover:brightness-110 transition-all flex items-center space-x-1.5 shadow"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-virasat-green-dark border border-virasat-gold/30 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-virasat-gold absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search name, phone, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-virasat-gold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-virasat-gold font-semibold uppercase">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-virasat-gold"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s === "ALL" ? "All Statuses" : s.replace(/_/g, " ")}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-virasat-gold font-semibold uppercase">
                Project:
              </span>
              <select
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
                className="bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-virasat-gold"
              >
                <option value="ALL">All Projects</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-virasat-charcoal-dark/70 text-virasat-gold uppercase tracking-wider font-bold border-b border-virasat-gold/20">
                <tr>
                  <th className="p-3.5">Client & Contact</th>
                  <th className="p-3.5">Project of Interest</th>
                  <th className="p-3.5">Category & Budget</th>
                  <th className="p-3.5">Type & Date</th>
                  <th className="p-3.5">Status Pipeline</th>
                  <th className="p-3.5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-virasat-green/30 transition-colors">
                    {/* Client Name & Phone */}
                    <td className="p-3.5 space-y-1">
                      <span className="font-bold text-white block text-sm">
                        {lead.fullName}
                      </span>
                      <div className="flex items-center space-x-2 text-white/70">
                        <a
                          href={`tel:${lead.phone}`}
                          className="hover:text-virasat-gold flex items-center space-x-1"
                        >
                          <Phone className="w-3 h-3 text-virasat-gold" />
                          <span>{lead.phone}</span>
                        </a>
                      </div>
                      <div className="text-[11px] text-white/50">{lead.email}</div>
                    </td>

                    {/* Project */}
                    <td className="p-3.5">
                      <span className="font-semibold text-virasat-gold-light block">
                        {lead.interestedProjectName || lead.project?.title || "General Portfolio"}
                      </span>
                      {lead.preferredConfiguration && (
                        <span className="text-[11px] text-white/60 block">
                          Config: {lead.preferredConfiguration}
                        </span>
                      )}
                    </td>

                    {/* Category & Budget */}
                    <td className="p-3.5 space-y-0.5">
                      <span className="text-white/80 block">
                        {lead.propertyType || "Residential Plots"}
                      </span>
                      <span className="text-[11px] text-virasat-gold font-mono block">
                        Budget: {lead.budgetRange || "Flexible"}
                      </span>
                    </td>

                    {/* Type & Date */}
                    <td className="p-3.5 space-y-0.5">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-white block w-fit">
                        {lead.enquiryType.replace(/_/g, " ")}
                      </span>
                      <span className="text-[11px] text-white/50 block">
                        {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>

                    {/* Status Dropdown */}
                    <td className="p-3.5">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded border focus:outline-none ${
                          lead.status === "NEW"
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
                            : lead.status === "SITE_VISIT_SCHEDULED"
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                            : lead.status === "CONVERTED"
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                            : "bg-virasat-charcoal-dark text-white/80 border-virasat-gold/30"
                        }`}
                      >
                        {statuses
                          .filter((s) => s !== "ALL")
                          .map((st) => (
                            <option key={st} value={st} className="bg-virasat-charcoal-dark">
                              {st.replace(/_/g, " ")}
                            </option>
                          ))}
                      </select>
                    </td>

                    {/* Actions / Notes */}
                    <td className="p-3.5">
                      <button
                        onClick={() => setActiveNoteModalLead(lead)}
                        className="flex items-center space-x-1.5 text-xs text-virasat-gold hover:text-white bg-virasat-charcoal-dark border border-virasat-gold/30 px-2.5 py-1.5 rounded transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Notes ({lead.notes?.length || 0})</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Notes Modal */}
        {activeNoteModalLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-virasat-green-dark border border-virasat-gold/40 rounded-xl p-6 text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-virasat-gold/20">
                <div>
                  <h3 className="font-serif text-lg font-bold text-virasat-gold-light">
                    Internal Notes: {activeNoteModalLead.fullName}
                  </h3>
                  <span className="text-xs text-white/60">
                    Phone: {activeNoteModalLead.phone}
                  </span>
                </div>
                <button
                  onClick={() => setActiveNoteModalLead(null)}
                  className="text-white/60 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Notes List */}
              <div className="max-h-60 overflow-y-auto space-y-2.5 pr-2">
                {activeNoteModalLead.notes && activeNoteModalLead.notes.length > 0 ? (
                  activeNoteModalLead.notes.map((n: any) => (
                    <div
                      key={n.id}
                      className="bg-virasat-charcoal-dark border border-virasat-gold/20 p-3 rounded text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between text-[10px] text-virasat-gold">
                        <span>{n.author}</span>
                        <span>{new Date(n.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-white/80 leading-relaxed font-light">{n.note}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-white/50 italic py-4 text-center">
                    No internal notes logged yet.
                  </p>
                )}
              </div>

              {/* Add Note Input */}
              <form onSubmit={handleAddNote} className="space-y-3 pt-2">
                <textarea
                  rows={3}
                  required
                  placeholder="Record customer discussion, scheduled visit time, or follow-up status..."
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded p-2.5 text-xs text-white focus:outline-none focus:border-virasat-gold resize-none"
                />

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setActiveNoteModalLead(null)}
                    className="px-4 py-2 text-xs text-white/70 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={noteLoading}
                    className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-4 py-2 rounded hover:brightness-110"
                  >
                    {noteLoading ? "Saving..." : "Add Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
