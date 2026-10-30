import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
      include: {
        category: true,
        configurations: true,
        amenities: true,
        _count: { select: { enquiries: true } },
      },
    });

    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const slug =
      data.slug ||
      data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const newProject = await prisma.project.create({
      data: {
        title: data.title,
        slug,
        tagline: data.tagline || null,
        shortDescription: data.shortDescription,
        fullDescription: data.fullDescription || data.shortDescription,
        categoryId: data.categoryId,
        status: data.status || "Upcoming",
        propertyType: data.propertyType || "Plotted Development",
        locationName: data.locationName,
        heroImage:
          data.heroImage ||
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        priceStarting: data.priceStarting || null,
        possessionDate: data.possessionDate || null,
        totalArea: data.totalArea || null,
        openSpaceRatio: data.openSpaceRatio || null,
        roadWidth: data.roadWidth || null,
        reraNumber: data.reraNumber || "[UP-RERA Registration in Progress]",
        isFeatured: Boolean(data.isFeatured),
        isPublished: data.isPublished !== undefined ? Boolean(data.isPublished) : true,
      },
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
