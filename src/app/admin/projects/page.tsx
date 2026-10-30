import React from "react";
import { prisma } from "@/lib/prisma";
import ProjectsManagerClient from "@/components/admin/ProjectsManagerClient";

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
    include: {
      category: true,
      _count: { select: { configurations: true, amenities: true, enquiries: true } },
    },
  });

  const categories = await prisma.projectCategory.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  return <ProjectsManagerClient initialProjects={projects} categories={categories} />;
}
