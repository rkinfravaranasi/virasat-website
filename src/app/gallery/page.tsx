import React from "react";
import { prisma } from "@/lib/prisma";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Visual Gallery | VIRASAT Developments Varanasi",
  description:
    "Explore high-resolution photography, master plans, clubhouse amenities, and landscaping of Virasat real estate developments in Varanasi.",
};

export default async function GalleryPage() {
  const media = await prisma.projectMedia.findMany({
    orderBy: { order: "asc" },
    include: {
      project: { select: { title: true, slug: true, locationName: true } },
    },
  });

  return <GalleryClient initialMedia={media} />;
}
