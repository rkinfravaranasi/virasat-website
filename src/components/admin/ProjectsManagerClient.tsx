"use client";

import React, { useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Plus, Building, ExternalLink, X, Check, Star, CheckCircle } from "lucide-react";

interface ProjectsManagerClientProps {
  initialProjects: any[];
  categories: any[];
}

export default function ProjectsManagerClient({
  initialProjects,
  categories,
}: ProjectsManagerClientProps) {
  const [projects, setProjects] = useState<any[]>(initialProjects);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    propertyType: "Plotted Development",
    categoryId: categories[0]?.id || "",
    status: "Upcoming",
    locationName: "Ring Road Corridor, Varanasi",
    shortDescription: "",
    priceStarting: "Price on Request",
    possessionDate: "December 2027",
    totalArea: "20 Acres",
    openSpaceRatio: "70% Greens",
    roadWidth: "40 ft & 60 ft",
    reraNumber: "[UP-RERA Registration in Progress]",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  });

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to create project");
      } else {
        setProjects([data.project, ...projects]);
        setIsAddModalOpen(false);
        setFormData({
          title: "",
          propertyType: "Plotted Development",
          categoryId: categories[0]?.id || "",
          status: "Upcoming",
          locationName: "Ring Road Corridor, Varanasi",
          shortDescription: "",
          priceStarting: "Price on Request",
          possessionDate: "December 2027",
          totalArea: "20 Acres",
          openSpaceRatio: "70% Greens",
          roadWidth: "40 ft & 60 ft",
          reraNumber: "[UP-RERA Registration in Progress]",
          heroImage:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          isFeatured: true,
        });
      }
    } catch (err) {
      setErrorMsg("Network error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-virasat-charcoal-dark text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-virasat-gold/20 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-white">Project Management</h1>
            <p className="text-xs text-white/60 mt-1">
              Add new plotted enclaves, luxury apartments, and commercial projects
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded hover:brightness-110 transition-all flex items-center space-x-1.5 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-virasat-charcoal-dark">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white px-2.5 py-1 rounded border border-white/20 backdrop-blur-md">
                      {project.status}
                    </span>
                    {project.isFeatured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-virasat-gold text-virasat-green-dark px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-virasat-gold font-bold uppercase tracking-wider block">
                    {project.propertyType}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-white/60 line-clamp-2">{project.shortDescription}</p>

                  <div className="pt-2 border-t border-virasat-gold/15 text-xs text-white/70 space-y-1">
                    <div>Location: {project.locationName}</div>
                    <div>Pricing: {project.priceStarting || "Price on Request"}</div>
                    <div className="text-[11px] text-white/50">{project.reraNumber}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-virasat-charcoal-dark/50 border-t border-virasat-gold/20 flex items-center justify-between">
                <span className="text-[11px] text-white/60">
                  {project._count?.enquiries || 0} Inquiries received
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  className="inline-flex items-center space-x-1 text-xs text-virasat-gold hover:underline"
                >
                  <span>View Public Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-virasat-green-dark border border-virasat-gold/40 rounded-xl p-6 text-white shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-virasat-gold/20">
                <h3 className="font-serif text-xl font-bold text-virasat-gold-light">
                  Add New Real Estate Project
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-white/60 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {errorMsg && (
                <div className="bg-red-900/60 border border-red-500/50 p-3 rounded text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Virasat Kashi Enclave"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Property Category *
                    </label>
                    <select
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Project Status *
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold"
                    >
                      <option value="New Launch">New Launch</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Under Development">Under Development</option>
                      <option value="Ready to Move">Ready to Move</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Property Type Label
                    </label>
                    <input
                      type="text"
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({ ...formData, propertyType: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Location / Corridor *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.locationName}
                      onChange={(e) =>
                        setFormData({ ...formData, locationName: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                    Short Description *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.shortDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, shortDescription: e.target.value })
                    }
                    className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white focus:outline-none focus:border-virasat-gold resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Starting Price
                    </label>
                    <input
                      type="text"
                      value={formData.priceStarting}
                      onChange={(e) =>
                        setFormData({ ...formData, priceStarting: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Possession Date
                    </label>
                    <input
                      type="text"
                      value={formData.possessionDate}
                      onChange={(e) =>
                        setFormData({ ...formData, possessionDate: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                      Masterplan Area
                    </label>
                    <input
                      type="text"
                      value={formData.totalArea}
                      onChange={(e) => setFormData({ ...formData, totalArea: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                    RERA Registration Number (or Placeholder)
                  </label>
                  <input
                    type="text"
                    value={formData.reraNumber}
                    onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
                    className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                    Hero Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.heroImage}
                    onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                    className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onChange={(e) =>
                      setFormData({ ...formData, isFeatured: e.target.checked })
                    }
                    className="accent-virasat-gold"
                  />
                  <label htmlFor="isFeatured" className="cursor-pointer">
                    Mark as Featured on Homepage
                  </label>
                </div>

                <div className="flex justify-end space-x-2 pt-4 border-t border-virasat-gold/20">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-xs text-white/70 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-6 py-2 rounded hover:brightness-110"
                  >
                    {loading ? "Creating..." : "Save & Publish Project"}
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
