import React from "react";
import { prisma } from "@/lib/prisma";
import LeadsManagerClient from "@/components/admin/LeadsManagerClient";

export default async function AdminLeadsPage() {
  const initialLeads = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      project: { select: { title: true, slug: true } },
      notes: { orderBy: { createdAt: "desc" } },
    },
  });

  const projects = await prisma.project.findMany({
    select: { id: true, title: true },
  });

  return <LeadsManagerClient initialLeads={initialLeads} projects={projects} />;
}
